/* Create a function named containsWord that:
Takes two parameters, sentence and word.
Returns true if sentence includes word, otherwise false.
Call the function with the sentence "JavaScript is fun!" and the word "fun".
Print the result using console.log().

Bonus: Modify the function to use implicit return. 

*/

function containsWord(sentence, word) {
    return sentence.includes(word);
}

// Call the function with the sentence "JavaScript is fun!" and the word "fun"
const result = containsWord("JavaScript is fun!", "fun");
console.log(result); // Should print: true

// Bonus: Modify the function to use implicit return
const containsWordImplicit = (sentence, word) => sentence.includes(word);

// Call the modified function and print the result
const resultImplicit = containsWordImplicit("JavaScript is fun!", "fun");
console.log(resultImplicit); // Should print: true