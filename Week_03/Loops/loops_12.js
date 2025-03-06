/* 
Write a function named buildGroceryList:
- Prompt the user to input grocery items one by one.
- Stop when the user types "done".
Log the complete grocery list in the console.
 */

function buildGroceryList() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let groceryList = [];

    function askForItem() {
        readline.question('Enter a grocery item (type "done" to finish): ', (item) => {
            if (item.toLowerCase() === 'done') {
                console.log('Your grocery list:');
                console.log(groceryList.join(', '));
                readline.close();
            } else {
                groceryList.push(item);
                askForItem();
            }
        });
    }

    askForItem();
}

// Call the function to start the process
buildGroceryList();