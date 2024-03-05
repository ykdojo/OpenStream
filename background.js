// this is the background code...
// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function () {
	function openBrowserWindow(url, width, height, top, name) {
		// Calculate the position from the right edge of the screen
		const left = window.screen.width - width;
	
		// Set the desired features for the pop-out window including size and location
		const features = `location=no,menubar=no,toolbar=no,width=${width},height=${height},left=${left},top=${top}`;
	
		// Open the new window with the specified features
		window.open(url, name, features);
	}

	openBrowserWindow('https://www.twitch.tv/popout/ykdojo/chat', 545, 600, 0, 'Twitch Chat');
	openBrowserWindow('https://raw.githubusercontent.com/ykdojo/OpenStream/popout_twitch_chat/b2.webp', 1050, 630, 550, 'Background');
});