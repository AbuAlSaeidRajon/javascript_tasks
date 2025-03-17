/* Task 1
Create a JavaScript object named `student` with properties:
- `name`
- `age`
- `grade`
Convert the object into a JSON string and log it to the console.
*/

const student = {
    name: "John Doe",
    age: 20,
    grade: "A"
};

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

/* Task 2
Take the JSON string from Task 1 and convert it back into a JavaScript object.
Log the `name` property of the converted object.
*/

const parsedStudent = JSON.parse(studentJSON);
console.log(parsedStudent.name);

/* Task 3
Create an array named `classroom`, where each element is an object representing a student.
Each student object should have properties for `name`, `age`, and `grade`.
Convert the array into a JSON string and log it to the console.
*/

const classroom = [
    { name: "Alice", age: 21, grade: "B" },
    { name: "Bob", age: 22, grade: "A" },
    { name: "Charlie", age: 20, grade: "C" }
];

const classroomJSON = JSON.stringify(classroom);
console.log(classroomJSON);

/* Task 4
Take the JSON string from Task 3, convert it back into a JavaScript array,
and log the names of all students in the classroom.
*/

const parsedClassroom = JSON.parse(classroomJSON);
parsedClassroom.forEach(student => {
    console.log(student.name);
});

/* Task 5
Create an object named `weatherReport` with the following properties:
- `temperature`
- `humidity`
- `conditions` (e.g., "Sunny", "Rainy")

Convert the object into a JSON string and store it in a variable named `weatherJSON`.
Then, parse the JSON string back into an object and log the `conditions` property.
*/

const weatherReport = {
    temperature: 25,
    humidity: 60,
    conditions: "Sunny"
};

const weatherJSON = JSON.stringify(weatherReport);
const parsedWeather = JSON.parse(weatherJSON);
console.log(parsedWeather.conditions);

/* Task 6
Define an array named `movies`, where each movie has:
- `title`
- `director`
- `rating`

Convert this array into a JSON string, then parse it back into a JavaScript object.
Log all movie titles with a rating higher than 8.
*/

const movies = [
    { title: "Inception", director: "Christopher Nolan", rating: 8.8 },
    { title: "The Room", director: "Tommy Wiseau", rating: 3.7 },
    { title: "Interstellar", director: "Christopher Nolan", rating: 8.6 }
];

const moviesJSON = JSON.stringify(movies);
const parsedMovies = JSON.parse(moviesJSON);

parsedMovies.forEach(movie => {
    if (movie.rating > 8) {
        console.log(movie.title);
    }
});

/* Task 7
Write a function `filterHighRatedMovies(jsonString)` that:
- Takes a JSON string representing an array of movie objects.
- Converts it into a JavaScript array.
- Returns a new array containing only movies with a rating higher than 8.
*/

function filterHighRatedMovies(jsonString) {
    const moviesArray = JSON.parse(jsonString);
    return moviesArray.filter(movie => movie.rating > 8);
}

const highRatedMovies = filterHighRatedMovies(moviesJSON);
console.log(highRatedMovies);

/* Task 8
Define an object named `shoppingCart` with:
- `items` (an array of product objects, each with `name` and `price`)
Convert `shoppingCart` into a JSON string and log it to the console.
*/

const shoppingCart = {
    items: [
        { name: "Apple", price: 1.0 },
        { name: "Banana", price: 0.5 },
        { name: "Orange", price: 0.75 }
    ]
};

const shoppingCartJSON = JSON.stringify(shoppingCart);
console.log(shoppingCartJSON);

/* Task 9
Write a function `totalCartValue(jsonString)` that:
- Takes a JSON string representing a shopping cart.
- Converts it into a JavaScript object.
- Returns the total price of all items in the cart.
*/

function totalCartValue(jsonString) {
    const cart = JSON.parse(jsonString);
    return cart.items.reduce((total, item) => total + item.price, 0);
}

const cartTotal = totalCartValue(shoppingCartJSON);
console.log(cartTotal);

/* Task 10
Create an object named `gameProgress` with:
- `level`
- `score`
- `livesRemaining`

Convert the object into a JSON string and log it.
Parse the JSON back into an object and update the `score` property by adding 100 points.
Log the updated object.
*/

const gameProgress = {
    level: 5,
    score: 1200,
    livesRemaining: 3
};

const gameProgressJSON = JSON.stringify(gameProgress);
console.log(gameProgressJSON);

const parsedGameProgress = JSON.parse(gameProgressJSON);
parsedGameProgress.score += 100;

console.log(parsedGameProgress);