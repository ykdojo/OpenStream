import "./popup.css"
import React from "react"

function IndexPopup() {
  function captureSV() {
    async function startRecording() {
      try {
        // Request screen capture
        const displayMediaOptions = {
          video: {
            frameRate: { ideal: 60 }
          }
        };
        
        const stream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);

        // Specify MediaRecorder options
        const options = {
          mimeType: 'video/webm; codecs=vp9',
          videoBitsPerSecond: 2500000, // Adjust as needed
          audioBitsPerSecond: 128000 // Adjust as needed
        };

        // Setup MediaRecorder with custom options
        const mediaRecorder = new MediaRecorder(stream, options);
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
        Capture Screen Video!
      </button>
    </div>
  )
}

export default IndexPopup
