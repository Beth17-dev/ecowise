// 1. Get references to the elements (Similar to initializing components in NetBeans)
const loginBtn = document.getElementById('loginBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// 2. Add the Click Listener
loginBtn.addEventListener('click', function() {
    const user = usernameInput.value;
    const pass = passwordInput.value;

    // Simple Logic (Replace this with your actual validation later)
    if (user === "admin" && pass === "1234") {
        alert("Login Successful! Welcome to EcoWise.");
        // This is how you change pages in a web app:
        window.location.href = "dashboard.html"; 
    } else {
        alert("Invalid Username or Password.");
    }
});

// Logic for the Register button
document.getElementById('regBtn').addEventListener('click', () => {
    window.location.href = "register.html";
});