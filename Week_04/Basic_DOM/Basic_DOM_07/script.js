// Select the button and counter display elements
const clickButton = document.getElementById('clickButton');
const counterDisplay = document.getElementById('counter');

// Initialize the counter
let counter = 0;

// Function to increment the counter and update the display
function incrementCounter() {
  counter++;
  counterDisplay.textContent = counter;
}

// Add a click event listener to the button
clickButton.addEventListener('click', incrementCounter);