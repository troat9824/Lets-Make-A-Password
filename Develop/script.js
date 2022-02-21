// Assignment code here
var character = {
  lowercase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  uppercase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  num: ["0","1","2","3","4","5","6","7","8","9"],
  specCharacter: ["!","@","#","$","%","^","&*"],
};
var pwd ="";

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


for (let i=0; pwd.length < promptLength.length; i++) {

       
  if (promptLower) {
    console.log(`lowercase yes`);
    let randomizerLowercase =
      character.lowercase[Math.floor(Math.random() * character.lowercase.length)];
    console.log(`randomizerLowercase: ${randomizerLowercase}`);
    pwd = pwd + randomizerLowercase;
  }

  if (promptUpper) {
    console.log(`uppercase yes`);
    let randomizerUppercase =
      character.uppercase[Math.floor(Math.random() * character.uppercase.length)];
    console.log(`randomizerUppercase: ${randomizerUppercase}`);
    pwd = pwd + randomizerUppercase;
  }

 
  if (promptNum) {
    console.log(`num yes`);
    let randomizerNum =
      character.num[Math.floor(Math.random() * character.num.length)];
    console.log(`randomizerNum: ${randomizerNum}`);
    pwd = pwd + randomizerNum;
  }

 
  if (promptSpec) {
    console.log(`spec yes`);
    let randomizerSpec =
      character.specCharacter[Math.floor(Math.random() * character.specCharacter.length)];
    console.log(`randomizerSpec: ${randomizerSpec}`);
    pwd = pwd + randomizerSpec;
  }

// Return the final password generated
console.log(`pwd: ${pwd}`);
console.log(`pwd length: ${pwd.length}`);
return pwd;
};
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
