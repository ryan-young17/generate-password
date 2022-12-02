// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var special = "!#$%&()*+-./:;<=>?@[]^_`{|}~";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var upLetters = letters.toUpperCase();
  var passwordLength = "";
  var passwordOption = "";
  var randomPassword = "";

  while (true) {
    passwordLength = parseInt(prompt("Please choose the length of your password between 8 - 128 characters."));
  if (passwordLength > 8 && passwordLength < 128) {
      break;
    } else {
      alert("Sorry, please select a number between 8 - 128.");
    }
  }

  var isUppercase = confirm("Would you like to use uppercase?");
  var isLowercase = confirm("Would you like to use lowercase?");
  var isSpecial = confirm("Would you like to use special characters?");
  var isNumber = confirm("Would you like to use numbers?");

  if (isUppercase) {
    //Use Uppercase Letters
    passwordOption += upLetters;
  }

  if (isLowercase) {
    //Use Uppercase Letters
    passwordOption += letters;
  }

  if (isSpecial) {
    //Use Uppercase Letters
    passwordOption += special;
  }

  if (isNumber) {
    //Use Uppercase Letters
    passwordOption += numbers;
  }

  if (!isUppercase && !isLowercase && !isSpecial && !isNumber) {
    alert("Sorry, you must choose at least one of these character options.");
    return "";
  }

  for (var i = 0; i <= passwordLength; i++) {
    randomPassword += passwordOption[Math.floor(Math.random() * passwordOption.length)];
  }

  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
