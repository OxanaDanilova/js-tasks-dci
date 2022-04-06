// AEIOU:
// Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, “a, e, i, o, u”) in the string.
// i.e. findVowels(“this is a string”) ➞ 4

const findVowels = (str) => {
  let vowels = "AEIOUaeiou";
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      counter++;
    }
  }
  return console.log("vowels counter", counter);
};

findVowels("this is a string");

//--------------------------------
// No Duplicates!
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// [2, 2, 2, 2, 2, 2] ➞ [2]
// [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

const noDuplicates = (arr) => {
  return console.log([...new Set(arr)]);
};

noDuplicates([1, 4, 4, 7, 7, 7]);
noDuplicates([1, 6, 6, 9, 9]);
noDuplicates([2, 2, 2, 2, 2, 2]);
noDuplicates([5, 10, 15, 20, 25]);

const noDuplicates2 = (arr) => {
  const result = [];
  for (let item of arr) {
    // /// for (let i=0: i<arr.length; i++)
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return console.log("result", result);
};

noDuplicates2([1, 4, 4, 7, 7, 7]);
//--------------------------------
// is Palindrome AKA word that reads the same backward or forward.
// Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat

const palindrome = (str) => {
  let lowerStr = str.toLowerCase();
  let isPalindrome = true;
  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] != lowerStr[lowerStr.length - 1 - i]) {
      isPalindrome = false;
    }
  }
  return console.log("isPalindrome:", isPalindrome);
};

const palindrome2 = (str) =>
  str.toLowerCase() == str.toLowerCase().split("").reverse().join("");

palindrome("ada"); //true
palindrome("tarrattarrat"); //true
palindrome("oxana"); //false

console.log("palindrome", palindrome2("ada")); //true
//--------------------------------
// This question has 2 parts
// Part a) write a function that takes in a number and does a console.log("Even 10!") if the number is evenly divisable by 10. Examples:
// printIfDivisibleByTen(1) --> no output
// printIfDivisibleByTen(2) --> no output
// printIfDivisibleByTen(32) --> no output
// printIfDivisibleByTen(10) --> "Even 10!" into the console
// printIfDivisibleByTen(30) --> "Even 10!" into the console
// printIfDivisibleByTen(90000) --> "Even 10!" into the console

const printIfDivisibleByTen = (num) => {
  if (num % 10 == 0) {
    console.log(num, "Even 10!");
  } else {
    console.log(num, "Not even!");
  }
};

printIfDivisibleByTen(1);
printIfDivisibleByTen(2);
printIfDivisibleByTen(32); //--> no output
printIfDivisibleByTen(10); //--> "Even 10!" into the console
printIfDivisibleByTen(30); //--> "Even 10!" into the console
printIfDivisibleByTen(90000); //--> "Even 10!" into the console

// Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number.
const partB = () => {
  for (let i = 1; i <= 125; i++) {
    printIfDivisibleByTen(i);
  }
};

partB();

//----------------------------
//Write an arrow function that takes in 5 numbers as its parameters and returns the largest one

const maxFunc = (...args) => {
  return console.log(Math.max(...args));
};

maxFunc(5, 14, 67, 522, 1212354);
maxFunc(554654, 14, 67, 522, 1212354, 0, 456545654654654, 1000000000000000);
