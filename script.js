// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Make sure eveything is inside this function, so that after the button is clicked, it will prompt user
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
function generatePassword() {
var password = "";
  // Prompts for selecting what type of code you want
  var user_Length = prompt("How long would you like your password? (must be between 8-128 characters)");
  while (user_Length < 8 || user_Length >128) {
    user_Length = prompt("How long would you like your password? (must be between 8-128 characters)")
    }
  var user_Lowercase = confirm("Would you like to include lowercase letters? (Click OK to confirm.)");
  var user_Uppercase = confirm("Would you like to include uppercase letters? (Click OK to confirm.)");
  var user_Numbers = confirm("Would you like to include numbers (0-9)? (Click OK to confirm.)");
  var user_Symbols = confirm("Would you like to include symbols? (Click OK to confirm.)");


  /////////////////////// !!!!!Don't know how to make these change to new variable if confirmed so I can just put them straight into function below

  // Array for each variable 
  var uppercaseCodes = ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var lowercaseCodes = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var numbersCodes = [0,1,2,3,4,5,6,7,8,9]
  var symbolsCodes = ["!","@","#","$","%","^","&","*","(",")","-","=","_","+",",",".","?"]
  

  // Set user_Lowercase as default and "concat" the other var if they are selected if they === true
  
    var charCodes = []

    if (user_Uppercase) {
      charCodes = charCodes.concat(uppercaseCodes) 
    }
    if (user_Numbers) {
      charCodes = charCodes.concat(numbersCodes)
    }
    if (user_Symbols) {
      charCodes =charCodes.concat(symbolsCodes)
    }
    if (user_Lowercase) {
      charCodes = charCodes.concat(lowercaseCodes)
    }
    
 

  //for loop that randomly generates numbers to plug into the _Codes using the final variation of "charCodes"
  for (var i = 0; i < user_Length; i++) {
    var password = password + charCodes[Math.floor(Math.random() * charCodes.length)]
   
  }
  return password.concat()
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Stuff Jeff talked about