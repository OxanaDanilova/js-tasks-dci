// Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.
// Example:
// countLetters("tree") ➞ {t: 1, r: 1, e: 2}

const countLetters = (str) => {
  const resultObj = {};
  for (let i = 0; i < str.length; i++) {
    let key = str[i];
    if (resultObj.hasOwnProperty(key)) {
      resultObj[key] += 1;
    } else {
      resultObj[key] = 1;
    }
  }
  return console.log(resultObj);
};

countLetters("tree");

const countLetters2 = (str) => {
  const resultObj = {};
  for (let i = 0; i < str.length; i++) {
    let key = str[i];
    if (!resultObj.hasOwnProperty(key)) {
      const counter = str.split("").filter((e) => e == key).length;
      resultObj[key] = counter;
    }
  }
  return console.log(resultObj);
};

countLetters2("tree");

/* const countLetters3 = (str) => {
  const resultObj = {};
  console.log(str.match("t"));
};

countLetters3("tree"); */

/////////////////////////////////////////////////////////////

// Zodiac sign, write a function that tells the user his/her Zodiac sign. The user should enter only his birthday like dd-mm-yy
// for farther information check https://en.wikipedia.org/wiki/Zodiac
// Examples:
// zodiac("14-02-2002")  -> Aquarius
// zodiac("10-06-1984")  -> Gemini
