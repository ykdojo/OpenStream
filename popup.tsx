import { useEffect, useState } from "react"

import "./popup.css"
import React from "react"

function IndexPopup() {
  const [imgSrc, setImgSrc] = useState("")

  function captureSS() {
    chrome.tabs.captureVisibleTab(null, {}, function (imageSrc) {
      setImgSrc(imageSrc ?? "")
    })
  }

  function captureSV() {
    async function startRecording() {
      try {
        // Request screen capture
        const displayMediaOptions = { video: true };
        const stream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);

        // Setup MediaRecorder to record the captured stream
        const mediaRecorder = new MediaRecorder(stream);
        let chunks = [];
        mediaRecorder.ondataavailable = e => chunks.push(e.data);
        mediaRecorder.onstop = e => {
          const completeBlob = new Blob(chunks, { type: chunks[0].type });
          downloadBlob(completeBlob);
        };

        // Start recording
        mediaRecorder.start();

        // Stop recording after 5 seconds
        setTimeout(() => mediaRecorder.stop(), 5000);
      } catch (err) {
        console.error("Error:", err);
      }
    }

    function downloadBlob(blob) {
      // Create a URL for the blob
      const url = URL.createObjectURL(blob);
      // Create an anchor element and trigger a download
      const a = document.createElement("a");
      a.href = url;
      a.download = "recorded-screen.webm";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      // Release the object URL
      URL.revokeObjectURL(url);
    }

    startRecording();
  }

  return (
    <div className="container">
      <button id="captureButton" onClick={captureSV}>
        Capture Screen Video!!!
      </button>
      <img
        id="screenshotImg"
        src={imgSrc}
        style={{
          display: imgSrc.length ? "block" : "none",
          width: "100%",
          marginTop: "10px"
        }}
      />
    </div>
  )
}

export default IndexPopup
