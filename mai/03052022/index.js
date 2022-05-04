// * Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// * Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// * Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
const books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    alreadyRead: false,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    alreadyRead: false,
  },
  {
    title: "Anzhelika",
    author: "Ann and Serzh Gollon",
    alreadyRead: true,
  },
];

for (const element of books) {
  console.log(
    `You ${element.alreadyRead ? "already" : "still need to"} read ${
      element.title
    } by ${element.author}.`
  );
}

let fruits = new Array(2);
console.log(fruits);
console.log(
  Object.getOwnPropertyNames(Array.prototype).filter(
    (prop) => typeof Array.prototype[prop] == "function"
  )
);
