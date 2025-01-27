/* Create a function named replaceWord that:
Takes three parameters, sentence, oldWord, and newWord.
Returns the sentence with oldWord replaced by newWord.
Call the function with the sentence "I like apples.", oldWord as "apples", and newWord as "bananas".
Print the result using console.log(). 

*/

function replaceWord(sentence, oldWord, newWord) {
        // Use the replace method to replace oldWord with newWord
    return sentence.replace(oldWord, newWord);
};

// Call the function with the provided sentence and words
const result = replaceWord("I like apples.", "apples", "bananas");

console.log(result);