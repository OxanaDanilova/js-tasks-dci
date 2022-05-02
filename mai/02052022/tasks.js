// Strings, Numbers, Booleans, Null, undefined data types & typeof operator

// Exercises to become familiar with data types and typeof operator.

// Copy and paste these variables into your JavaScript file. In the commented section, write down which type you think each variable is. Check your answers by printing the types to the console.
console.log("-------task 1----------");
let length = 16.78; //number
let lastName = "Johnson"; //string
let car = ""; //string
let isOpen = true; // boolean
console.log(typeof length);
console.log(typeof lastName);
console.log(typeof car);
console.log(typeof isOpen);
console.log();

// Declare two variables called ageMark and ageJohn. Assign their ages - one age should be assigned as a string, the other as a number. Print the variables' data types to the console.
console.log("-------task 2----------");
let ageMark = 28;
let ageJohn = "35";
console.log(typeof ageMark);
console.log(typeof ageJohn);
console.log();

// Is John older than Mark? Declare a variable with a boolean value and print the following to the console eg. "John is older than Mark: true"
console.log("-------task 3----------");
let isJohnOlder = true;
console.log(`John is older than Mark: ${isJohnOlder}`);
console.log();

// Declare a variable called "str". Do not assign a value. Print str's data type to the console.
console.log("-------task 4----------");
let str;
console.log(typeof str);
console.log();

// Assign a string to str. Print str's data type again.
console.log("-------task 5----------");
str = "Long long text";
console.log(typeof str);
console.log();

// Print the last character of str's string to the console.
console.log("-------task 6----------");
console.log("last charachter: ", str[str.length - 1]);
console.log();

// Print the length of str to the console, as well as the data type of str's length.
console.log("-------task 7----------");
console.log(
  `Length of str: ${str.length}, type of str length: ${typeof str.length}`
);
console.log();

// Declare three variables: "goals", "penalties", "injuries". Assign numbers to each of the variables. Check if the variable values are equal or not (e.g. console.log(goals == penalties);). Do this for each possibility (goals, penalties) (goals, injuries), (penalties, injuries). Then, print the data type of this check to the console.
console.log("-------task 8----------");
let goals = 10;
let penalties = 2;
let injuries = 3;
console.log(goals == penalties, typeof (goals == penalties));
console.log(goals == injuries, typeof (goals == injuries));
console.log(penalties == injuries, typeof (penalties == injuries));
console.log();

// What is the type of Infinity? Comment your answer. Print the type of infinity to the console.

console.log("-------task 9----------");
// Infinity has number type.
console.log(typeof Infinity);
console.log();

// Declare a variable. Assign the variable the value of a number or a string. Use the isNaN() method to check whether the variable is a number or not. Print "variable is NOT a number: true/false".
console.log("-------task 10----------");
let myVar = 15;
console.log(`variable is NOT a number: ${isNaN(myVar)}`);
console.log();
// Print the data type of isNaN(variable) to the console.
console.log("-------task 11----------");
console.log(typeof isNaN(myVar));
console.log();
