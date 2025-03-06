/* 
Write a function named askToContinue:
- Prompt the user to enter a number.
- Then, ask: "Do you want to continue giving numbers? (y/n)".
- If the user answers "y", ask for another number.
- If the user answers "n", stop asking and log the average of all entered numbers in the console. 
*/

function askToContinue() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let sum = 0;
    let count = 0;

    function askForNumber() {
        readline.question('Enter a number: ', (number) => {
            number = parseFloat(number);
            sum += number;
            count++;

            readline.question('Do you want to continue giving numbers? (y/n): ', (answer) => {
                if (answer.toLowerCase() === 'y') {
                    askForNumber();
                } else {
                    if (count === 0) {
                        console.log('No numbers were entered.');
                    } else {
                        let average = sum / count;
                        console.log(`The average of entered numbers is ${average.toFixed(2)}`);
                    }
                    readline.close();
                }
            });
        });
    }

    askForNumber();
}

// Call the function to start the process
askToContinue();