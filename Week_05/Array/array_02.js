let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

// Exercise 1: Determine array length and conditional check
function myAlphabetLength() {
  console.log(`Length of myAlphabet: ${myAlphabet.length}`);
  if (myAlphabet.length >= 5) {
    console.log("Array length is sufficient");
  } else {
    console.log("Array length is too short");
  }
}
myAlphabetLength();


// Exercise 2: Iterate over the planets array and log each planet with its index
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];
planets.forEach((planet, index) => {
  console.log(`Planet: ${planet}, Index: ${index}`);
});


// Exercise 3: Log array items with their types using mixedValues array
const mixedValues = [42, 'Hello', true, { name: 'Fox' }, null, undefined];
mixedValues.forEach((item, index) => {
  console.log(`Item: ${item}, Index: ${index}, Type: ${typeof item}`);
});


// Exercise 4: Log each item of myArr without using a loop
let myArr = [1, 'Dog', 3.14, false];
console.log(...myArr);


// Exercise 5: Find common animal species between reserve1Animals and reserve2Animals
let reserve1Animals = ['Fox', 'Deer', 'Owl', 'Bear'];
let reserve2Animals = ['Bear', 'Wolf', 'Eagle', 'Fox'];
reserve1Animals.forEach(animal => {
  if (reserve2Animals.includes(animal)) {
    console.log(`Common species: ${animal}`);
  }
});


// Exercise 6: Log each letter of names from the animalNames array
let animalNames = ['Lion', 'Tiger', 'Panda'];
animalNames.forEach(name => {
  console.log(`Letters in '${name}': ${[...name].join(', ')}`);
});


// Exercise 7: Filter only positive temperatures from the temperatures array
let temperatures = [-10, 5, -3, 15, -8, 20, 2];
function getPositiveTemperatures() {
  return temperatures.filter(temp => temp > 0);
}
console.log(getPositiveTemperatures());


// Exercise 8: Find the index of "Fox" in the zooAnimals array
let zooAnimals = ['Elephant', 'Giraffe', 'Panda', 'Fox', 'Kangaroo'];
let indexOfFox = zooAnimals.indexOf('Fox');
console.log(`Index of Fox: ${indexOfFox}`);


// Exercise 9: Try to find the index of an animal not in zooAnimals
let indexOfPenguin = zooAnimals.indexOf('Penguin');
if (indexOfPenguin === -1) {
  console.log("Penguin is not in the zoo.");
}


// Exercise 10: Replace "Giraffe" with "Cheetah" in zooAnimals
let indexOfGiraffe = zooAnimals.indexOf('Giraffe');
if (indexOfGiraffe !== -1) {
  zooAnimals.splice(indexOfGiraffe, 1, 'Cheetah');
}
console.log(zooAnimals);


// Exercise 11: Sort the safariAnimals array alphabetically
let safariAnimals = ['Zebra', 'Leopard', 'Elephant', 'Gazelle'];
safariAnimals.sort();
console.log(safariAnimals);


// Exercise 12: Reverse the order of the safariAnimals array
safariAnimals.reverse();
console.log(safariAnimals);


// Exercise 13: Check if "Tiger" is in zooAnimals
let hasTiger = zooAnimals.includes('Tiger');
console.log(hasTiger);


// Exercise 14: Find all occurrences of "John" in attendees
let attendees = ['John', 'Sarah', 'John', 'Alex', 'John'];
let johnPositions = [];
attendees.forEach((attendee, index) => {
  if (attendee === 'John') {
    johnPositions.push(index);
  }
});
console.log(johnPositions);


// Exercise 15: Convert all names in attendees array to uppercase
let upperCaseAttendees = attendees.map(attendee => attendee.toUpperCase());
console.log(upperCaseAttendees);


// Exercise 16: Merge forestAnimals and farmAnimals arrays
let forestAnimals = ['Deer', 'Bear', 'Wolf'];
let farmAnimals = ['Cow', 'Sheep', 'Goat'];
let mergedAnimals = forestAnimals.concat(farmAnimals);
console.log(mergedAnimals);


// Exercise 17: Remove first and last elements from birdSpecies
let birdSpecies = ['Eagle', 'Owl', 'Hawk', 'Sparrow', 'Penguin'];
birdSpecies.shift();
birdSpecies.pop();
console.log(birdSpecies);


// Exercise 18: Use `splice` to remove and replace elements in numbers
let numbers = [10, 20, 30, 40, 50];
numbers.splice(2, 1, 25, 27);
console.log(numbers);


// Exercise 19: Increase each price by 10% using `map`
let prices = [5, 10, 15, 20];
let increasedPrices = prices.map(price => price * 1.1);
console.log(increasedPrices);


// Exercise 20: Filter words longer than 5 letters using `filter`
let words = ['apple', 'banana', 'cherry', 'kiwi', 'strawberry'];
let longWords = words.filter(word => word.length > 5);
console.log(longWords);