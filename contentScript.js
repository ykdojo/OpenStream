const header = document.querySelector('.stream-chat-header');
if (header) {
  header.parentNode.removeChild(header);
}

const CRMButtonToInsert = `<div class="Layout-sc-1xcs6mc-0" style="margin-left:5px">
  <div class="InjectLayout-sc-1i43xsx-0 kBtJDm viewer-card-drag-cancel">
      <div class="Layout-sc-1xcs6mc-0 cajBtn">
          <div class="Layout-sc-1xcs6mc-0"><button id="twitch-crm-button"
                  class="ScCoreButton-sc-ocjdkq-0 ScCoreButtonPrimary-sc-ocjdkq-1 bTXTVH gmCwLG">
                  <div class="ScCoreButtonLabel-sc-s7h2b7-0 gPDjGr">
                      <div data-a-target="tw-core-button-label-text" class="Layout-sc-1xcs6mc-0 bFxzAY">CRM
                      </div>
                  </div>
              </button></div>
      </div>
  </div>
</div>`

function addTwitchCRMButton () {
  const viewerCard = document.getElementById('VIEWER_CARD_ID');

  if (!viewerCard) return;

  const twitchCRMPrefix = 'twitch-crm-';
  const username = viewerCard.querySelector('a.tw-link').textContent;
  const nameForStorage = `${twitchCRMPrefix}${username}`;

  viewerCard.querySelectorAll('div[data-a-target="tw-core-button-label-text"]').forEach(function(element) {
    if (element.textContent.trim() === "Invite") {
        let parent = element.parentElement;
        while (parent) {
            // Get all direct children
            let childDivs = Array.from(parent.children).filter(child => child.tagName === 'DIV');
            if (parent.tagName.toLowerCase() === 'div' && childDivs.length >= 4) {
                // If the last child div's text is CRM, then break.
                if(childDivs[childDivs.length-1].textContent.trim() === 'CRM') {
                  break;
                }
                
                console.log('Adding a CRM button...');

                // Adding the HTML snippet as the last child
                parent.insertAdjacentHTML('beforeend', CRMButtonToInsert);

                // Find the div with twitch-crm-button id, and assign a listener that gets triggered when clicked
                const crmButton = document.getElementById('twitch-crm-button');
                // Add click listener
                crmButton.addEventListener('click', () => {
                  // Retrieve the info we have about username from localStorage
                  const existingInfo = localStorage.getItem(nameForStorage) ? localStorage.getItem(nameForStorage) : "still a mystery to be discovered...";

                  // Instead of using alert, we need to use prompt to say:
                  // What we know about {username} is: <something here>
                  // If you'd like to update it, submit the new info below.
                  const newChatterInfo = prompt(`What we know about ${username} is: ${existingInfo} \n\nIf you'd like to update it, submit the new info below.`, existingInfo);

                  // Save the updated info back to localStorage
                  if (newChatterInfo) {
                    localStorage.setItem(nameForStorage, newChatterInfo);
                  }
                });
                break; // Exit the loop as we found the target parent
            }
            parent = parent.parentElement;
        }
    }
  });
}

// Function to handle dynamic content like popups
function handleDynamicContent() {
  // Example: Re-run blur function after a popup is opened.
  const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
          if (mutation.addedNodes.length) {
              mutation.addedNodes.forEach((node) => {
                  addTwitchCRMButton(node);
              });
          }
      });
  });

  observer.observe(document.body, {
      childList: true,
      subtree: true
  });
}

handleDynamicContent(); // Listen for dynamic content like popups

// const twitchCRMPrefix = 'twitch-crm-';
// const allUsersWithValues = Object.keys(localStorage).reduce((acc, key) => {
//   if (key.startsWith(twitchCRMPrefix)) {
//     acc[key] = localStorage.getItem(key);
//   }
//   return acc;
// }, {});

// // Convert the result to JSON
// const json = JSON.stringify(allUsersWithValues);

// // Create a Blob with the JSON content
// const blob = new Blob([json], {type: 'application/json'});

// // Create a link and trigger the download
// const a = document.createElement('a');
// a.href = URL.createObjectURL(blob);
// a.download = 'twitchCRMBackup.json'; // Name of the file to be downloaded
// document.body.appendChild(a); // Append the link to the body (required for Firefox)
// a.click();
// document.body.removeChild(a); // Clean up
