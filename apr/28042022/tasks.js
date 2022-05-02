// Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.
// console.log(humanize(1)); //"1st"
// console.log(humanize(20)); //"20th"
// console.log(humanize(302)); //"302nd"

const humanize = (num) => {
  let str = num.toString();
  if (+str[str.length - 1] == 0) {
    str += "th";
  } else if (+str[str.length - 1] == 1) {
    str += "st";
  } else if (+str[str.length - 1] == 2) {
    str += "nd";
  } else if (+str[str.length - 1] == 3) {
    str += "d";
  }
  return str;
};

console.log(humanize(1)); //"1st"
console.log(humanize(20)); //"20th"
console.log(humanize(302)); //"302nd"

// Write a JavaScript function to alphabetize a given string.
// Note : Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
// console.log(alphabetize_string("United States"));
// //"SUadeeinsttt"

const alphabetize_string = (str) => str.split("").sort().join("");
console.log(alphabetize_string("United States"));

// Write a JavaScript function to sort the following array of objects by title value.
var library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];
const sortedLib = library.sort(function (a, b) {
  if (a.title > b.title) {
    return 1;
  }
  if (a.title < b.title) {
    return -1;
  }
  // a должно быть равным b
  return 0;
});

console.log(sortedLib);

//sorted
/*/* {
      author: "Suzanne Collins",
      libraryID: 3245,
      title:"Mockingjay:The Final Book of The Hunger Games"
    }, [object Object] {
      author: "Bill Gates",
      libraryID: 1254,
      title: "The Road Ahead"
    }, [object Object] {
      author: "Steve Jobs",
      libraryID: 4264,
      title: "Walter Isaacson"
    }]*/

//   Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.
// console.log(num_string_range("a", "z", 2));
// // ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

// Zodiac sign, write a function that tells the user his/her Zodiac sign. The user should enter only his birthday like dd-mm-yy
// for farther information check https://en.wikipedia.org/wiki/Zodiac
// Examples:
// zodiac("14-02-2002")  -> Aquarius
// zodiac("10-06-1984")  -> Gemini

data = [
  { signName: "Not real day!", from: "0000" },
  { signName: "Capricorn", from: "0101" },
  { signName: "Aquarius", from: "0120" },
  { signName: "Pisces", from: "0220" },
  { signName: "Aries", from: "0321" },
  { signName: "Taurus", from: "0420" },
  { signName: "Gemini", from: "0521" },
  { signName: "Cancer", from: "0621" },
  { signName: "Leo", from: "0723" },
  { signName: "Virgo", from: "0823" },
  { signName: "Libra", from: "0923" },
  { signName: "Scorpio", from: "1023" },
  { signName: "Sagittarius", from: "1123" },
  { signName: "Capricorn", from: "1222" },
  { signName: "Not real day!", from: "1232" },
];
