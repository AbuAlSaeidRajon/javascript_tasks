/*
Use an HTML file with an <input> field, a <button>, and a <ul> list with the ID fruitList.
Write JavaScript to:
- Retrieve the value from the input field when the button is clicked.
- Create a new <li> element and set its text content to the input field's value.
- Append the <li> element to the list.
- Clear the input field after adding the fruit.
*/

// Select the input field, button, and the list
const fruitInput = document.getElementById("fruitInput");
const addFruitButton = document.getElementById("addFruitButton")
const fruitList = document.getElementById("fruitList");

// Function to add a new fruit to the list
function addFruit() {
    const fruit = fruitInput.value.trim();

    if (fruit !== "") {
        const newFruit = document.createElement("li");
        newFruit.textContent = fruit;
        fruitList.appendChild(newFruit);
        fruitInput.value = "";
    
    }
}

// Add a click event listener to the button
addFruitBtn.addEventListener('click', addFruit);