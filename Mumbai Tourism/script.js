nav.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    nav.classList.remove('show');
  });
});
function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check if username and password are correct
  if (username === "user" && password === "password") {
    // Redirect to home page
    window.location.href = "tourist.html";
    return false; // Prevent form submission
  } else {
    // Display error message
    var errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "Invalid username or password. Please try again.";
    return false; // Prevent form submission
  }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Fetch form values
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  // You can do further validation here if needed

  // Example: Send form data to a server (you would typically replace this with your own backend endpoint)
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  // Optionally, show a confirmation message to the user
  alert('Your message has been sent!');

  // Clear form fields
  document.getElementById('contactForm').reset();
});
