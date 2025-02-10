
// Select the paragraph and button elements
const toggleParagraph = document.getElementById('toggleParagraph');
const toggleButton = document.getElementById('toggleButton');

// Function to toggle the visibility of the paragraph
function toggleVisibility() {
  if (toggleParagraph.style.display === 'none') {
    toggleParagraph.style.display = 'block';
  } else {
    toggleParagraph.style.display = 'none';
  }
}

// Add a click event listener to the button
toggleButton.addEventListener('click', toggleVisibility);