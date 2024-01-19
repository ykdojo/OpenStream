document.addEventListener('DOMContentLoaded', function () {
    var captureButton = document.getElementById('captureButton');
    captureButton.addEventListener('click', function () {
        chrome.tabs.captureVisibleTab(null, {}, function (imageSrc) {
            var img = document.getElementById('screenshotImg');
            img.src = imageSrc;
            img.style.display = 'block';
        });
    }, false);
}, false);
