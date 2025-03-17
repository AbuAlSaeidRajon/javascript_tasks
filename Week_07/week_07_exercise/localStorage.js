/* Task 1
Store a string `"Hello, LocalStorage!"` in LocalStorage under the key `"message"`.
Retrieve it and log it to the console.
*/

localStorage.setItem("message", "Hello, LocalStorage!");
const message = localStorage.getItem("message");
console.log(message); // Logs: "Hello, LocalStorage!"

/* Task 2
Create an object `userSettings` with:
- `theme` ("dark" or "light")
- `language` ("English", "Spanish", etc.)

Convert it to a JSON string and store it in LocalStorage.
Retrieve it, parse it, and log the `theme` property.
*/

const userSettings = {
    theme: "dark",
    language: "English"
};

localStorage.setItem("userSettings", JSON.stringify(userSettings));
const retrievedSettings = JSON.parse(localStorage.getItem("userSettings"));
console.log(retrievedSettings.theme); // Logs: "dark"

/* Task 3
Define an array `favoriteBooks` with at least three book objects (`title` and `author`).
Store the array in LocalStorage.
Retrieve and parse it, then log the titles of all books.
*/

const favoriteBooks = [
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
];

localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
const retrievedBooks = JSON.parse(localStorage.getItem("favoriteBooks"));
retrievedBooks.forEach(book => console.log(book.title));

/* Task 4
Write a function `saveToLocalStorage(key, object)` that:
- Converts an object to JSON.
- Stores it in LocalStorage under the provided key.
Test it by saving an object and retrieving it.
*/

function saveToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
}

const testObject = { name: "John", age: 30 };
saveToLocalStorage("testObject", testObject);
console.log(JSON.parse(localStorage.getItem("testObject"))); // Logs: { name: "John", age: 30 }

/* Task 5
Write a function `getFromLocalStorage(key)` that:
- Retrieves a value from LocalStorage.
- Parses it if it's JSON.
- Logs the retrieved value.
*/

function getFromLocalStorage(key) {
    const value = localStorage.getItem(key);
    try {
        console.log(JSON.parse(value));
    } catch {
        console.log(value);
    }
}

getFromLocalStorage("testObject"); // Logs: { name: "John", age: 30 }

/* Task 6
Create an object `userProfile` with:
- `username`
- `email`
- `preferences` (an object with `theme` and `notifications`)

Save it to LocalStorage.
Retrieve and update the `theme` property to `"dark mode"`, then log the updated object.
*/

const userProfile = {
    username: "johndoe",
    email: "john@example.com",
    preferences: {
        theme: "light",
        notifications: true
    }
};

localStorage.setItem("userProfile", JSON.stringify(userProfile));
const retrievedProfile = JSON.parse(localStorage.getItem("userProfile"));
retrievedProfile.preferences.theme = "dark mode";
localStorage.setItem("userProfile", JSON.stringify(retrievedProfile));
console.log(JSON.parse(localStorage.getItem("userProfile"))); // Logs the updated profile with theme: "dark mode"

/* Task 7
Define an object `shoppingList` with an array `items` (strings).
Save it to LocalStorage.
Write a function `addItemToList(item)` that:
- Retrieves `shoppingList` from LocalStorage.
- Adds a new item.
- Saves the updated list back to LocalStorage.
- Logs the updated list.
*/

const shoppingList = {
    items: ["Milk", "Bread", "Eggs"]
};

localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

function addItemToList(item) {
    const list = JSON.parse(localStorage.getItem("shoppingList"));
    list.items.push(item);
    localStorage.setItem("shoppingList", JSON.stringify(list));
    console.log(list);
}

addItemToList("Butter"); // Adds "Butter" to the shopping list and logs the updated list

/* Task 8
Create a counter object with:
- `count` (starting at 0)
Store it in LocalStorage.
Write a function `incrementCounter()` that:
- Retrieves the counter.
- Increases `count` by 1.
- Saves the updated counter.
- Logs the new count.
*/

const counter = { count: 0 };
localStorage.setItem("counter", JSON.stringify(counter));

function incrementCounter() {
    const counter = JSON.parse(localStorage.getItem("counter"));
    counter.count += 1;
    localStorage.setItem("counter", JSON.stringify(counter));
    console.log(counter.count);
}

incrementCounter(); // Increments the counter and logs the new count

/* Task 9
Create an array `tasks`, where each task is an object (`id`, `description`, `completed`).
Save it to LocalStorage.
Write a function `markTaskComplete(taskId)` that:
- Retrieves `tasks` from LocalStorage.
- Finds the task with the given ID and sets `completed` to `true`.
- Saves the updated tasks.
- Logs the updated list.
*/

const tasks = [
    { id: 1, description: "Do laundry", completed: false },
    { id: 2, description: "Buy groceries", completed: false },
    { id: 3, description: "Clean the house", completed: false }
];

localStorage.setItem("tasks", JSON.stringify(tasks));

function markTaskComplete(taskId) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = true;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log(tasks);
    } else {
        console.log("Task not found.");
    }
}

markTaskComplete(2); // Marks the task with id 2 as complete and logs the updated list

/* Task 10
Write a function `clearLocalStorage()` that removes all data stored in LocalStorage.
Call it and confirm LocalStorage is empty.
*/

function clearLocalStorage() {
    localStorage.clear();
    console.log("LocalStorage cleared.");
}

clearLocalStorage(); // Clears all data from LocalStorage and logs confirmation