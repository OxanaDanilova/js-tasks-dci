/* # Map, Filter, Reduce

#### 1. Get total orders
* Return the total amount of orders. 

```javascript */
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

console.log(orders.reduce((acc, el) => acc + el.amount, 0));

/*



#### 2. Increment by 1
```javascript 
``` 
* Create a function that increments each element in the `arrayOfNumbers` by 1. Return the a new array of modified elements. */
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

const increment = (arr) => arr.map((el) => el + 1);

console.log(increment(arrayOfNumbers));

console.log("----task 3--------------");

/*


#### 3. Filter Evens
* Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

* Examples:
```javascript */

const filterEvens = (arr) => arr.filter((el) => el % 2 == 0);

console.log(filterEvens([1, 2, 3, 11, 12, 13])); //returns [2,12]
console.log(filterEvens([22, 2, 31, 110, 6, 13])); //returns [22,2,110,6]

/*
```

#### 4. Filter Friends
* Given an array, create a function which filters array based on a search query.

* Examples

```javascript

```

*/

const filterItems = (arr, query) => arr.filter((el) => el.includes(query));
console.log(filterItems);
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
console.log(filterItems(friends, "ka")); // ["Rika"];
console.log(filterItems(friends, "e")); // ["Jenna", "Bleda", "Oliver"];

/*

#### 5. Sum Up
* Write a function called sum that uses the reduce method to sum up an array of numbers. 

* Examples:
```javascript */
const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);
console.log(sum([1, 2, 3, 4, 5])); //returns 15
console.log(sum([6, 7, 7])); //returns 20
/*
```

#### 6. Square Root
* Given an array of numbers, find the square root of each element in the array. */
const numbers = [4, 9, 25, 16, 100];
const square = (arr) => arr.map((el) => Math.sqrt(el));
console.log(square(numbers));

/////////////////////////////////////////

/*1.  * Generates an array of odd numbers of the specified length
*
* @param {number} len
* @return {array}
*
* @example
*    1 => [ 1 ]
*    2 => [ 1, 3 ]
*    5 => [ 1, 3, 5, 7, 9 ]

*/

const generate = (num) => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(i * 2 + 1);
  }
  return arr;
};

console.log(generate(5));

const generate2 = (num) =>
  Array(num)
    .fill(1)
    .map((el, i) => i * 2 + 1);

console.log(generate2(15));
