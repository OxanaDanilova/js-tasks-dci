// // Write a function that converts hours into seconds.

// // Examples
// // howManySeconds(2) ➞ 7200

// // howManySeconds(10) ➞ 36000

// // howManySeconds(24) ➞ 86400

const howManySeconds = (hours) => hours * 3600;
console.log(howManySeconds(2)); // ➞ 7200

console.log(howManySeconds(10)); // ➞ 36000

console.log(howManySeconds(24)); // ➞ 86400

// Write a function that returns the string "something" joined with a space " " and the given argument a.

// Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"

// giveMeSomething("Bob Jane") ➞ "something Bob Jane"

// giveMeSomething("something") ➞ "something something"

const giveMeSomething = (str) => {
  return console.log(`something ${str}`);
};

giveMeSomething("is better than nothing"); // ➞ "something is better than nothing"

giveMeSomething("Bob Jane"); // ➞ "something Bob Jane"

giveMeSomething("something"); // ➞ "something something"

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

const lessThan100 = (num1, num2) => {
  return console.log(num1 + num2 < 100);
};

// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// lessThan100(3, 77) ➞ true

lessThan100(22, 15); // ➞ true
// // 22 + 15 = 37

lessThan100(83, 34); // ➞ false
// // 83 + 34 = 117

lessThan100(3, 77); // ➞ true

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// Examples
// addition(0) ➞ 1

// addition(9) ➞ 10

// addition(-3) ➞ -2

const addition = (num) => console.log(num + 1);
addition(0); // ➞ 1

addition(9); // ➞ 10

addition(-3); // ➞ -2

// Create a function that takes the age in years and returns the age in days.

// Examples
// calcAge(65) ➞ 23725

// calcAge(0) ➞ 0

// calcAge(20) ➞ 7300

const calcAge = (num) => console.log(365 * num);

calcAge(65); //➞ 23725

calcAge(0); // ➞ 0

calcAge(20); // ➞ 7300
