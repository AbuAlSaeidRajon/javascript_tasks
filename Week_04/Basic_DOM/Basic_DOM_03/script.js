/*
Create an HTML file with an <input> field and a <div> with the ID displayText.
Write JavaScript to:
- Continuously update the <div> with the input field's value as the user types.
- Use the input event for real-time updates.
*/

const textInput = document.getElementById("textInput");
const displayText = document.getElementById("displayText");

function updateText() {
  displayText.textContent = textInput.value;
}

textInput.addEventListener("input", updateText);