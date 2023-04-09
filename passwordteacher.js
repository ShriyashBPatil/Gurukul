function authenticate() {
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

   
    if (username === "admin" && password === "password123") {
        window.location.href = "home.html"; 
        return false;
    } else {
        alert("Invalid username or password. Please try again.");
        return false; 
    }
}