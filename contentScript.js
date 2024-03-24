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

const viewerCard = document.getElementById('VIEWER_CARD_ID');

viewerCard.querySelectorAll('div[data-a-target="tw-core-button-label-text"]').forEach(function(element) {
  if (element.textContent.trim() === "Invite") {
      console.log('element found');
      let parent = element.parentElement;
      while (parent) {
          // Get all direct children
          let childDivs = Array.from(parent.children).filter(child => child.tagName === 'DIV');
          if (parent.tagName.toLowerCase() === 'div' && childDivs.length >= 4) {
              console.log('Parent div with 4 or more direct child divs:', parent);
              // If the last child div's text is CRM, then break.
              if(childDivs[childDivs.length-1].textContent.trim() === 'CRM') {
                break;
              }
              
              // Adding the HTML snippet as the last child
              parent.insertAdjacentHTML('beforeend', CRMButtonToInsert);
              break; // Exit the loop as we found the target parent
          }
          parent = parent.parentElement;
      }
  }
});

// First, identify and locate a div with the ID VIEWER_CARD_ID.
// Then, find the a element wiht the tw-link class and console.log the text in it.
const usernameLink = viewerCard.querySelector('a.tw-link');
console.log(usernameLink.textContent);