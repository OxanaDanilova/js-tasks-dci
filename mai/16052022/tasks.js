// 3. Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
// Example
let first = { firstName: "John", lastName: "Vooo" };
let last = { lastName: "Smith" };

// Expected output:
// {firstName: "John", lastName: "Smith"}
const merge = ({ firstName }, { lastName }) => {
  return { firstName, lastName };
};

console.log(merge(first, last));

console.log("---------switch keys and values-------------");
console.log();

// 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.
// Example:
let person = {
  name: "John",
  job: "teacher",
};
// Expected Output:
// {"John": name, "teacher": job}
const switchFunc = (obj) => {
  const values = Object.values(obj);
  const keys = Object.keys(obj);
  const newObj = {};
  for (let i = 0; i < values.length; i++) {
    newObj[values[i]] = keys[i];
  }
  return newObj;
};

console.log("-------2.Lösung----------");
console.log();

console.log(switchFunc(person));

const switchFunc2 = (obj) => {
  const newObj = {};
  for (const prop in obj) {
    newObj[obj[prop]] = prop;
  }
  return newObj;
};

console.log(switchFunc2(person));

// 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
// Examples:
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]
const totalArr = (obj) => {
  return [Object.keys(obj), Object.values(obj)];
};
console.log(totalArr({ a: 1, b: 2, c: 3 }));
console.log(totalArr({ key: true }));

// Binary converter, convert any given number to binary.
// Bounce : your code should be using one line only
// Example :
// 20 -> 10100
// 10-> 1010
// 44-> 101100

const binaryFunc = (num) => num.toString(2);

console.log(binaryFunc(20));
console.log(binaryFunc(10));
console.log(binaryFunc(44));

// A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.
//isPandigital(0123456789) -> true
const isPandigital = (num) => {
  let panDig = true;
  for (let i = 0; i <= 9; i++) {
    if (!num.toString().includes(i)) {
      panDig = false;
    }
  }
  return panDig;
};

console.log(isPandigital(1234567890)); // true
console.log(isPandigital(234567890)); // false
console.log(isPandigital(2)); // false
console.log(isPandigital(1234567890567890567890)); // true
