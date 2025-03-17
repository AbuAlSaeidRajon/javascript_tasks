/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`.
Add at least two book objects to this collection.
*/

const library = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        yearPublished: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        yearPublished: 1949
    }
];

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

console.log(library[0].title); // Logs: "To Kill a Mockingbird"

library[1].yearPublished = 1950;
console.log(library[1]); // Logs: { title: '1984', author: 'George Orwell', yearPublished: 1950 }

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

library[0].genres = ["Fiction", "Classic"];
library[0]["isAvailable"] = true;

console.log(library[0]);

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

function Book(title, author, yearPublished, genres) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genres = genres;
}

const newBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, ["Fiction", "Classic"]);
library.push(newBook);

console.log(library);

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

function createBook(title, author, yearPublished, genres) {
    return {
        title: title,
        author: author,
        yearPublished: yearPublished,
        genres: genres
    };
}

const userBook = createBook("Moby Dick", "Herman Melville", 1851, ["Fiction", "Adventure"]);
console.log(userBook);

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);

const parsedLibrary = JSON.parse(libraryJSON);
console.log(parsedLibrary[0].title);

/* Task 7
Create an array named `students`, where each student has a `name`, `age`, and `grade`.
Log the name of any student who has a grade higher than 90.
*/

const students = [
    { name: "Alice", age: 20, grade: 85 },
    { name: "Bob", age: 22, grade: 92 },
    { name: "Charlie", age: 21, grade: 88 }
];

students.forEach(student => {
    if (student.grade > 90) {
        console.log(student.name);
    }
});

/* Task 8
Define an object named `car` with properties for `brand`, `model`, `year`, and `isElectric`.
Use a function to check if the car is electric. If it is, log `"This car is eco-friendly!"`. Otherwise, log `"This car runs on fuel."`
*/

const car = {
    brand: "Tesla",
    model: "Model S",
    year: 2022,
    isElectric: true
};

function checkCarType(car) {
    if (car.isElectric) {
        console.log("This car is eco-friendly!");
    } else {
        console.log("This car runs on fuel.");
    }
}

checkCarType(car);

/* Task 9
Create a `movies` array where each movie is an object with properties for `title`, `director`, and `rating`.
Write a loop that logs all movie titles with a rating higher than 8.
*/

const movies = [
    { title: "Inception", director: "Christopher Nolan", rating: 8.8 },
    { title: "The Room", director: "Tommy Wiseau", rating: 3.7 },
    { title: "Interstellar", director: "Christopher Nolan", rating: 8.6 }
];

movies.forEach(movie => {
    if (movie.rating > 8) {
        console.log(movie.title);
    }
});

/* Task 10
Write a function `findOldestCar` that takes an array of car objects and returns the car with the earliest `year`.
*/

function findOldestCar(cars) {
    return cars.reduce((oldest, car) => {
        return (car.year < oldest.year) ? car : oldest;
    });
}

const carArray = [
    { brand: "Ford", model: "Mustang", year: 1969 },
    { brand: "Chevrolet", model: "Camaro", year: 1970 },
    { brand: "Dodge", model: "Charger", year: 1968 }
];

console.log(findOldestCar(carArray));

/* Task 11
Define a `userProfiles` array containing objects representing users.
Each user should have a `username`, `email`, and `isAdmin` property.
Write a function that filters and returns only the users who are administrators.
*/

const userProfiles = [
    { username: "user1", email: "user1@example.com", isAdmin: false },
    { username: "admin1", email: "admin1@example.com", isAdmin: true },
    { username: "user2", email: "user2@example.com", isAdmin: false }
];

function getAdmins(users) {
    return users.filter(user => user.isAdmin);
}

console.log(getAdmins(userProfiles));

/* Task 12
Define an array named `orders`, where each order contains `orderId`, `customerName`, `totalAmount`, and `status` (either "pending" or "completed").
Write a function that returns only the completed orders.
*/

const orders = [
    { orderId: 1, customerName: "Alice", totalAmount: 50, status: "completed" },
    { orderId: 2, customerName: "Bob", totalAmount: 75, status: "pending" },
    { orderId: 3, customerName: "Charlie", totalAmount: 100, status: "completed" }
];

function getCompletedOrders(orders) {
    return orders.filter(order => order.status === "completed");
}

console.log(getCompletedOrders(orders));

/* Task 13
Create an object named `smartphone` with properties for `brand`, `model`, `batteryLife`, and `is5GEnabled`.
Write a function that logs `"This phone supports 5G!"` if `is5GEnabled` is `true`, otherwise logs `"This phone does not support 5G."`
*/

const smartphone = {
    brand: "Apple",
    model: "iPhone 12",
    batteryLife: "10 hours",
    is5GEnabled: true
};

function check5GSupport(phone) {
    if (phone.is5GEnabled) {
        console.log("This phone supports 5G!");
    } else {
        console.log("This phone does not support 5G.");
    }
}

check5GSupport(smartphone);

/* Task 14
Define an object named `fox` with properties `name`, `age`, and `habitat`.
Write a function that logs `"This fox is young"` if its age is under 3, `"This fox is an adult"` if 3 or older.
*/

const fox = {
    name: "Red",
    age: 2,
    habitat: "Forest"
};

function checkFoxAge(fox) {
    if (fox.age < 3) {
        console.log("This fox is young");
    } else {
        console.log("This fox is an adult");
    }
}

checkFoxAge(fox);

/* Task 15
Define an array named `employees`, where each employee has `name`, `position`, and `salary`.
Write a function that calculates the total salary of all employees in the company.
*/

const employees = [
    { name: "Alice", position: "Developer", salary: 80000 },
    { name: "Bob", position: "Designer", salary: 70000 },
    { name: "Charlie", position: "Manager", salary: 90000 }
];

function calculateTotalSalary(employees) {
    return employees.reduce((total, employee) => total + employee.salary, 0);
}

console.log(calculateTotalSalary(employees));