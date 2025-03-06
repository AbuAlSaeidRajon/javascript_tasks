/* 
Write a function named checkFoxLover:
Take two parameters: age and likesFoxes.
If age is 18 or older:
Check if likesFoxes is true.
If true, return "You are an adult who likes foxes!"
Otherwise, return "Not a fox fan, but that’s okay!"
Call the function with different ages and preferences.
 */

function checkFoxLover(age, likesFoxes) {
    if (age >= 18) {
        if (likesFoxes) {
            return "You are an adult who likes foxes!";
        } else {
            return "Not a fox fan, but that’s okay!";
        }
    } else {
        return "You are not an adult yet.";
    }
}

// Examples of calling the function with different ages and preferences
console.log(checkFoxLover(20, true));  // You are an adult who likes foxes!
console.log(checkFoxLover(20, false)); // Not a fox fan, but that’s okay!
console.log(checkFoxLover(17, true));  // You are not an adult yet.
console.log(checkFoxLover(17, false)); // You are not an adult yet.
console.log(checkFoxLover(18, true));  // You are an adult who likes foxes!
console.log(checkFoxLover(18, false)); // Not a fox fan, but that’s okay!