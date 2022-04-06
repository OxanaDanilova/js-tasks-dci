console.log(isNaN("202"));
console.log(Math.ceil(22.0));
console.log(Math.round(22.41));

console.log("max", Math.max(2, "1dfsdf", 6, 5, "33"));

console.log(parseInt(5));
// schneidet
console.log((22.2722222).toFixed(3)); //22.272

let num = "1.2345e+4";
console.log(parseFloat(num)); // 12345 // für Kommazahlen

/// Schleife  -- Loops
for (let i = 0; i <= 10; i++) {
  console.log(`${i} * 2 = ${i * 2}`);
}
/// 100 200 300 400 500 600 700 800 900 1000
console.log("/// 100 200 300 400 500 600 700 800 900 1000");
str = "";
for (let i = 100; i <= 1000; i += 100) {
  str += ` ${i}`;
}
console.log(str);
// 1 1 1 2 2 2 3 3 3 4 4 4
let str2 = "";
console.log("// 1 1 1 2 2 2 3 3 3 4 4 4");
for (let i = 1; i <= 4; i++) {
  str2 += ` ${i} ${i} ${i}`;
}
console.log(str2);
// 0 2 4 6 8 10
console.log("// 0 2 4 6 8 10");
let str3 = "";
for (let i = 0; i <= 10; i += 2) {
  str3 += ` ${i}`;
}
console.log(str3);

// 3 6 9 12 15
console.log("// 3 6 9 12 15");
let str4 = "";
for (let i = 3; i <= 15; i += 3) {
  str4 += ` ${i}`;
}

console.log(str4);

function display() {
  console.log("You are cool!");
}

display();

for (let i = 0; i <= 10; i++) {
  console.log("Nice");
  for (let j = 0; j <= 10; j++) {
    console.log("Something");
  }
}

// 0 1 2 3 0 1 2 3 0 1 2 3

let myStr = "";
for (let i = 1; i <= 3; i++) {
  for (let j = 0; j <= 3; j++) {
    myStr += ` ${j}`;
  }
}
console.log(myStr);

// 1 1 1 2 2 2 3 3 3 4 4 4 5 5 5

let myStr1 = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 0; j <= 2; j++) {
    myStr1 += ` ${i}`;
  }
}
console.log(myStr1);

/* 
+
++
+++
++++ */
let strPlus = "";
for (let i = 1; i <= 4; i++) {
  strPlus += "+";
  console.log(strPlus);
}

/* 

****
 ***
 **
 * 
 
  */

for (let i = 4; i >= 1; i--) {
  let stern = "";
  for (let j = 1; j <= i; j++) {
    stern += "*";
  }
  console.log(stern);
}

///Opt 2
console.log("Opt2 ");
for (let i = 4; i >= 1; i--) {
  console.log("*".repeat(i));
}

let newStr = "****";
for (let i = 0; i <= 3; i++) {
  console.log(newStr.substring(i));
}

// Addition. Write a program to add up the numbers 1 to 20.
///sum = 1+2+3+4+5+6+7+8+9+10+11+12+13+14+15+16+17+18+19+20
let sum = 0;
for (let i = 1; i <= 20; i++) {
  sum += i;
}
console.log(`Summe: ${sum}`);

// There are i bottles of beer on the wall. Write a program that will output, "There is 1 bottle of beer on the wall." "There are 2 bottles of beer on the wall" up until there are five bottles.

console.log(`There is 1 bottle of beer on the wall.`);
for (let i = 2; i < 5; i++) {
  console.log(`There are ${i} bottles of beer on the wall.`);
}
