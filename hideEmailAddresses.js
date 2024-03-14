function blurContentContainingEmails(root = document.body) {
  const emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/;

  // Function to blur elements based on the presence of an email address
  const blurElementIfContainsEmail = (element) => {
      if (emailRegex.test(element.nodeValue || element.value)) {
          element.parentNode.style.filter = "blur(7px)";
      }
  };

  // Use TreeWalker to handle general content
  const filter = {
      acceptNode: function(node) {
          return emailRegex.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
  };
  
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, filter, false);
  let node;
  while (node = walker.nextNode()) {
      blurElementIfContainsEmail(node);
  }
  
  // Directly handle input elements
  const inputs = root.querySelectorAll("input[type='email'], input[type='password'], input[type='text']");
  inputs.forEach(input => {
      // For "text" inputs, check if the value matches the email pattern
      if (input.type === "text" && emailRegex.test(input.value)) {
          input.style.filter = "blur(7px)";
      } else if (input.type !== "text") { // For "email" and "password" inputs, blur directly
          input.style.filter = "blur(7px)";
      }
  });
}

// Enhanced usage
blurContentContainingEmails(); // Initial call for the main document

// Function to handle dynamic content like popups
function handleDynamicContent() {
  // Example: Re-run blur function after a popup is opened.
  const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
          if (mutation.addedNodes.length) {
              mutation.addedNodes.forEach((node) => {
                  blurContentContainingEmails(node);
              });
          }
          // Check if attributes or characterData have changed
          if (mutation.type === 'attributes' || mutation.type === 'characterData') {
              const target = mutation.target;
              // For characterData changes, target is the text node itself
              // For attribute changes, target is the element with the changed attribute
              blurContentContainingEmails(target.nodeType === Node.TEXT_NODE ? target.parentNode : target);
          }
      });
  });

  observer.observe(document.body, {
      childList: true,
      subtree: true
  });
}

handleDynamicContent(); // Listen for dynamic content like popups