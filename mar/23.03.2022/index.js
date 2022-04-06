//Ternary operator
///Frage ? Ausdrück 1 : Ausdrück 2

10 >= 100 ? console.log("Nice") : console.log("Nope");
99 % 2 == 0 ? console.log("even") : console.log("odd"); // Rest von gleich übrig bleibt

//DRY - Don't repeat yourself
console.log(1 == 0 ? "cool" : "Nooo");

let isLogged = true;
console.log(isLogged ? "Log out" : "Log in");
//// doppel klick + Ctrl+D
function oddOrEven(zahl) {
  console.log(zahl % 2 == 0 ? `${zahl} is even` : `${zahl} is odd`);
}

oddOrEven(22);
oddOrEven(0.55523);

let isDog = true;
console.log(isDog ? "pat, pat" : "find me a dog pat!");

let speedCheck = 50;
let mySpeed = 30;
console.log(mySpeed >= speedCheck ? "too fast" : "Oma");

//4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".
let isStudent = true;
console.log(isStudent ? "Ticket costs €5,00" : "Ticket costs €12,00");

//3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".

let age = 34;
console.log(age < 16 ? "serve butter beer" : "serve beer");

/// if else

let bool = function () {};
/// Alle Zahlen außer 0 definiert als true !0 == true
//// 0 ==false
//// "" == false
//// "string" == true
/// undefined == false
/// null == false
/// Object == true

if (bool) {
  console.log("cool");
  console.log("This is amazing!");
} else {
  console.log("Nooo");
  console.log("I'm sorry");
}

//Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
function checkRange(x, y) {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
    console.log(true);
  }
}

checkRange(77, 0);

/////// &&
/// true && true == true (!!!Beide true!!!!)
/// true && false == false
/// false && true == false
/// false && false  == false

////// ||
/// true || true == true
/// true || false == true
/// false || true == true
/// false || false  == false  (!!!!Beide false!!!)

console.log(7 && 60);

//Check if three given integer values are in the range 50 to 99 (inclusive). Return true if one or more of them are in the said range.

function checkRangeZ(x, y, z) {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)) {
    console.log(true);
  }
}

checkRangeZ(77, 0, 55);

//4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

function pyFunc(str) {
  if (str.substring(0, 2) == "Py") {
    console.log(str);
  } else {
    console.log("Py" + str);
  }
}

pyFunc("hund");
pyFunc("Pynd");

//9. Calculate the sum of the two given integers. If the two values are same, then return triple their sum.

function myCalc(x, y) {
  if (x == y) {
    console.log((x + y) * 3);
  } else {
    console.log(x + y);
  }
}

myCalc(5, 9);

function bigger(x) {
  console.log(x >= 55);
}

bigger(55);
bigger(4);
bigger(2);
bigger(51);
bigger(2.2);

//BONUS CHALLENGE: Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to or more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".

function checkAge(firstName, age) {
  if (age < 13) {
    console.log(`${firstName} is a child`);
  }
  if (age >= 13 && age < 20) {
    console.log(`${firstName} is a teenager`);
  }
  if (age >= 20 && age < 30) {
    console.log(`${firstName} is a young adult`);
  }
  if (age >= 30) {
    console.log(`${firstName} is a adult`);
  }
}

checkAge("Lena", 5);
checkAge("Lena", 15);
checkAge("Lena", 25);
checkAge("Lena", 85);

function checkAgeSec(firstName, age) {
  if (age < 13) {
    console.log(`${firstName} is a child`);
  } else if (age >= 13 && age < 20) {
    console.log(`${firstName} is a teenager`);
  } else if (age >= 20 && age < 30) {
    console.log(`${firstName} is a young adult`);
  } else {
    console.log(`${firstName} is a adult`);
  }
}

checkAgeSec("Lena", 5);
checkAgeSec("Lena", 15);
