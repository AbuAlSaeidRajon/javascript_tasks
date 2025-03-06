/* 
Write a function named findFox:
Take two parameters: hasFox and foxName.
If hasFox is true AND foxName equals "Fiona", return "Fiona the fox is here!"
Otherwise, return "No foxes found."
Call the function with different fox names. 
*/

function findFox(hasFox, foxName) {
    if (hasFox && foxName === "Fiona") {
        return "Fiona the fox is here!";
    } else {
        return "No foxes found.";
    }
}

// Examples of calling the function with different fox names
console.log(findFox(true, "Fiona")); // Fiona the fox is here!
console.log(findFox(false, "Fiona")); // No foxes found.
console.log(findFox(true, "Felix")); // No foxes found.
console.log(findFox(false, "Felix")); // No foxes found.
console.log(findFox(true, "Finn")); // No foxes found.