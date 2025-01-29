/* Create a function named findMax that:
Takes three parameters, a, b, and c.
Returns the largest of the three numbers.
Call the function with the arguments 12, 7, and 20.
Print the result using console.log().

Hint: Use Math.max(). 
*/

function findMax(a, b, c) {
        // Use Math.max() to find the largest of the three numbers
    return Math.max(a, b, c);
}

// Call the function with the arguments 12, 7, and 20
const result = findMax(12, 7, 20);

console.log(result);