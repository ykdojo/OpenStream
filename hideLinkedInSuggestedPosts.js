function hideLinkedInSuggestedPosts(root = document.body) {
  // Select all span elements within divs that match the specified classes
  const spans = root.querySelectorAll('div.update-components-text-view.break-words > span');

  // Filter spans that exactly contain the text "Suggested"
  const suggestedSpans = Array.from(spans).filter(span => span.textContent.trim() === 'Suggested');

  // Log the filtered spans
  suggestedSpans.forEach(span => {
    // Traverse up from the span on the DOM tree until we find a div element to hide
    let currentElement = span;
    while (currentElement && currentElement !== document.body) {
      if (currentElement.tagName === 'DIV' && currentElement.classList.contains('relative')) {
        currentElement.style.display = 'none'; // Hide the div
        break; // Exit the loop after hiding the div
      }
      currentElement = currentElement.parentNode; // Move up in the DOM tree
    }
  });
}

hideLinkedInSuggestedPosts();

function handleDynamicContent() {
  const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
          if (mutation.addedNodes.length) {
              console.log('node added');
              mutation.addedNodes.forEach((node) => {
                  hideLinkedInSuggestedPosts(node);
              });
          }
      });
  });

  observer.observe(document.body, {
      childList: true,
      subtree: true
  });
}

handleDynamicContent();