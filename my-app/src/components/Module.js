//checks if the password has three repeating characters
function hasRepeatedCharacters(password) {
  for (let i = 0; i < password.length - 2; i++) {
    if (password[i] === password[i + 1] && password[i] === password[i + 2]) {
      return true;
    }
  }
  return false;
}

//checks for password and changes the color of the DOM message 
const getColorMessage = (password) => {
  if(hasRepeatedCharacters(password)) {
    return 'red';
   } else if(password.length > 0){
    return 'green';
  }else{
    return 'rgb(99, 99, 99);';
  }
};

//checks for password length and changes the color of the DOM message
const passwordLength = 8;
function checkPasswordLength(password) {
  if (password.length >= passwordLength) {
    return true;
}
return false;
}

//checks for number in password and changes the color of the DOM message
const numberRegex = /\d/;
function checkNumber(password) {
for(let i = 0; i < password.length; i++) {
  if (numberRegex.test(password)) {;
  return true;
}
return false;
  }
}

//checks of upper case characters and changes the color of the DOM message
const uppercaseRegex = /[A-Z]/;
function checkUppercase(password) {
for(let i = 0; i < password.length; i++) {
  if(uppercaseRegex.test(password)) {
    return true;
  }
return false;
}
}

//checks for lower case characters and changes the color of the DOM message
const lowercaseRegex = /[a-z]/;
function checkLowercase(password) {
for(let i = 0; i < password.length; i++) {
  if(lowercaseRegex.test(password)) {
    return true;
  }
return false;
}
}

//checks for symbols present in password and changes the color of the DOM
const symbolsRegex = /[!@#$%^&*_=+?~]/;
function checkSymbols(password) {
for(let i = 0; i < password.length; i++) {
  if(symbolsRegex.test(password)) {
    return true;
  }
return false;
}
}

//exporting functions
export {
  hasRepeatedCharacters,
  getColorMessage,
  checkPasswordLength,
  checkNumber,
  checkUppercase,
  checkLowercase,
  checkSymbols,
};






  