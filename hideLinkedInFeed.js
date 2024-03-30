// Create a <style> tag
const style = document.createElement('style');

// Add CSS rule to hide main.scaffold-layout__main
style.innerHTML = 'main.scaffold-layout__main { display: none; }';

// Append the <style> tag to the <head> of the document
document.head.appendChild(style);
