// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbol = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',]

function passwordVariables() {
  var length = parseInt(prompt("Desired Password Length?"))
  if (Number.isNaN(length)) {
    alert("Password Length must be a valid number");
    return null;
  }
  if (length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters")
    return null;
  }
  var hasLower = confirm("Include lower case letters?")
  var hasUpper = confirm("Include Upper Case Letters?")
  var hasNumber = confirm("Include numbers?")
  var hasSymbol = confirm("Include special characters?")
  if (hasSymbol) {
  }else if (hasLower) {
  }else if (hasUpper) {
  }else if (hasNumber) {
  }else {
    alert("Password must include at least one character type")
  }

  var passwordOptions = {
    length: length,
    hasLower: hasLower,
    hasUpper: hasUpper,
    hasNumber: hasNumber,
    hasSymbol: hasSymbol,
  }
  return passwordOptions;
}

function random(array) {
  var randomIndex = Math.floor(Math.random() * array.length)
  var randomEl = array[randomIndex];
  return randomEl;
}

function generatePassword() {
  var options = passwordVariables()
  var currentArray = new Array()
  if (options.hasLower) {
    currentArray = currentArray.concat(lower)
  }
  if (options.hasUpper) {
    currentArray = currentArray.concat(upper)
  }
  if (options.hasNumber) {
    currentArray = currentArray.concat(number)
  }
  if (options.hasSymbol) {
    currentArray = currentArray.concat(symbol)
  }
  console.log(currentArray)

  let password = ""
  let i = 0
  while (i < options.length) {
    password += random(currentArray);
    i++
  }
  return password
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

var copyButton = document.querySelector("#copy-button");
copyButton.addEventListener("click", copyToClipboard)

function copyToClipboard() {
  const passwordText = document.querySelector("#password");
  const textToCopy = passwordText.value;

  const textarea = document.createElement("textarea");
  textarea.value = textToCopy;

  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand("copy");

  document.body.removeChild(textarea);

  alert("Text copied to clipboard!");
}

var clearButton = document.querySelector("#clear-button")
clearButton.addEventListener("click", clearPassword)

function clearPassword() {
  const textarea = document.querySelector("#password")
  textarea.value = ""
  alert("Text cleared!")
}