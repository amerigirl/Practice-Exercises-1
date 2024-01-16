//1. Write a javascript program to get the extension of a filename

const getFileExtension = (str) => str.slice(str.lastIndexOf("."));

console.log(
  "1. Get the file extenstion. File example = www.google.com.  Answer = " +
    getFileExtension("www.google.com"),
);

//2. Write a javascript program to replace every character in a given string with the character following it in the alphabet

const moveCharsForward = (str) =>
  str

    .split("") //remember split turns into an array--which gives access to array methods
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

console.log(
  "\n" +
    "2. Move characters forward one char in the alphabet. Chars to move: abcd. Answer = " +
    moveCharsForward("abcd") +
    ".",
);

//3. write a javascript program to get the current date

const getDate = (date) => {
  //create a new date object
  date = new Date();
  const day = date.getDate(); //use the date object methods
  const month = date.getMonth() + 1; //zero index so add one for the correct month
  const year = date.getFullYear();

  return `${month}/${day}/${year}`; //return a template literal
};

console.log("\n" + "3. Return the current date. Answer = " + getDate() + ".");

//4. Write a javascript program to create a new string adding "New!" in front of a given string.

const addNew = (str) => {
  newStr = str.substr(0, 3);
  if (newStr === "New") {
    return str;
  } else {
    return "New " + str;
  }
};

console.log(
  "\n" +
    "4. Add 'New' to the front of a string. Answer = " +
    addNew("I love New York" + "!"),
);
console.log("\n" + "4b. " + addNew("New I love New York" + "!"));

/* 5. Write a javascript program to create a new string from a given string taking the first 3 characters and the  
last 3 characters of a string and adding them together. The string length must be 3 or more, if not, the  
result should be the empty string.  */

const combineStr = (str) => {
  newStr = str.substr(0, 3) + str.substr(str.length - 3, 3);
  return newStr;
};
console.log(
  "\n" +
    "5. Create a new string based on the first and last three characters. Word = youarethebestest. Answer = " +
    combineStr("youarethebestest"),
);

//6. Write javascript program to extract the first half of a string of even length

const firstHalf = (str) => str.substr(0, str.length / 2);
console.log(
  "\n" +
    "6. Return the first half of a string of even length. String = 'youarethebestest'. Answer = " +
    firstHalf("youarethebestest") +
    ".",
);

//7. Write a JavaScript program to concatenate two strings except their first
//character

const notFirstLine = (str1, str2) => {
  let firstString = str1.slice(1);
  let secondString = str2.slice(1);

  return `${firstString} + ${secondString}`;
};
console.log(
  "\n" +
    "7. Concatenate two strings except their first character. Words = Happy, love. Answer = " +
    notFirstLine("Happy", "love") +
    ".",
);

//8. Given two values, write a javascript program to find out which one is nearest 100

const nearestTo100 = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    if (num2 > num1) {
      return num2;
    }
  }
};
console.log("\n" + "8. Which number is closest to 100? Numbers: 99, 40. Answer = " + nearestTo100( 99, 40) + ".");
