/*
Write a function named canVote:
Take an age as a parameter.
Return true if the age is 18 or older, otherwise false.
Print "Eligible to vote" or "Not eligible to vote" based on the result of the function. 
*/

function canVote(age) {
    return age >= 18;
}

// Examples of calling the function and printing the result
function checkVotingEligibility(age) {
    if (canVote(age)) {
        console.log("Eligible to vote");
    } else {
        console.log("Not eligible to vote");
    }
}

// Test cases
checkVotingEligibility(20); // Eligible to vote
checkVotingEligibility(17); // Not eligible to vote
checkVotingEligibility(18); // Eligible to vote
checkVotingEligibility(16); // Not eligible to vote