document.querySelectorAll('h2.feed-skip-link__container').forEach((header) => {
    // Check the next sibling div
    checkAndHideSuggested(header.nextElementSibling);
    // Check the previous sibling div
    checkAndHideSuggested(header.previousElementSibling);
  });
  
  function checkAndHideSuggested(divElem) {
    if (!divElem) return; // If there's no element, do nothing
    
    // Look for a span with the text 'Suggested' in the div
    let spans = divElem.getElementsByTagName('span');
    for (let span of spans) {
      if (span.textContent.trim() === 'Suggested') {
        // If found, hide the div and stop checking further
        divElem.style.display = 'none';
        break;
      }
    }
  }
  