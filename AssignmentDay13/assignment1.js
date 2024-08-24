let user = {
  name: "Pankaj Yadav",
  email: "yadavpankaj092785@gmail.com",
  age: 22,
  
  changeName: function(newName) {
    if (newName.trim() !== "") {
      this.name = newName.trim();
      console.log("Name changed successfully!");
    } else {
      console.log("Please enter a valid name.");
    }
  },

  updateEmail: function(newEmail) {
    if (this.validateEmail(newEmail)) {
      this.email = newEmail.trim();
      console.log("Email updated successfully!");
    } else {
      console.log("Please enter a valid email address.");
    }
  },

  calculateBirthYear: function() {
    let currentYear = new Date().getFullYear();
    return currentYear - this.age;
  },

  validateEmail: function(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
};

function displayUserProfile() {
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  console.log(`Age: ${user.age}`);
  console.log(`Birth Year: ${user.calculateBirthYear()}`);
}

displayUserProfile(); 

user.changeName("Pankaj");
user.updateEmail("yadav@gmail.com"); 
user.updateEmail("invalidemail"); 

displayUserProfile(); 