function magic8Ball() {
    // Step 1: Ask the user for a "Yes or No" question
    const question = prompt("Ask a Yes or No question:");
    console.log("Question:", question);

    // Step 2: Generate a random number between 1 and 8
    const randomNumber = Math.floor(Math.random() * 8) + 1;

    // Step 3: Use a switch statement to determine the response
    let answer;
    switch (randomNumber) {
        case 1:
            answer = "Yes, definitely!";
            break;
        case 2:
            answer = "It is certain.";
            break;
        case 3:
            answer = "Reply hazy, try again.";
            break;
        case 4:
            answer = "Ask again later.";
            break;
        case 5:
            answer = "Better not tell you now.";
            break;
        case 6:
            answer = "My sources say no.";
            break;
        case 7:
            answer = "Outlook not so good.";
            break;
        case 8:
            answer = "Signs point to yes.";
            break;
    }

    // Step 4: Display the result
    console.log("Answer:", answer);
    alert(answer);
}

magic8Ball();