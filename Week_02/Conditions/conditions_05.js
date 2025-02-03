/* 
Write a function named checkAnimal:
Take a parameter animalType.
Use a ternary operator to return:
"You have a clever companion!" if animalType is "fox".
"Not a fox, but still cool!" otherwise.
Call the function with values like "fox" and "cat". 
*/

function checkAnimal(animalType) {
    return animalType === "fox" ? "You have a clever companion!" : "Not a fox, but still cool!";
}

// Call the function with values like "fox" and "cat" and print the result
console.log(checkAnimal("fox")); // Should print: "You have a clever companion!"
console.log(checkAnimal("cat")); // Should print: "Not a fox, but still cool!"