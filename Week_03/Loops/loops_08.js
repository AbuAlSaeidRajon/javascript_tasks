/* 
Write a function named findMinMax:
- Ask the user how many numbers they want to input.
- Then prompt them to enter that many numbers.
- Once all numbers are entered, determine and log:
- The smallest number.
- The largest number.
Display the results in the console. 
*/

function findMinMax() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let numbers = [];
    let numberOfInputs = 0;

    function askForNumber() {
        if (numbers.length < numberOfInputs) {
            readline.question(`Enter number ${numbers.length + 1}: `, (number) => {
                number = parseFloat(number);
                if (!isNaN(number)) {
                    numbers.push(number);
                } else {
                    console.log('Please enter a valid number.');
                }
                askForNumber();
            });
        } else {
            const smallest = Math.min(...numbers);
            const largest = Math.max(...numbers);

            console.log(`Smallest number: ${smallest}`);
            console.log(`Largest number: ${largest}`);

            readline.close();
        }
    }

    readline.question('How many numbers do you want to input? ', (input) => {
        numberOfInputs = parseInt(input, 10);
        if (!isNaN(numberOfInputs) && numberOfInputs > 0) {
            askForNumber();
        } else {
            console.log('Please enter a valid number greater than 0.');
            readline.close();
        }
    });
}

// Call the function to start the process
findMinMax();