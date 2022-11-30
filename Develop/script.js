// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var special = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var upLetters = letters.toUpperCase();
  var isUppercase = confirm("Would you like to use uppercase?");
  var isLowercase = confirm("Would you like to use lowercase?");
  var isSpecial = confirm("Would you like to use special characters?");
  var isNumber = confirm("Would you like to use numbers?");
  var passwordLength = "";
  var randomSpecial = Math.floor(Math.random() * special.length);
  var randomLetters = Math.floor(Math.random() * letters.length);
  var randomNumbers = Math.floor(Math.random() * numbers.length);
  var randomUppercase = Math.floor(Math.random() * upLetters.length);

  while (true) {
    passwordLength = parseInt(prompt("Please choose the length of your password between 8 - 128 characters."));
  if (passwordLength >= 8 && passwordLength <= 128) {
      break;
    } else {
      alert("Sorry, please select a number between 8 - 128.");
    }
  }

  if (isUppercase) {
    //Use Uppercase Letters
    console.log("uppercase");
  }

  if (isLowercase) {
    //Use Lowercase Letters
    console.log("lowercase");
  }

  if (isSpecial) {
    //Use Special Characters
    console.log("special");
  }

  if (isNumber) {
    //Use Numbers
    console.log("number");
  }

  // Grab Random Letters



  return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
