// Assignment code here
var character = {
  lowercase: "",
  uppercase: "",
  num: "",
  specCharacter: "",
};

function generatePassword() {
  var promptLength = window.prompt("Please choose a password length between 8 and 128 characters.");

  var promptLower = window.confirm('Would you like your password to contain Lowercase letters?');
    if(promptLower === true) {
      window.alert("Your password will include Lowercase Letters.");
    }
    if (promptLower === false) {
      window.alert("Your password will not include Lowercase Letters.");
    };
  
  var promptUpper = window.confirm("Would you like your password to contain Uppercase letters?");
    if(promptUpper === true) {
      window.alert("Your password will include Uppercase letters.");
    };
    if (promptUpper === false) {
      window.alert("Your password will not include Uppercase letters.");
    };
  
  var promptNum = window.confirm("Would you like your password to contain numbers?");
    if(promptNum === true) {
      window.alert("Your password will include numbers.");
    };
    if(promptNum === false) {
      window.alert("Your password will not include numbers.");
    };

  var promptSpec = window.confirm("Would you like your password to contain special characters?");
    if(promptSpec === true) {
      window.alert("Your password will include special characters.");
    };
    if(promptSpec === false) {
      window.alert("Your password will not include special characters.");
    };
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
