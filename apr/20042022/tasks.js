// Create a function that returns an array of the properties of a javascript object.
//   Example

console.log("-----------task1----------------");
const person = {
  name: "Mike",
  class: "4A",
  course: "English",
};

function keysFunc(obj) {
  return console.log(Object.keys(obj));
}

// Expected output:
//   ["name", "class", "course"]

keysFunc(person);

console.log("-----------task2----------------");

// Given the following object
const student = {
  firstName: "Zain",
  lastName: "Oil",
  class: "D05",
};
// Create a method that prints the following: "Zain Oil a student in class D05"

student.print = function () {
  console.log(
    `${this.firstName} ${this.lastName} a student in class ${this.class}`
  );
};

student.print();

console.table(student);

console.log("-----------task3----------------");

// Get Values. Create a function that returns an array of all values of an object’s properties.
//   Examples:
const getObjectValues = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
};

function valuesFunc(obj) {
  return console.log(Object.values(obj));
}

valuesFunc(getObjectValues);

console.log("-----------task4----------------");

// Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

// Examples:

// (4, { min: 0, max: 5 }) ➞ true

// (4, { min: 4, max: 5 }) ➞ true

// (4, { min: 6, max: 10 }) ➞ false

// (5, { min: 5, max: 5 }) ➞ true

function givenRange(num, obj) {
  return console.log(num >= obj.min && num <= obj.max);
}

const givenRange2 = (num, obj) => console.log(num >= obj.min && num <= obj.max);

givenRange(4, { min: 0, max: 5 }); // (4, { min: 0, max: 5 }) ➞ true
givenRange(4, { min: 4, max: 5 }); // (4, { min: 4, max: 5 }) ➞ true
givenRange(4, { min: 6, max: 10 }); // (4, { min: 6, max: 10 }) ➞ false
givenRange(5, { min: 5, max: 5 }); // (5, { min: 5, max: 5 }) ➞ true
console.log("-----------task4--2Var--------------");

givenRange2(4, { min: 0, max: 5 }); // (4, { min: 0, max: 5 }) ➞ true
givenRange2(4, { min: 4, max: 5 }); // (4, { min: 4, max: 5 }) ➞ true
givenRange2(4, { min: 6, max: 10 }); // (4, { min: 6, max: 10 }) ➞ false
givenRange2(5, { min: 5, max: 5 }); // (5, { min: 5, max: 5 }) ➞ true

console.log("-----------task5----------------");

// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// Example:
// [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]
const scrabble = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];

///
const checkScrab = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].score; /// sum = sum + arr[i].score
  }
  return console.log("Summe: ", sum);
};

const checkScrab2 = (arr) => {
  console.log(
    "Summe: ",
    arr.map((el) => el.score).reduce((a, b) => a + b, 0)
  );
};

checkScrab(scrabble);
console.log("-----------task5--var2--------------");
checkScrab2(scrabble);

console.log("-----------task6----------------");

// Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.
// Examples:
// {} ➞ true
// {a: 1} ➞ false

/* const isEmptyObj = (obj) => {
  const arr = Object.keys(obj); // [1,2,3]
  if (arr.length == 0) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}; */

const isEmptyObj = (obj) => console.log(Object.keys(obj).length == 0);

isEmptyObj({}); // {} ➞ true
isEmptyObj({ a: 1 }); // {a: 1} ➞ false
