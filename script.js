// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(randomPass) {
  var passwordText = document.querySelector("#password");
  if (password.length === 0) {
    return;
  }
  passwordText.value = randomPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () { writePassword(generatePass()) });
function generatePass() {
  
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numeric = 1234567890;
  var symbols = "!@#$%^&*";
  var emptyS = "";
  var randomPass = "";
  
  var passwordLength = prompt("How many characters would you like your password to contain?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8-128 characters");
    return;
  } else if (isNaN(passwordLength)) {
    alert("Please choose a number character");
    return;
  } else {
    var upperCharacter = confirm("Click OK to confirm including uppercase characters.");
    var lowerCharacter = confirm("Click OK to confirm including lowercase characters.");
    var number = confirm("Click OK to confirm including numeric characters.");
    var symbolCharacter = confirm("Click OK to confirm including special characters.");
  }
  
  if (upperCharacter) {
    emptyS += upperCase
  }
  
  if (lowerCharacter) {
    emptyS += lowerCase
  }
  
  if (number) {
    emptyS += numeric
  }
  
  if (symbolCharacter) {
    emptyS += symbols
  } 
  
  for (i = 0; i < passwordLength; i++) {
    randomPass += emptyS[Math.floor(Math.random() * emptyS.length)]
  }
  return(randomPass);
}