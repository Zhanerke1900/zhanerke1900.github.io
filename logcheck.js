    // Retrieve logged-in user information from local storage
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

// Get elements
const usernameDisplay = document.getElementById('username-display');
const logoutBtn = document.getElementById('logout-btn');

// Display username if user is logged in, otherwise show "You are not registered"
if (loggedInUser && loggedInUser.username) {
    usernameDisplay.textContent = `Hello, ${loggedInUser.username}`;
    logoutBtn.style.display = "inline"; // Show logout button if user is logged in
} else {
    usernameDisplay.textContent = "You are not registered";
}

// Logout functionality
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem('loggedInUser'); // Remove logged-in user data
    location.reload(); // Refresh the page to update navbar display
});
