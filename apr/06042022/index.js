//01.
// Erstelle ein Program, das ein gegebenes Array kopiert und zurückgibt. Drucke das Ergebnis in die Konsole.
//Beispiele:
//copyArray([12, 66, 10]) => [12, 66, 10]
//copyArray([5, -20, "Salem", true]) => [5, -20, "Salem", true]
//copyArray([]) => []

const copyArray = (arr) => console.log(arr);
copyArray([12, 66, 10]); // => [12, 66, 10]
copyArray([5, -20, "Salem", true]); // => [5, -20, "Salem", true]
copyArray([]); // => []

//02.
//Schreibe ein Programm, um ein String umzukehren.
//Beispiele:
//reverseString("Hallo Welt") => tleW ollaH
//reverseString("Bonjour le monde") => ednom el ruojnoB

const reverseString = (str) => {
  return console.log(str.split("").reverse().join(""));
};

reverseString("Hallo Welt"); // => tleW ollaH
reverseString("Bonjour le monde"); // => ednom el ruojnoB

//03.
//Missing Number. Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

// Examples:

// missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

const missingNums = (arr) => {
  const tenArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < arr.length; i++) {
    if (tenArr.includes(arr[i])) {
      let index = tenArr.indexOf(arr[i]);
      tenArr.splice(index, 1);
    }
  }
  return console.log(`Missed numbers: ${tenArr.join(" ")}`);
};

missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]); // ➞ 5
missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]); // ➞ 10
missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]); // ➞ 7

//04.
//Alphabetical Order. Create a function to sort a string into alphabetical order. NB: assume numbers, symbols and punctuation are not included in the string.
// i.e. alphaOrder("webdev") ➞ "bdeevw"
const alphaOrder = (str) => {
  return console.log(str.split("").sort().join(""));
};

alphaOrder("webdev"); // ➞ "bdeevw"
