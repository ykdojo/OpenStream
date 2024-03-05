// this is the background code...
// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function () {
	function openBrowserWindow(url, width, height, top) {
		// Calculate the position from the right edge of the screen
		const left = window.screen.width - width;
	
		// Set the desired features for the pop-out window including size and location
		const features = `location=no,menubar=no,toolbar=no,width=${width},height=${height},left=${left},top=${top}`;
	
		// Open the new window with the specified features
		window.open(url, 'ChatWindow', features);
	}
	
	// Usage: call this function with the URL of the chat
	openBrowserWindow('https://www.twitch.tv/popout/ykdojo/chat', 545, 600, 0);
});