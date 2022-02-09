// Assignment code here
var character = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  num: "0123456789",
  specCharacter: "!@#$%^&*",
};

function randomizer(charString) {
  Math.random() * (charString.length);
}
var ifTrue = [];

randomizer(character.lowercase);

// var ifTrue = [true, false, true, true]

function generatePassword() {
  var promptLength = window.prompt("Please choose a password length between 8 and 128 characters.");
    if(promptLength < 8 || promptLength > 128) {
      window.alert("Please choose a number between 8 and 128.");
      return generatePassword();
    };

    if(promptLength >= 8 && promptLength <= 128) {
      window.alert("Your password will be " + promptLength + " characters long.")
    };
    
  var promptLower = window.confirm('Would you like your password to contain Lowercase letters?');
    if(promptLower === true) {
      window.alert("Your password will include Lowercase Letters.");
      ifTrue.push(promptLower);
    } else {
      window.alert("Your password will not include Lowercase Letters.");
    };
  
  var promptUpper = window.confirm("Would you like your password to contain Uppercase letters?");
    if(promptUpper === true) {
      window.alert("Your password will include Uppercase letters.");
      ifTrue.push(promptUpper);
    } else {
      window.alert("Your password will not include Uppercase letters.");
    };
  
  var promptNum = window.confirm("Would you like your password to contain numbers?");
    if(promptNum === true) {
      window.alert("Your password will include numbers.");
      ifTrue.push(promptNum);
    } else {
      window.alert("Your password will not include numbers.");
    };

  var promptSpec = window.confirm("Would you like your password to contain special characters?");
    if(promptSpec === true) {
      window.alert("Your password will include special characters.");
      ifTrue.push(promptSpec);
    } else {
      window.alert("Your password will not include special characters.");
    };
console.log(ifTrue);

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
