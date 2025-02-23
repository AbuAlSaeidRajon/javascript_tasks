/* 
Initial data:
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

1. Loop through the `teamMembers` array and log each name to the console.  
2. Remove the first member of the array.  
3. Remove the last member of the array.  
4. Add a new member "Alex" to the front of the array.  
5. Append a new member "Linda" to the end of the array.  
6. Create a new array that excludes the first two members, keeping the original array unchanged.  
7. Find the index of "Mike" in the array.  
8. Try to find the index of "Jake" (who is not in the array).  
9. Replace "Mike" with "Carol" and "Bruce" in the same position.  
10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged.  
11. Copy the entire `teamMembers` array using `slice` and store it in a new variable.  
12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.  
13. Find all occurrences of "John" in the array and store their positions in a new array.  
14. Transform all names in the array to be uppercase while keeping the original array unchanged.  
15. Sort `teamMembers` in alphabetical order.  
16. Reverse the `teamMembers` array.  
17. Check if at least one member in the array is named "John".  
18. Check if all names in the array have more than three letters. 
*/

// 1. Loop through the `teamMembers` array and log each name to the console.
console.log("Team Members:");
teamMembers.forEach(member => console.log(member));

// 2. Remove the first member of the array.
teamMembers.shift();
console.log("\nAfter removing the first member:", teamMembers);

// 3. Remove the last member of the array.
teamMembers.pop();
console.log("\nAfter removing the last member:", teamMembers);

// 4. Add a new member "Alex" to the front of the array.
teamMembers.unshift("Alex");
console.log("\nAfter adding Alex to the front:", teamMembers);

// 5. Append a new member "Linda" to the end of the array.
teamMembers.push("Linda");
console.log("\nAfter appending Linda to the end:", teamMembers);

// 6. Create a new array that excludes the first two members, keeping the original array unchanged.
let newArrayExcludingFirstTwo = teamMembers.slice(2);
console.log("\nNew array excluding the first two members:", newExcludingFirstTwo);
console.log("Original array remains unchanged:", teamMembers);

// 7. Find the index of "Mike" in the array.
let indexOfMike = teamMembers.indexOf("Mike");
console.log("\nIndex of Mike:", indexOfMike);

// 8. Try to find the index of "Jake" (who is not in the array).
let indexOfJake = teamMembers.indexOf("Jake");
console.log("\nIndex of Jake:", indexOfJake); // -1 indicates not found

// 9. Replace "Mike" with "Carol" and "Bruce" in the same position.
if (indexOfMike !== -1) {
    teamMembers.splice(indexOfMike, 1, "Carol", "Bruce");
    console.log("\nAfter replacing Mike with Carol and Bruce:", teamMembers);
}

// 10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged.
let newArrayWithBob = teamMembers.concat("Bob");
console.log("\nNew array with 'Bob' concatenated:", newArrayWithBob);
console.log("Original array remains unchanged:", teamMembers);

// 11. Copy the entire `teamMembers` array using `slice` and store it in a new variable.
let teamMembersCopy = teamMembers.slice();
console.log("\nCopy of the original array:", teamMembersCopy);

// 12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.
let newMembers = ["Tina", "Dean"];
let mergedArray = teamMembers.concat(newMembers);
console.log("\nMerged array with `newMembers`:", mergedArray);

// 13. Find all occurrences of "John" in the array and store their positions in a new array.
let johnPositions = [];
teamMembers.forEach((member, index) => {
    if (member === "John") {
        johnPositions.push(index);
    }
});
console.log("\nPositions of 'John' in the array:", johnPositions);

// 14. Transform all names in the array to be uppercase while keeping the original array unchanged.
let upperCaseNames = teamMembers.map(member => member.toUpperCase());
console.log("\nArray with names in uppercase:", upperCaseNames);
console.log("Original array remains unchanged:", teamMembers);

// 15. Sort `teamMembers` in alphabetical order.
teamMembers.sort();
console.log("\nSorted array in alphabetical order:", teamMembers);

// 16. Reverse the `teamMembers` array.
teamMembers.reverse();
console.log("\nReversed array:", teamMembers);

// 17. Check if at least one member in the array is named "John".
let hasJohn = teamMembers.includes("John");
console.log("\nAt least one member named 'John':", hasJohn);

// 18. Check if all names in the array have more than three letters.
let allNamesMoreThanThreeLetters = teamMembers.every(member => member.length > 3);
console.log("All names have more than three letters:", allNamesMoreThanThreeLetters);