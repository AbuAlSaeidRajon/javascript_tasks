/* 
Write a function named checkAdult:
Take an age as a parameter.
If age is 18 or older, return "You are an adult."
Otherwise, return nothing.
Call the function with different ages and print the result.
 */

function checkAdult(age) {
    if (age >= 18) {
        return "You are an adult.";
    }
    return;
}

console.log(checkAdult(20)); // Should print: "You are an adult."
console.log(checkAdult(17)); // Should print: undefined
console.log(checkAdult(18)); // Should print: "You are an adult."
console.log(checkAdult(15)); // Should print: undefined