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
    alert('yo')
  }

  return (
    <div className="container">
      <button id="captureButton" onClick={captureSV}>
        Capture Screen Video
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
