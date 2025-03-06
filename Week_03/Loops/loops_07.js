/* 
Write a function named sumAndAverage:
- Ask the user to input ten numbers.
- Calculate and log:
    - The sum of the numbers.
    - The average of the numbers.
    - The smallest and largest numbers.
Display all results in the console.
*/

function sumAndAverage() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let numbers = [];
    let count = 0;

    function askForNumber() {
        if (count < 10) {
            readline.question(`Enter number ${count + 1}: `, (number) => {
                number = parseFloat(number);
                if (!isNaN(number)) {
                    numbers.push(number);
                    count++;
                } else {
                    console.log('Please enter a valid number.');
                }
                askForNumber();
            });
        } else {
            const sum = numbers.reduce((acc, num) => acc + num, 0);
            const average = sum / numbers.length;
            const smallest = Math.min(...numbers);
            const largest = Math.max(...numbers);

            console.log(`Sum of the numbers: ${sum}`);
            console.log(`Average of the numbers: ${average}`);
            console.log(`Smallest number: ${smallest}`);
            console.log(`Largest number: ${largest}`);

            readline.close();
        }
    }

    askForNumber();
}

// Call the function to start the process
sumAndAverage();