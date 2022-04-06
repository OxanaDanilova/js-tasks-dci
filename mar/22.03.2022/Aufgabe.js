let firstName = "Oxana";
let city = "Chemnitz";
let job = "Developer";
console.log(`My name is ${firstName}. I live in ${city} and I am a ${job}.`);

let str = "the quick brown fox";
let firstLet = str[0].toUpperCase();
let restWord = str.substring(1);
console.log(firstLet + restWord);

let longStr = "This is long string";
let ll = longStr.length;
console.log(longStr[ll - 1] + longStr.substring(1, ll) + longStr[0]);

console.log("Hahan I am super hero!".toLocaleLowerCase("en"));
