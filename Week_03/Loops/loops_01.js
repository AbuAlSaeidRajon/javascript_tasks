/* 
Write a function named logOddNumbers:
- Use a loop to output all odd, positive numbers less than 100, starting from 1.
Example output in the console: 1, 3, 5, 7, ..., 99. 
*/

function logOddNumbers() {
    for (let i = 1; i < 100; i += 2) {
        console.log(i);
    }
}

// Call the function to see the output
logOddNumbers();
// The expected output will be: 1, 3, 5, 7, ..., 99