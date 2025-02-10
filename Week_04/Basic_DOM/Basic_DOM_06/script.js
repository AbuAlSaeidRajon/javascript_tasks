/* 
Create a form with a required name and email field.
Write JavaScript to:
- Prevent form submission if either field is empty.
- Display an error message if fields are missing. 
*/

const form = document.getElementById("myForm");
const errorMessage = document.getElementById("errorMessage");

function validateForm(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    // Check if fields are empty
    if (!name || !email) {
        event.preventDefault();
        errorMessage.classList.remove("hidden");    
    } else {
        errorMessage.classList.add("hidden");
    }
}

form.addEventListener("submit", validateForm);