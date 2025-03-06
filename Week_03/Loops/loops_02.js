/* 
Write a function named logEvenNumbers:
- Use a loop to display all even numbers less than 100 in the pattern: 2, 98, 4, 96, ..., 50.
Display all numbers in a single line in the console.; 
*/

function logEvenNumbers() {
    let result = '';
    for (let i = 2; i <= 50; i += 2) {
        result += i + ', ' + (100 - i) + ', ';
    }
    // Remove the last comma and space
    result = result.slice(0, -2);
    console.log(result);
}

// Call the function to see the output
logEvenNumbers();
// The expected output will be: 2, 98, 4, 96, ..., 50