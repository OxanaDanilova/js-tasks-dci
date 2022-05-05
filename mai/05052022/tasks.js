console.log("---------task 1-----------");
console.log();
// ES6: Destructuring Arrays I
// You can assign variables from arrays like this:

// const arr = [1, 2, 3, 4, 5, 6]
// let a = arr[0]
// let b = arr[1]
let a, b;
[a, b] = [1, 2];

console.log(a); // outputs 1
console.log(b); // outputs 2

console.log();
console.log("---------task 2-----------");
console.log();
// Create a function that takes an array of numbers or letters and returns a string.

// Examples
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

const arrayToString = (arr) => arr.join("");
console.log(arrayToString([1, 2, 3, 4, 5, 6])); // ➞ "123456"
console.log(arrayToString(["a", "b", "c", "d", "e", "f"])); // ➞ "abcdef"
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"])); // ➞ "123asdAAAA"

console.log();
console.log("-----------3----------");
console.log();

// Create a function that takes an array of numbers and returns the second largest number.

const secondLargest = (arr) => {
  let max = Math.max(...arr);
  let indexMax = arr.indexOf(max);
  arr.splice(indexMax, 1);
  return console.log(Math.max(...arr));
};

secondLargest([10, 40, 30, 20, 50]); // ➞ 40
secondLargest([25, 143, 89, 13, 105]); // ➞ 105
secondLargest([54, 23, 11, 17, 10]); // ➞ 23

console.log();
console.log("-----------4----------");
console.log();

// The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?
function clone(arr) {
  arr.push([...arr]);
  return arr;
}
console.log(clone([1, 1])); // ➞ [1, 1, [1, 1]]

console.log(clone([1, 2, 3])); // ➞ [1, 2, 3, [1, 2, 3]]

console.log(clone(["x", "y"])); // ➞ ["x", "y", ["x", "y"]]

//////////////////////          2      //////////
console.log();
console.log("------------");
console.log();

const clone1 = (arr) => Array.of(...arr, arr);

console.log(clone1([1, 1])); // ➞ [1, 1, [1, 1]]

console.log(clone1([1, 2, 3])); // ➞ [1, 2, 3, [1, 2, 3]]

console.log(clone1(["x", "y"])); // ➞ ["x", "y", ["x", "y"]]

//////////////////////          3      //////////
console.log();
console.log("------------");
console.log();

const clone2 = (arr) => arr.concat([arr]);

console.log(clone2([1, 1])); // ➞ [1, 1, [1, 1]]

console.log(clone2([1, 2, 3])); // ➞ [1, 2, 3, [1, 2, 3]]

console.log(clone2(["x", "y"])); // ➞ ["x", "y", ["x", "y"]]
