let balance = 0.00;

// Function to update the balance display
function checkBalance() {
  document.getElementById('balance').textContent = balance.toFixed(2);
}

// Function to display a message
function displayMessage(message) {
  const messageElement = document.getElementById('message');
  messageElement.textContent = message;
  setTimeout(() => {
    messageElement.textContent = '';
  }, 3000);
}

// Function to handle deposit
function deposit() {
  const depositAmount = parseFloat(document.getElementById('depositAmount').value);
  if (isNaN(depositAmount) || depositAmount <= 0) {
    displayMessage('Please enter a valid deposit amount.');
    return;
  }
  balance += depositAmount;
  checkBalance();
  document.getElementById('depositAmount').value = '';
}

// Function to handle withdrawal
function withdraw() {
  const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
  if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
    displayMessage('Please enter a valid withdraw amount.');
    return;
  }
  if (withdrawAmount > balance) {
    displayMessage('Not enough balance.');
    return;
  }
  balance -= withdrawAmount;
  checkBalance();
  document.getElementById('withdrawAmount').value = '';
}

// Event listeners for buttons
document.getElementById('depositButton').addEventListener('click', deposit);
document.getElementById('withdrawButton').addEventListener('click', withdraw);

// Initial balance display
checkBalance();