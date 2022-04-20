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

console.log("--------------------07-------------------");

//07
//One is not like the others... Create a function that takes an array of numbers and return the number that's unique.

// Examples:
// []
// unique([3, 3, 3, 7, 3, 3]) ➞ 7  // 0 ==5  indexOf() == lastIndexOf()
// unique([0, 0, 0.77, 0, 0]) ➞ 0.77
// unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0

const unique = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (/* arr.indexOf(arr[i]) */ i == arr.lastIndexOf(arr[i])) {
      return console.log(arr[i]);
    }
  }
};

const unique2 = (arr) => {
  return console.log(
    arr.find((elem) => arr.indexOf(elem) === arr.lastIndexOf(elem))
  );
};
//->     0 1  2  3  4  5  6
unique([3, 3, 3, 3, 7, 3, 3]); // ➞ 7  // 0 ==5  indexOf() == lastIndexOf()
unique([0, 0, 0.77, 0, 0]); // ➞ 0.77
unique([0, 1, 1, 1, 1, 1, 1, 1]); // ➞ 0
unique([4, 1, 5, 1, 5, 1, 1, 8]); // ➞

console.log("-----------------2 methode----------------------");

unique2([3, 3, 3, 3, 7, 3, 3]); // ➞ 7  // 0 ==5  indexOf() == lastIndexOf()
unique2([0, 0, 0.77, 0, 0]); // ➞ 0.77

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
console.log("-----------------11----------------------");

//11.
//Check if One Array can be Nested in Another
//Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:
// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true
// canNest([3, 1], [4, 0]) ➞ true
// canNest([9, 9, 8], [8, 9]) ➞ false
// canNest([1, 2, 3, 4], [2, 3]) ➞ false

const canNest = (arr1, arr2) =>
  console.log(
    Math.max(...arr1) < Math.max(...arr2) &&
      Math.min(...arr1) > Math.min(...arr2)
  );

canNest([1, 2, 3, 4], [0, 6]); // ➞ true
canNest([3, 1], [4, 0]); // ➞ true
canNest([9, 9, 8], [8, 9]); // ➞ false
canNest([1, 2, 3, 4], [2, 3]); // ➞ false
console.log("-----------------12----------------------");

//12.
//Tuck in Array
//Create a function that takes two arrays and insert the second array in the middle of the first array.
//Examples
// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]
// tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]

const tuckIn = (arr1, arr2) => {
  arr1.splice(1, 0, ...arr2);
  return console.log(arr1);
};

tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]); // ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
tuckIn([15, 150], [45, 75, 35]); // ➞ [15, 45, 75, 35, 150]
tuckIn(
  [
    [1, 2],
    [5, 6],
  ],
  [[3, 4]]
); // ➞ [[1, 2], [3, 4], [5, 6]]

console.log("-----------------13----------------------");

//13.
//Number Split
//Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
//Examples
// numberSplit(4) ➞ [2, 2]
// numberSplit(10) ➞ [5, 5]
// numberSplit(11) ➞ [5, 6]
// numberSplit(-9) ➞ [-5, -4]

const numberSplit = (num) => {
  const arr = [];
  if (num % 2 == 0) {
    arr.push(num / 2, num / 2);
  } else {
    arr.push(Math.floor(num / 2), Math.ceil(num / 2));
  }
  return console.log(arr);
};

numberSplit(4); // ➞ [2, 2]
numberSplit(10); // ➞ [5, 5]
numberSplit(11); // ➞ [5, 6]
numberSplit(-9); // ➞ [-5, -4]

console.log("---------------------------------------");
