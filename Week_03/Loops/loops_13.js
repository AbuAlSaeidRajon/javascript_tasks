/* 
Write a function named validatePassword:
- Use a loop to allow the user to input a password.
- If the password is "correct123", log: "Access granted!" and exit the loop.
- If incorrect, prompt the user again with: "Try again!".
 */

function validatePassword() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function askForPassword() {
        readline.question('Enter your password: ', (password) => {
            if (password === 'correct123') {
                console.log('Access granted!');
                readline.close();
            } else {
                console.log('Try again!');
                askForPassword();
            }
        });
    }

    askForPassword();
}

// Call the function to start the process
validatePassword();