function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  let email = "test@example.com";
  if (validateEmail(email)) {
    console.log("Email is valid.");
  } else {
    console.log("Please enter a valid email address.");
  }
  