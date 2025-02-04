/*
Write a function named isEven:
Take a number as a parameter.
Return true if the number is even, or false if it’s odd.
Call the function with numbers like 4 and 7, and print "The number is even!" or "The number is odd!" based on the result. 
*/

function isEven(number) {
    return number % 2 === 0;
    // A remainder of 0 indicates an even number, while 1 indicates an odd number.
} 

// Call the function with numbers like 4 and 7, and print the result
function printEvenOrOdd(number) {
    if (isEven(number)) {
        console.log("The number is even!");
    } else {
        console.log("The number is odd!");
    }
}

printEvenOrOdd(4);
printEvenOrOdd(7);