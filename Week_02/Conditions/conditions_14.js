/*
Write a function named rainAdvice:
Take a parameter isRaining.
Use a ternary operator to return:
"Stay indoors" if isRaining is true.
"Enjoy the outdoors!" otherwise.
Call the function with different values for isRaining. 
*/

function rainAdvice(isRaining) {
    return isRaining ? "Stay indoors" : "Enjoy the outdoors!";
}

// Examples of calling the function with different values for isRaining
console.log(rainAdvice(true));  // Stay indoors
console.log(rainAdvice(false)); // Enjoy the outdoors!