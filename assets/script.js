// Assignment Code
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;

// This section prompts the user the character length. If input is invalid, prompt is refreshed.
var pwlength = getlength()

if (pwlength < 8 || pwlength > 128) {
  alert("Password length is invalid. Password length should be at least 8 and less than 128 characters.");

writePassword()
}

// This section prompts the user 4 different criteria. If they choose none of the four, prompt is refreshed.
var useUpperCase = confirm("Do you want to include uppercase letters?")
var useLowerCase = confirm("Do you want to include lowercase letters?")
var useNumeric = confirm("Do you want to include numeric values?")
var useSpecial = confirm("Do you want to include special characters?")

if (!useUpperCase && !useLowerCase && !useNumeric && !useSpecial) {
  alert("You must select at least one of the character types.");
writePassword()
}

// This section logs if the character types were satisfied at least once
var needsUpperCase = true;
var needsLowerCase = true;
var needsNumerical = true;
var needsSpecial = true;

// These are the arrays for the character types
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
numeric = [0,1,2,3,4,5,6,7,8,9]
special = [" ","!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","^","_","`","{","|","}","~"]

var realPassword = "";

// This section generates the random password and checks if all criteria has been met.
while (realPassword.length < pwlength + 1) {
  if (needsUpperCase && useUpperCase) {
    realPassword = realPassword + uppercase[Math.floor(Math.random()*26)]; 
    needsUpperCase = false; 
  }
  else {
    realPassword = realPassword + lowercase[Math.floor(Math.random()*26)];
  }

  
}
//Displays generated password
alert("Your Generated Password is: " + realPassword);


}
function getlength () {
  return prompt("What is your desired password length?");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);