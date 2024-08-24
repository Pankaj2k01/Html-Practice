function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check if username and password are correct
    if (username === "user" && password === "password") {
      // Redirect to home page
      window.location.href = "home.html";
      return false; // Prevent form submission
    } else {
      // Display error message
      var errorMessage = document.getElementById("error-message");
      errorMessage.textContent = "Invalid username or password. Please try again.";
      return false; // Prevent form submission
    }
  }
  