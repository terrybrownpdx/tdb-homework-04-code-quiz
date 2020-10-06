//declare criteria variables as arrays
var length = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "123", "124", "125", "126", "127", "128"];
var characterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var characterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var characterNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var characterSpecial = ["!,", "#", "$", "%", "&", "'", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", ", "{", "|", "}", "~", "]", "^", "_"];

//declare variables that will take inputs - wrap inside function
//evaluations of if input is correct
var userLength = 0

while(userLength < 8 || userLength > 128) {
  userLength = prompt("How many characters would you like, between 8-128?");
}
alert("Your password will be " + userLength + " characters long");

var userCharacterLower = confirm("Do you want Lower case letters?");
var userCharacterUpper = confirm("Do you want Upper case letters?");
var userCharacterNumber = confirm("Do you want Numbers?");
var userCharacterSpecial = confirm("Do you want Special characters?");

// Assignment Code
//acceptedCharacters.concat(characterLower); 
//console.log(acceptedCharacters.concat(characterLower));

var generateBtn = document.querySelector("#generate");

function generatePassword() {
var acceptedCharacters=[]
var password=""

  if (userCharacterLower === true) {
    acceptedCharacters=acceptedCharacters.concat(characterLower)
  }
  

  if (userCharacterUpper === true) {
    acceptedCharacters=acceptedCharacters.concat(characterUpper)
    
  }

  if (userCharacterNumber === true) {
    acceptedCharacters=acceptedCharacters.concat(characterNumber)
    
  }

  if (userCharacterSpecial === true) {
    acceptedCharacters=acceptedCharacters.concat(characterSpecial)

  }

  for (var x = 0; x < userLength; x++) {
    var rand = Math.floor(Math.random() * acceptedCharacters.length);
    password+=acceptedCharacters[rand];
    console.log(password, rand);
  }
    return password
}

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword, {

  });

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    //prompt(password)
  }

