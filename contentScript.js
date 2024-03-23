const header = document.querySelector('.stream-chat-header');
if (header) {
  header.parentNode.removeChild(header);
}

const CRMButtonToInsert = `<div class="Layout-sc-1xcs6mc-0" style="margin-left:5px">
  <div class="InjectLayout-sc-1i43xsx-0 kBtJDm viewer-card-drag-cancel">
      <div class="Layout-sc-1xcs6mc-0 cajBtn">
          <div class="Layout-sc-1xcs6mc-0"><button
                  class="ScCoreButton-sc-ocjdkq-0 ScCoreButtonPrimary-sc-ocjdkq-1 bTXTVH gmCwLG">
                  <div class="ScCoreButtonLabel-sc-s7h2b7-0 gPDjGr">
                      <div data-a-target="tw-core-button-label-text" class="Layout-sc-1xcs6mc-0 bFxzAY">CRM
                      </div>
                  </div>
              </button></div>
      </div>
  </div>
</div>`

document.querySelectorAll('div[data-a-target="tw-core-button-label-text"]').forEach(function(element) {
  if (element.textContent.trim() === "Invite") {
      console.log('element found');
      let parent = element.parentElement;
      while (parent) {
          // Get all direct children
          let childDivs = Array.from(parent.children).filter(child => child.tagName === 'DIV');
          if (parent.tagName.toLowerCase() === 'div' && childDivs.length >= 4) {
              console.log('Parent div with 4 or more direct child divs:', parent);
              // HTML snippet to add
              const htmlSnippet = `<div>Your HTML content here</div>`;
              // Adding the HTML snippet as the last child
              parent.insertAdjacentHTML('beforeend', CRMButtonToInsert);
              break; // Exit the loop as we found the target parent
          }
          parent = parent.parentElement;
      }
  }
});

// TODO next: identify the chatter's username