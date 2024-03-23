const header = document.querySelector('.stream-chat-header');
if (header) {
  header.parentNode.removeChild(header);
}

document.querySelectorAll('div[data-a-target="tw-core-button-label-text"]').forEach(function(element) {
  if (element.textContent.trim() === "Invite") {
      console.log('element found');
      let parent = element.parentElement;
      while (parent) {
          // Get all direct children
          let childDivs = Array.from(parent.children).filter(child => child.tagName === 'DIV');
          if (parent.tagName.toLowerCase() === 'div' && childDivs.length >= 4) {
              console.log('Parent div with 4 or more direct child divs:', parent);
              break; // Exit the loop as we found the target parent
          }
          parent = parent.parentElement;
      }
  }
});
