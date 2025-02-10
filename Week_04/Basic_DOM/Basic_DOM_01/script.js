/* 
Use an HTML file with a <p> element that has the ID content.
Write JavaScript to select this element using getElementById.
Create a function that changes its text to "Hello, World!" when a button is clicked.
*/

// Get the <p> element with the ID content
const  contentElement = document.getElementById("content");

function changeText() {
    contentElement.textContent = "Hello, World!";
}

const button = document.querySelector("button");

button.addEventListener("click", changeText);