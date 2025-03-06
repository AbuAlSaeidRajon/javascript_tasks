/* 
Write a function named countEvenNumbers:
- Prompt the user to input 20 numbers one by one.
- After all numbers are entered, log how many of them were even.
Display the result in the console. 
*/

function countEvenNumbers() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let count = 0;
    let numbersEntered = 0;

    function askForNumber() {
        if (numbersEntered < 20) {
            readline.question('Enter a number: ', (number) => {
                number = parseInt(number, 10);
                if (!isNaN(number) && number % 2 === 0) {
                    count++;
                }
                numbersEntered++;
                askForNumber();
            });
        } else {
            console.log(`You entered ${count} even numbers.`);
            readline.close();
        }
    }

    askForNumber();
}

// Call the function to start the process
countEvenNumbers();