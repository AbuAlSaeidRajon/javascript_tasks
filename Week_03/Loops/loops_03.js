/* 
Write a function named calculateAverageSpeed:
- Continuously prompt the user to input distance (in kilometers) and time (in hours).
- After each input, calculate and log the average speed in the console.
- Stop asking for inputs when the user enters 0 for distance. 
*/

function calculateAverageSpeed() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function askForInput() {
        readline.question('Enter distance (in kilometers): ', (distance) => {
            if (parseFloat(distance) === 0) {
                console.log('Stopping input.');
                readline.close();
                return;
            }

            readline.question('Enter time (in hours): ', (time) => {
                let distanceNum = parseFloat(distance);
                let timeNum = parseFloat(time);

                if (timeNum > 0) {
                    let averageSpeed = distanceNum / timeNum;
                    console.log(`Average speed is ${averageSpeed.toFixed(2)} km/h`);
                } else {
                    console.log('Time must be greater than 0.');
                }

                askForInput();
            });
        });
    }

    askForInput();
}

// Call the function to start the process
calculateAverageSpeed();