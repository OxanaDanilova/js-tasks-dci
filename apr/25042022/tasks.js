const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
};

// Write the command to add the language "Go" to the end of the languages array.
console.log("------task 1------------");
programming.languages.push("Go");
console.log(programming.languages);

// Using a loop, console.log all of the values in the programming object.
console.log("------task 2------------");
for (const prop in programming) {
  console.log(programming[prop]);
}

// Write a command to add a new key called isFun and a value of true to the programming object.
console.log("------task 3------------");
programming.isFun = true;
console.log(programming);

// Using a loop, iterate through the languages array and console.log all of the languages.
console.log("------task 4------------");
for (const elem of programming.languages) {
  console.log(elem);
}

// Using a loop, console.log all of the keys in the programming object.
console.log("------task 5------------");
for (const prop in programming) {
  console.log(prop);
}

// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.
console.log("------task 6------------");
programming.display = function () {
  if (this["isChallenging"] && this["isRewarding"]) {
    return console.log(
      `Learning the programming languages: "${this.languages}" is rewarding and challenging.`
    );
  }
};

programming.display();

// Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.
console.log("------task 7------------");
console.log(
  "Wir bekommen 'Funktion' word, weil eine Methode eine Funktion ist und wir diese Methode aufrufen sollen, um Ergebniss zu sehen"
);
console.log(programming.display);

////////////////////////////
console.log("---------tasks-------------");

/* 5. Free Shipping. Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50. */
// Examples:
// freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false

const freeShipping = (obj) => {
  const valuesArr = Object.values(obj);
  let sum = valuesArr.reduce((acc, cur) => acc + cur, 0); // elem1+elem2+elem3+elem4  0, elem1 0+elem1, elem1, elem2, a
  return console.log(sum > 50);
};

freeShipping({ Sponge: 3.5, Soap: 5.99 });
freeShipping({ "Surround Sound Equipment": 499.99 }); // ➞ true
freeShipping({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 }); // ➞ false

console.log("--------------------task 1------------");
/* MakePairs - Write a method that returns a deep array like [[key, value]]
Task description: Write a method that returns a deep array like [[key, value]]
Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]] */
const myObj = { a: 1, b: 2 };
function makePairs(obj) {
  console.log(Object.entries(obj));
}
makePairs(myObj);

//////2 Variant ////
/* console.log("------------Ivans Lösing--------------");
const arr = [];

for (const ivan in obj) {
  arr.push([`${ivan}:${obj[ivan]}`]);
}
console.log(arr);

obj.pairs(); */

console.log("--------------task 2-Object Person-----------");
// 1. Object Person. Create an object named person. Loop through the object and print both the property and value of the object.
const myPerson = {
  fisrtName: "Oxana",
  lastName: "Danilova",
  add: "Chemnitz",
};
for (const key in myPerson) {
  console.log(`${key} : ${myPerson[key]}`);
}

console.log("--------------task 2--Get Values----------");

//2. Get Values. Create a function that returns an array of all values of an object's properties.

/* Examples:
getObjectValues({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
})
Expected output:
["tea", "coffee", "milk"]  */

const getObjectValues = (obj) => console.log(Object.values(obj));

getObjectValues({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
});

// Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.
// Example
let personSmith = {
  firstName: "Michael",
  lastName: "Smith",
  job: "driver",
  age: 20,
  city: "Paris",
};

personSmith.print = function () {
  console.log(
    `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}`
  );
};

personSmith.print();

// Example of Expected Output "Michael Smith is a 20 year old driver in Paris".

// Convert keys and values into an array. Create a function that converts an object into an array of keys and values.
// Examples:
// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// })
// Expected output:
// [["A", 1], ["B", 2], ["C", 3]]

console.log("------------------------------");
const objectToArray = (obj) => console.log(Object.entries(obj));
objectToArray({
  A: 1,
  B: 2,
  C: 3,
});

console.log("------------------------------");

// List Properties. Create a function that returns an array of properties of a javascript object.
// Example
let student = {
  name: "Mike",
  class: "4A",
  course: "English",
};
// Expected output:
// ["name", "class", "course"]

const keysToArray = (obj) => console.log(Object.keys(obj));
keysToArray(student);
