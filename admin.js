// admin.js

const userList = document.getElementById('userList');

function loadUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    userList.innerHTML = '';

    users.forEach((user, index) => {
        const li = document.createElement('li');
        li.textContent = `${user.username} `;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteUser(index);
        li.appendChild(deleteButton);
        userList.appendChild(li);
    });
}

function deleteUser(index) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    loadUsers();
}

// Load users on page load
loadUsers();