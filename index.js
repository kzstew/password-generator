const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  ".",
  "?",
  "/",
];

let passwordLength = 12;

function getRandomCharacter() {
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

function getRandomPassword() {
  let randomPassword = "";

  for (i = 0; i < passwordLength; i++) {
    randomPassword += getRandomCharacter();
  }
  return randomPassword;
}

function displayPassword() {
  let generatedPasswordOne = getRandomPassword();
  let generatedPasswordTwo = getRandomPassword();
  document.getElementById("passwordOne-el").innerHTML = generatedPasswordOne;
  document.getElementById("passwordTwo-el").innerHTML = generatedPasswordTwo;
  console.log(generatedPasswordOne + " , " + generatedPasswordTwo);
}
