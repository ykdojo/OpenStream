# Screen & Webcam Recorder - OpenStream

More about this project in this doc: https://docs.google.com/document/d/1Xpya6dcpieb21EmNE0-Mah7I8RzS6q4HO6ayqpE3PU4/

---
## Description

OpenStream is an open-source project for creating a free tool that records screen and webcam footage simultaneously. It's designed for content creators and developed collaboratively through our community on Discord.

## Features
- **Popup Interface**: Click on the extension icon to open a popup window.
- **Capture Screenshot**: Ability to capture a screenshot of the current tab.
- **User Interaction**: A minimal user interface to interact with the extension.

## Installation

To install this extension in your Chrome browser, follow these steps:

1. **Download or Clone the Repository**: Download this repository to your local machine or use `git clone`.
2. **Install Dependencies** Run `pnpm i`
3. **Start Dev Server** Run `pnpm dev`
4. **Open Chrome Extensions**: Go to `chrome://extensions/` in your Chrome browser.
5. **Enable Developer Mode**: Toggle on the "Developer mode" at the top right of the extensions page.
6. **Load the Extension**: Click on "Load unpacked" and select the `build/chrome-mv3-dev` directory.

## Usage

After installation, click on the extension icon in the Chrome toolbar to open the popup window. From there, you can interact with the features provided.

## Development

- This extension uses **Plasmo Framework** with **React** and **Typescript**.
- The entry point is `popup.tsx`.

## Contributing

Contributions to this project are welcome. To contribute:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/ykdojo/OpenStream/blob/main/LICENSE) file for details.
