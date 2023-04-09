function authenticate() {
    // Get the username and password from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Replace the following lines with your authentication logic
    if (username === "admin" && password === "password123") {
        alert("Login successful!");
        window.location.href = "home.html"; // Redirect to welcome page
        return false; // Prevent the form from being submitted
    } else {
        alert("Invalid username or password. Please try again.");
        return false; // Prevent the form from being submitted
    }
}