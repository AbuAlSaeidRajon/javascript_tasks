/* 
Write a function named canEnterEvent:
Take two parameters: age and hasID.
If age is 18 or older AND hasID is true, return "You can enter the event."
Otherwise, return "You cannot enter."
Call the function with different combinations of age and hasID. 
*/

function canEnterEvent(age, hasID) {
    if (age >= 18 && hasID) {
        return "You can enter the event.";
    } else {
        return "You cannot enter.";
    }
}

// Examples of calling the function with different combinations of age and hasID
console.log(canEnterEvent(20, true));  // You can enter the event.
console.log(canEnterEvent(17, true));  // You cannot enter.
console.log(canEnterEvent(18, false)); // You cannot enter.
console.log(canEnterEvent(16, false)); // You cannot enter.
console.log(canEnterEvent(22, true));  // You can enter the event.