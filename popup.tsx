import "./popup.css"
import React, { useRef } from "react"

function IndexPopup() {
  const videoRef = useRef(null);
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
        const webcamStream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) videoRef.current.srcObject = webcamStream;

        // Specify MediaRecorder options
        const options = {
          mimeType: 'video/webm; codecs=vp9',
          videoBitsPerSecond: 2500000, // Adjust as needed
          audioBitsPerSecond: 128000 // Adjust as needed
        };

        // Setup MediaRecorder with custom options
        const mediaRecorder = new MediaRecorder(stream, options);
        let chunks = [];

        // Set up webcamRecorder with the same options
        const webcamRecorder = new MediaRecorder(webcamStream, options);
        let webcamCunks = [];

        mediaRecorder.ondataavailable = e => chunks.push(e.data);
        mediaRecorder.onstop = e => {
          const completeBlob = new Blob(chunks, { type: chunks[0].type });
          downloadBlob(completeBlob, "recorded-screen.webm");
        };

        webcamRecorder.ondataavailable = e => webcamCunks.push(e.data);
        webcamRecorder.onstop = e => {
          const completeWebcamBlob = new Blob(webcamCunks, { type: webcamCunks[0].type });
          downloadBlob(completeWebcamBlob, "recorded-webcam.webm");
        }

        // Start recording
        mediaRecorder.start();
        webcamRecorder.start();

        // Stop recording after 5 seconds
        setTimeout(() => {
          mediaRecorder.stop();
          webcamRecorder.stop();
        }, 5000);
      } catch (err) {
        console.error("Error:", err);
      }
    }

    function downloadBlob(blob, filename) {
      // Create a URL for the blob
      const url = URL.createObjectURL(blob);
      // Create an anchor element and trigger a download
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
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
        Capture Screen Video
      </button>
      <video ref={videoRef} autoPlay style={{ width: "300px" }}></video>
    </div>
  )
}

export default IndexPopup
