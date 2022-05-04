// Create a function that returns the given argument, but by using an arrow function.

// An arrow function is constructed like so:

// arrowFunc=(/*parameters*/)=>//code here
// Examples
// arrowFunc(3) ➞ 3

// arrowFunc("3") ➞ "3"

// arrowFunc(true) ➞ true
console.log();
console.log("----------------1--------------------");
console.log();

const arrowFunc = (parametr) => parametr;
console.log(arrowFunc(3)); // ➞ 3

console.log(arrowFunc("3")); // ➞ "3"

console.log(arrowFunc(true)); // ➞ true
console.log();
console.log("----------------2--------------------");
console.log();

// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

// Create a function which calculates the amount of fuel it needs, given the distance.

// Examples
// calculateFuel(15) ➞ 150

// calculateFuel(23.5) ➞ 235

// calculateFuel(3) ➞ 100
const calculateFuel = (num) => (num < 10 ? 100 : num * 10);
console.log(calculateFuel(15)); // 150
console.log(calculateFuel(23.5)); // 235
console.log(calculateFuel(3)); // 100

console.log();
console.log("------------------3------------------");
console.log();

// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

// Examples
// points(1, 1) ➞ 5

// points(7, 5) ➞ 29

// points(38, 8) ➞ 100

const points = (x, y) => x * 2 + y * 3;
console.log(points(1, 1)); // ➞ 5

console.log(points(7, 5)); // ➞ 29

console.log(points(38, 8)); // ➞ 100

console.log();
console.log("------------------4------------------");
console.log();

// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

// Examples
// num_of_digits(1000) ➞ 4

// num_of_digits(12) ➞ 2

// num_of_digits(1305981031) ➞ 10

// num_of_digits(0) ➞ 1
// Notes
// Try to solve this challenge without using strings!

const numOfDigits = (num) => String(num).length;
console.log(numOfDigits(1000)); //4
console.log(numOfDigits(12)); //2
console.log(numOfDigits(1305981031)); //10
console.log(numOfDigits(0)); //1

console.log("------------Lösung 2-----------");

const numOfDigits2 = (num) => {
  if (num === 0) {
    return 1;
  } else {
    const arr = [];
    while (Math.floor(num / 10) > 0) {
      /// 456/10=45.6 => arr [6]// 45.6/10=4.5 => 5=> arr [5 6]
      arr.unshift(Math.floor(num / 10));
      num = num / 10;
    }
    if (Math.floor(num)) {
      arr.unshift(Math.floor(num));
    }
    return arr.length;
  }
};

console.log(numOfDigits2(1000)); // 4
console.log(numOfDigits2(90)); // 2
console.log(numOfDigits2(1305981031)); //10
console.log(numOfDigits2(0)); //1

// A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not.

// Examples
// isRepdigit(66) ➞ true

// isRepdigit(0) ➞ true

// isRepdigit(-11) ➞ false

const isRepdigit = (num) => {
  if (num < 0) {
    return false;
  } else {
    const arr = num.toString().split(""); ///[1 2 3] /// 1 filter [1]
    const filteredArr = arr.filter((el) => el === arr[0]);
    return console.log(arr.length == filteredArr.length);
  }
};
///[ 1 2 5 8 1 5 66 4 1 1 1 1 1 1 ] //// [ 1 1 1 1 1 1]
isRepdigit(665);
isRepdigit(5555);
isRepdigit(0);
