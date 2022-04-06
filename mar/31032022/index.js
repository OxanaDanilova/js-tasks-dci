let str = "I love JavaScript";
console.log("charAt: ", str.charAt(8));
console.log("charCodeAt", str.charCodeAt(8));
// UTF -16

console.log(Math.ceil(22.454545454));

let age = 30;
switch (age) {
  case 2:
    console.log("You are baby");
    break;
  case 14:
    console.log("You are teenger");
    break;
  case 21:
    console.log("You are young adult");
    break;
  case 30:
    console.log("You are adult");
    break;
  default:
    console.log("Sorry, please write yout age");
}

// 1- Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
//     Expected Output : 'The Quick Brown Fox '

const capitalize = (str) => {
  const arr = str.toLowerCase().split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
  }
  return console.log(arr.join(" "));
};

capitalize("the quick brown fox");

// 2- Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Longest_Country_Name(
//   ["Australia",
//   "Germany",
//   "United States of America"]
//   )
// Expected output : "United States of America"
const longestName = (arr) => {
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    longest = longest.length < arr[i].length ? arr[i] : longest;
  }
  return console.log(longest);
};

longestName(["Australia", "Germany", "United States of America"]);

//////////// 2.Variant/////////////
const longestName2 = (arr) => {
  let longest = "";
  arr.forEach((item) => {
    longest = longest.length < item.length ? item : longest;
  });
  return console.log(longest);
};

longestName2(["Australia", "Germany", "United States of America"]);

// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

const volwels = (str) => {
  const vol = "aoieuAEOUI";
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (vol.includes(str[i])) {
      counter++;
    }
  }
  return console.log("Vowels: ", counter);
};

volwels("this is super fun");
volwels("this is really cool");
volwels("HADI");
