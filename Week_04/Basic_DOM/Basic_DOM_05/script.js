/*
Create an HTML file with:
- A <button> to change the background color.
- A <input> field for users to enter a color.
- A <p> element where the text color changes based on the input.

Write JavaScript to:
- Change the background color to a random color when the button is clicked.
- Update the paragraph’s text color to match the user’s input value
*/

const changeBgButton = document.getElementById("changeBgButton");
const colorInput = document.getElementById("colorInput");
const colorParagraph = document.getElementById("colorParagraph");

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBgColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
}

function updateTextColor() {
    const color = colorInput.value;
    colorParagraph.style.color = color;
}

changeBgButton.addEventListener("click", changeBgColor);
colorInput.addEventListener("input", updateTextColor);