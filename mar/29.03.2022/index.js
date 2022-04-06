//Array = eine variable mit verschidene Werte
const names = ["Ali", "Nancy", "Ali", "Olga"];
console.log(names);
console.log(names[1], names[3]);
console.log(names.length);
console.log(names[0][0]);
console.log(names[1][2]); //
console.log(names[2].substring(2, 4)); ///Steel => ee

names[1] = "Carlo";
console.log(names);
//////////////Push bringt Werte am Ende Array///////////////
const arr = [];
arr[0] = 22;
arr[1] = 12;
arr.push(22);
arr[7] = "aha";
arr.push("ggg");
console.log("arr", arr);
console.log("empty", arr[3]);
console.table(arr);
////////////     indexOf()   /////////////
console.log("indexOf", names.indexOf("Ali"));
console.log("lastIndexOf", names.lastIndexOf("Ali"));
////////falls gibt es keine Werte in Array, indexOf gibt uns -1 zurück

////    unshift()    ///////
arr.unshift("2343"); /// bringt Werte am Anfang
arr.unshift("Cool");
arr.unshift("Hi!");
console.table(arr);

//////// pop() - löscht den Wert mit letzten Index  in Array
arr.pop();
console.table(arr);

//////// shift() - löscht den Wert mit ersten Index in Array
arr.shift();
console.table(arr);

///////////////////      reverse()    ////////////////////////////////

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.reverse();
console.table(numbers);

////////////////      Aufgaben   /////////////////////////
// [Maria, Mike, Paul, Doven] ➞ expected output: "Hello Maria! Hello Mike! Hello Paul! Hello Doven!"
const namesArr = ["Maria", "Mike", "Paul", "Doven"];
let str = "";
for (let i = 0; i < namesArr.length; i++) {
  str += `Hello ${namesArr[i]}! `;
}
console.log(str);

//Bonus [Susan, Rezvane, Hadi] ➞ expected bonus output: "Susan is at index 0 of my friends and family array, Rezvane is at index 1 of my friends and family array, Hadi is at index 2 of my friends and family array".
const namesArr1 = ["Susan", "Rezvane", "Hadi"];
let str1 = "";
for (let i = 0; i < namesArr1.length; i++) {
  str1 += `${namesArr1[i]} is at index ${i} of my friends and family array${
    i == namesArr1.length - 1 ? "." : ", "
  }`;
}
console.log(str1);

///City Names. Create an array of city names. Loop through the array and add the city names to a string. Examples:
//[Berlin, Paris, Prague, Rome] ➞ expected output: "Berlin, Paris, Prague, Rome"

const city = ["Berlin", "Paris", "Prague", "Rome"];
let text = "";
for (let i = 0; i < city.length; i++) {
  text += `${city[i]}${i == city.length - 1 ? "." : ", "}`;
}

console.log(text);

///These exercises are designed for practicing arrays and array methods. You may need to look up some methods to complete these tasks. Print each result to the console.
//Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const second = euroCities[1];
//Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";
//Print the length of the array "euroCities".
console.log(`Length: ${euroCities.length}`);
//Remove the last item of the array "euroCities".
euroCities.pop();
//Use an array method to add "Budapest" to the euroCities array.
euroCities.push("Budapest");
console.log(euroCities);
//Bonus: Remove the second and third items from the euroCities array.
euroCities.splice(1, 2); /// splice , startIndex, count
console.log(euroCities);
//Create another variable named asianCities and assign an array of at least 5 cities to the variable.
const asianCities = ["Pekin", "Tashkent", "Tokio", "Almaty", "Dubai"];
console.log("asianCities", asianCities);

/////////////////////////////////////
//Capitalize. Create a program that capitalizes the first letter of each element in an array of names. Examples:
//["matt", "sara", "lara"] ➞ ["Matt", "Sara", "Lara"]
//["samuel", "MARIA", "luke", "mary"] ➞ ["Samuel", "Maria", "Luke", "Mary"]
//["Cynthia", "Karen", "Jane", "Carrie"] ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

function capitaliz(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase();
  }
  return arr;
}

console.log(capitaliz(["matt", "sara", "lara"]));
console.log(capitaliz(["samuel", "MARIA", "luke", "mary"]));
console.log(capitaliz(["Cynthia", "Karen", "Jane", "Carrie"]));

//////////////////////////
/* Repeat it. Create a program with two variables: "item" and "times". Create a program that repeats the "item" as many times as specified by "times". The first variable ("item") is the item that needs repeating while the second argument ("times") is the number of times the item is to be repeated. Print the result in an array. Examples:
("example", 3) ➞ ["example", "example", "example"] */

function repeat(item, times) {
  const arr = [];
  for (let i = 0; i < times; i++) {
    arr.push(item);
  }
  return console.log(arr);
}

repeat("Oxana", 8);

const repFunc = (item, times) => {
  const arr = Array(times);
  arr.fill(item);
  return console.log(arr);
};

repFunc("Cat", 5);

///////////////////////////
// Word Ranking. Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.
// The returned string should only contain alphabetic characters (a-z).
// Preserve case in the returned string (see 4th example above).
// Examples:
// wordRank("The quick brown fox.") ➞ "brown"
// wordRank("Nancy is very pretty.") ➞ "pretty"
// wordRank("Check back tomorrow, man!") ➞ "tomorrow"
// wordRank("Today is Wednesday.") ➞ "Wednesday"

//split  -
function wordRank(str) {
  const arr = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < arr.length; i++) {
    longestWord = longestWord.length <= arr[i].length ? arr[i] : longestWord;
  }
  console.log(arr);

  return console.log("longestWord", longestWord);
}

wordRank("The quick brown fox.");
wordRank("Nancy is very pretty.");
wordRank("Check back tomorrow, man!");
wordRank("Today is Wednesday.");

// The Greater Numbers. Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.
// i.e.
// findGreatest([3, 4, 5], 4) ➞ 5
// findGreatest([10, 20, 30], 12) ➞ 20, 30
// findGreatest([0, 10, 3], 4) ➞ 10

function findGreatest(arr, number) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > number) {
      result.push(arr[i]);
    }
  }
  return console.log(result.join());
}

findGreatest([3, 4, 5], 4);
findGreatest([10, 20, 30], 12);
findGreatest([0, 10, 3], 4);

// Dictionary. Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
// Notes:
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.
// Examples:
// dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []

function dictionary(str, arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (str == arr[i].substring(0, str.length)) {
      result.push(arr[i]);
    }
  }
  return console.log(result);
}

dictionary("bu", ["button", "breakfast", "border", "tabu"]);
dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]);
dictionary("beau", ["pastry", "delicious", "name", "boring"]);
