/* 
Write a function named calculateAverageUntilZero:
- Continuously prompt the user to input numbers.
- Stop asking for inputs when the user enters 0.
- Calculate and log the average of all entered numbers in the console once the loop ends.
 */

function calculateAverageUntilZero() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let sum = 0;
    let count = 0;

    function askForNumber() {
        readline.question('Enter a number (enter 0 to stop): ', (number) => {
            number = parseFloat(number);
            if (number === 0) {
                if (count === 0) {
                    console.log('No numbers were entered.');
                } else {
                    let average = sum / count;
                    console.log(`The average of entered numbers is ${average.toFixed(2)}`);
                }
                readline.close();
            } else {
                sum += number;
                count++;
                askForNumber();
            }
        });
    }

    askForNumber();
}

// Call the function to start the process
calculateAverageUntilZero();