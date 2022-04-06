const arr = [];
const arr1 = new Array();
console.log(arr1);
////push+//pull-///unshift+/// shift-//////indexOf///////
arr[0] = "Ali";
arr.push("Steel"); ///+ am Ende
arr.unshift("Nancy"); ///+ am Anfang
arr.unshift("Olga");
let lastDel = arr.pop(); ////   - am Ende
console.log("last del", lastDel);
let firstDel = arr.shift(); /////-  - am Anfang
console.log("first del", firstDel);
console.table(arr);
arr[1] = "Alex";
console.table(arr.reverse());

// No Duplicates! A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// [2, 2, 2, 2, 2, 2] ➞ [2]
// [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

function clearUp(arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (resultArr.indexOf(arr[i]) == -1) {
      resultArr.push(arr[i]);
    }
  }
  return console.table(resultArr);
}

clearUp([1, 4, 4, 7, 7, 7]);
clearUp([1, 6, 6, 9, 9]);
clearUp([2, 2, 2, 2, 2, 2]);
clearUp([5, 10, 15, 20, 25]);

function clearUp1(arr) {
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!resultArr.includes(arr[i])) {
      resultArr.push(arr[i]);
    }
  }
  return console.table(resultArr);
}

clearUp1([1, 4, 4, 7, 7, 7]);

const clearUp2 = (...arr) => {
  console.log(new Set(arr));
};

clearUp2([1, 4, 4, 7, 7, 7]);

////// splice(index, count)  ändert original array
const days = ["Mon", "Die", "Mitt", "Don"];
let deletedItems = days.splice(3);
console.log("deletedItems", deletedItems);
console.table(days);

////// slice() ändert nicht origainal array
const cities = ["Berlin", "London", "Dubai", "LA"];
console.log(cities.slice(0, 2));
console.log(cities);

// split() string.split() => array
let str = "This. is. a long text";
console.table(str.split(" "));

///join()   array.join() =>string
const text = ["Hi", "I", "am", "Hadi"];
console.log(text.join("😺️"));

// . snake_case ➞ camelCase Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase.
// Examples:
// toCamelCase("hello_world") ➞ "helloWorld"
// toCamelCase("javascript_is_fun") ➞ "javascriptIsFun"

function toCamelCase(str) {
  const arr = str.toLowerCase().split("_");
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
  }
  return console.log(arr.join(""));
}

toCamelCase("hello_world");
toCamelCase("javascript_is_fun");

function sum(x, y) {
  return x + y;
}

const sumArrow = (x, y) => x + y;

function display(str) {
  return console.log(str);
}

const displayArr = (str) => console.log(str);

// // Hello Alex. Create an array filled with your friends' and family's names. Loop over the array and greet each friend. Bonus: Print the indexes of each item in the array. Examples:
// [Maria, Mike, Paul, Doven] ➞ expected output: "Hello Maria! Hello Mike! Hello Paul! Hello Doven!
function greetings(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `Hello ${arr[i]} with ${i} index!`;
  }
  return console.log(str);
}

greetings(["Maria", "Mike", "Paul", "Doven"]);

///////////////       2. Variant   ///////////////////
const greetings2 = (arr) => {
  let str = "";
  arr.forEach((item, i) => (str += `Hello ${item} with ${i} index!`));
  return console.log(str);
};

greetings2(["Maria", "Mike", "Paul", "Doven"]);

// // sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.

const sumOfNumbers = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return console.log(sum);
};

sumOfNumbers([5, 10, 20]);

const sumOfNumbers2 = (arr) => arr.reduce((a, b) => a + b, 0);
sumOfNumbers2([5, 15, 20]);
