//05.
//Where Have My Four Letter Words Gone? Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

// Examples:

// isFourLetters(["John", "James", "Jack", "Jeanne"]) ➞ ["John", "Jack"]
// isFourLetters(["Tomato", "Corn", "Lettuce"]) ➞ ["Corn"]
// isFourLetters(["Dog", "Cat", "Deer"]) ➞ ["Deer"]
const isFourLetters = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length == 4) {
      newArr.push(arr[i]);
    }
  }
  return console.log(newArr);
};

isFourLetters(["John", "James", "Jack", "Jeanne"]); // ➞ ["John", "Jack"]
isFourLetters(["Tomato", "Corn", "Lettuce"]); // ➞ ["Corn"]
isFourLetters(["Dog", "Cat", "Deer"]); // ➞ ["Deer"]

console.log("---------------------------------------");

//06
//Amplify the Multiples of 4. Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:

// For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
// If the number cannot be divided evenly by 4, simply return the number.
// The given integer will always be equal to or greater than 1.
// Include the given number (the number in the parameters).
// Examples:
// newArr
// amplify(4) ➞ [1, 2, 3, 40]  // 1-4 4*10
// amplify(3) ➞ [1, 2, 3]
// amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

const amplify = (num) => {
  const newArr = []; //1,2,3
  for (let i = 1; i <= num; i++) {
    let elem = i; //3
    if (i % 4 == 0) {
      //1/4 2/4 3/4
      elem = i * 10;
    }
    newArr.push(elem);
  }

  return console.log(newArr);
};

amplify(4); // ➞ [1, 2, 3, 40]  // 1-4 4*10
amplify(3); // ➞ [1, 2, 3]
amplify(25); // ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

console.log("---------------------------------------");

//07
//One is not like the others... Create a function that takes an array of numbers and return the number that's unique.

// Examples:
// []
// unique([3, 3, 3, 7, 3, 3]) ➞ 7  // 0 ==5  indexOf() == lastIndexOf()
// unique([0, 0, 0.77, 0, 0]) ➞ 0.77
// unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0

const unique = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
      return console.log(arr[i]);
    }
  }
};
//->     0 1  2  3  4  5  6
unique([3, 3, 3, 3, 7, 3, 3]); // ➞ 7  // 0 ==5  indexOf() == lastIndexOf()
unique([0, 0, 0.77, 0, 0]); // ➞ 0.77
unique([0, 1, 1, 1, 1, 1, 1, 1]); // ➞ 0
unique([4, 1, 5, 1, 5, 1, 1, 8]); // ➞

console.log("---------------------------------------");

//08.
// c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. NB: for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

// Examples:

// hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
// hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
// hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"

const hackerSpeak = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let elem = str[i];
    if (elem == "a") {
      elem = 4;
    }
    if (elem == "e") {
      elem = 3;
    }
    if (elem == "i") {
      elem = 1;
    }
    if (elem == "o") {
      elem = 0;
    }
    if (elem == "s") {
      elem = 5;
    }
    newStr += elem;
  }
  return console.log(newStr);
};

hackerSpeak("javascript is cool"); // ➞ "j4v45cr1pt 15 c00l"
hackerSpeak("programming is fun"); // ➞ "pr0gr4mm1ng 15 fun"
hackerSpeak("become a coder"); // ➞ "b3c0m3 4 c0d3r"

const hackerSpeak2 = (str) => {
  let newStr = "";
  const arr = ["o", "i", , "e", "a", "s"];
  for (let i = 0; i < str.length; i++) {
    let elem = str[i]; //j// 4
    if (arr.includes(elem)) {
      elem = arr.indexOf(elem);
    }
    newStr += elem; //j4
  }
  return console.log(newStr);
};

hackerSpeak2("javascript is cool");
console.log("---------------------------------------");

//09.
// Is it Symmetrical? Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. NB: A number is symmetrical when it is the same as its reverse.

// Examples:

// isSymmetrical(7227) ➞ true
// isSymmetrical(12567) ➞ false
// isSymmetrical(44444444) ➞ true
// isSymmetrical(9939) ➞ false
// isSymmetrical(1112111) ➞ true

const isSymmetrical = (number) => {
  let str = "" + number;
  const reverseStr = str.split("").reverse().join("");
  return console.log(str == reverseStr);
};

isSymmetrical(7227); // ➞ true
isSymmetrical(12567); // ➞ false
isSymmetrical(44444444); // ➞ true
isSymmetrical(9939); // ➞ false
isSymmetrical(1112111); // ➞ true

console.log("---------------------------------------");

//10.
//Buggy Code (Part 6)
// Mubashir wants to remove numbers from a given string!
// Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

// Examples
// removeNumbers("mubashir1") ➞ "mubashir"
// removeNumbers("12ma23tt") ➞ "matt"
// removeNumbers("e1d2a3b4i5t6") ➞ "edabit"

const removeNumbers = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i])) {
      newStr += str[i]; /// newStr = newStr + str[i];
    }
  }
  return console.log(newStr);
};

removeNumbers("mubashir1"); // ➞ "mubashir"
removeNumbers("12ma23tt"); // ➞ "matt"
removeNumbers("e1d2a3b4i5t6"); //"edabit"
console.log("---------------------------------------");
