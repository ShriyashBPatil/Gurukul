
		var users = {
			"user1": "password1",
			"user2": "password2",
			"user3": "password3"
		};

		function authenticate() {
			
			var username = document.getElementById("username").value;
			var password = document.getElementById("password").value;

			
			if (users[username] && users[username] === password) {
				alert("Login successful!");
				window.location.href = "red.html"; 
				return false; 
			} else {
				alert("Invalid username or password. Please try again.");
				return false; 
			}
		}
