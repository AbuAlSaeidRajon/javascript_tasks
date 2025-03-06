/* 
Write a function named countdownTimer:
- Take a number (e.g., 10) as input and simulate a countdown in the console.
Log each number in descending order until 0, and then log: "Time's up!".
 */

function countdownTimer(startNumber) {
    let currentNumber = startNumber;
    
    const intervalId = setInterval(() => {
        if (currentNumber >= 0) {
            console.log(currentNumber);
            currentNumber--;
        } else {
            console.log("Time's up!");
            clearInterval(intervalId);
        }
    }, 1000);
}

// Call the function with a starting number to see the countdown
countdownTimer(10);