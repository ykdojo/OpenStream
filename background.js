// this is the background code...
// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function () {
	function openChatWindow(url) {
		// Desired width and height of the window
		const width = 545;
		const height = 600;
	
		// Calculate the position from the right edge of the screen
		const left = window.screen.width - width;
		const top = 0;
	
		// Set the desired features for the pop-out window including size and location
		const features = `location=no,menubar=no,toolbar=no,width=${width},height=${height},left=${left},top=${top}`;
	
		// Open the new window with the specified features
		window.open(url, 'ChatWindow', features);
	}
	
	// Usage: call this function with the URL of the chat
	openChatWindow('https://www.twitch.tv/popout/ykdojo/chat');
});