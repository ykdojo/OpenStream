function hideLinkedInSuggestedPosts(root = document.body) {
  console.log('Hiding LinkedIn suggested posts');
  console.log('root is', root);

  // Select all span elements within divs that match the specified classes
  const spans = root.querySelectorAll('span');
  // If root is a span, add it to spans
  if (root.tagName === 'SPAN') {
    spans = [root, ...spans];
  }

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
              mutation.addedNodes.forEach((node) => {
                  if (node.tagName === 'SPAN') {
                    hideLinkedInSuggestedPosts(node);
                  }
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