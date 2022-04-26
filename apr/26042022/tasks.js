console.log("---------------task1--------------");
// The Recipe Card
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

const recipeCard = {
  title: "Plow",
  serves: 4,
  ingredients: ["Fleisch", "Karotte", "Zwiebbel", "Reis"],
  print: function () {
    for (key in this) {
      if (key !== "print") {
        if (key === "ingredients") {
          console.log(`${key}:`);
          for (const elem of this[key]) {
            console.log(elem);
          }
        } else {
          console.log(`${key}:`);
          console.log(this[key]);
        }
      }
    }
  },
};

recipeCard.print();

console.log("---------------task2--------------");

// The Reading List
// Keep track of which books you read and which books you want to read!
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

const books = [
  {
    title: "Anzhelika",
    author: "Ann and Serzh Golon",
    alreadyRead: true,
  },
  {
    title: "Anna Karenina",
    author: "Lev Tolstoi",
    alreadyRead: true,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    alreadyRead: false,
  },
];

const booksCheck = (arr) => {
  for (const elem of arr) {
    if (elem.alreadyRead) {
      console.log(`You already read "${elem.title}" by ${elem.author}.`);
    } else {
      console.log(`You still need to read "${elem.title}" by ${elem.author}.`);
    }
  }
};

booksCheck(books);

console.log("---------------task3--------------");

// Get Names. Create a function that takes an array of objects containing students' names e.g. {name: "John"}, and returns an array of just student names.
// Example:
// getNames([{ name: "Jane" },
//        { name: "Jack" },
//        { name: "John" }
//    ])
// ➞ ["Jane", "Jack", "John"]

const getNames = (arr) => arr.map((el) => el.name);

console.log(getNames([{ name: "Jane" }, { name: "Jack" }, { name: "John" }]));

//////////////scrubble////////

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

const check2 = (arr) => arr.reduce((acc, cur) => acc + cur.score, 0);
console.log(check2(scrabble));
