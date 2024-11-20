// Проверка статуса входа при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
        if (loggedInUser.role === "admin") {
            showAdminPanel(); // Показать панель администратора, если роль — администратор
        } else {
            showContactRegistration(loggedInUser); // Показать контактную форму для обычного пользователя
        }
    }
    displayUserInfo(loggedInUser); // Показать имя пользователя или сообщение "You are not registered"
});

// Sample user data loaded from Local Storage
let users = JSON.parse(localStorage.getItem('users')) || [
    { username: "admin", password: "admin123", role: "admin", firstName: "Admin", lastName: "User", email: "admin@example.com", phone: "" }
];

// Toggle between login and registration forms
function toggleForm() {
    document.getElementById("login-section").classList.toggle("d-none");
    document.getElementById("register-section").classList.toggle("d-none");
}

// Login function with validation
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user)); // Save logged-in user details

        if (user.role === "admin") {
            showAdminPanel(); // Show admin panel for admins
        } else {
            showContactRegistration(user); // Show contact form for regular users
        }
    } else {
        document.getElementById("login-message").textContent = "Invalid credentials. Try again.";
    }
});

// Registration function
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    const email = document.getElementById("register-email").value;

    // Check if username is unique
    if (users.some(user => user.username === username)) {
        document.getElementById("register-message").textContent = "Username already taken. Try a different one.";
        return;
    }

    // Add the new user to the array
    users.push({ username, password, role: "user", firstName: "", lastName: "", email, phone: "" });
    localStorage.setItem('users', JSON.stringify(users)); // Update Local Storage
    document.getElementById("register-message").textContent = "Registration successful! You can now log in.";
    toggleForm(); // Switch back to login form
});

// Show contact form for regular users
function showContactRegistration(user) {
    document.getElementById("login-section").classList.add("d-none");
    document.getElementById("contact-registration").classList.remove("d-none");
    document.getElementById("contactForm").dataset.username = user.username;
}

// Submit phone number
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = e.target.dataset.username;
    const phone = document.getElementById("contact-phone").value;
    const name = document.getElementById("contact-name").value;

    // Update user with phone number
    const user = users.find(u => u.username === username);
    if (user) {
        user.phone = phone;
        user.firstName = name;
        localStorage.setItem('users', JSON.stringify(users)); // Update Local Storage
        document.getElementById("contact-message").textContent = "Contact information submitted!";
        document.getElementById("contact-registration").classList.add("d-none");
    }
});

// Show admin panel
function showAdminPanel() {
    document.getElementById("login-section").classList.add("d-none");
    document.getElementById("admin-panel").classList.remove("d-none");
    populateUserTable();
}

// Populate the user table in the admin panel
function populateUserTable() {
    const userTable = document.getElementById("userTable");
    userTable.innerHTML = ""; // Clear existing table rows
    users.forEach((user, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editUser(${index})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
        userTable.appendChild(row);
    });
}

// Edit user details
function editUser(index) {
    const user = users[index];
    const newFirstName = prompt("Edit First Name:", user.firstName);
    const newLastName = prompt("Edit Last Name:", user.lastName);
    const newEmail = prompt("Edit Email:", user.email);
    const newPhone = prompt("Edit Phone Number:", user.phone);

    // Update user data
    if (newFirstName !== null) user.firstName = newFirstName;
    if (newLastName !== null) user.lastName = newLastName;
    if (newEmail !== null) user.email = newEmail;
    if (newPhone !== null) user.phone = newPhone;

    localStorage.setItem('users', JSON.stringify(users)); // Update Local Storage
    populateUserTable(); // Refresh the user table
}

// Delete user
function deleteUser(index) {
    if (confirm("Are you sure you want to delete this user?")) {
        users.splice(index, 1); // Remove user from array
        localStorage.setItem('users', JSON.stringify(users)); // Update Local Storage
        populateUserTable(); // Refresh the user table
    }
}

// Display user info in the navbar
function displayUserInfo(user) {
    const navbar = document.querySelector(".navbar .container-fluid");
    let userInfo = document.getElementById("user-info");

    if (!userInfo) {
        userInfo = document.createElement("div");
        userInfo.id = "user-info";
        navbar.insertBefore(userInfo, navbar.firstChild);
    }

    if (user) {
        userInfo.innerHTML = `<span>Welcome, ${user.username}!</span> <button onclick="logout()" class="btn btn-outline-light ms-2">Logout</button>`;
    } else {
        userInfo.textContent = "You are not registered";
    }
}

// Logout function
function logout() {
    localStorage.removeItem("loggedInUser");
    location.reload();
}
