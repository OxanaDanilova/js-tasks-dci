//outer function
function main(num1, num2) {
  function second(n) {
    //inner function
    return n * n;
  }
  return second(num1) + second(num2);
}

console.log(main(2, 3)); // 4+9=13
//console.log(second(5)); // fehler, function second is not defined

let nice = true;
const outerFunction = (x, y) => {
  let big = false;
  console.log(big + " outerFunction");
  const innerFunction = (num) => {
    big = true;
    nice = false;
    let fat = true;
  };
  console.log(nice);
  //return num + 10;
  fat = false;
};

outerFunction();
console.log("fat", fat);

//////////Closure/////////

function fun() {
  let num = 10;
  function iDoSomething() {
    return num;
  }
  return iDoSomething(num);
}

console.log(fun());

/// SIAF
// self-invoking anonymos function
(function () {
  console.log("Hi");
})();

////
const add = (a) => (b) => a + b;
console.log(add(2)(3));

/* const add2 = (a) => {
  return (function (b) {
    return a + b;
  })();
};

console.log(add2(7)(3)); */

const multiplier = (num) => (x) => num * x;

console.log(multiplier(3)(5));

/* Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. The function should be self invoked and should have the following parameters:
The current age of the person // e.g. 40
The retirement age of the person // e.g. 60
The monthly wage the person earns // e.g. 1000
The percentage (as integer) that the person saves each month // e.g. 10%
If the person has already retired then the message 'You're already retired!' should be printed. If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.
Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
Output: $30000 */

const retiereFunc = ((curAge, retAge, wage, percentage) => {
  if (curAge >= retAge) {
    return console.log("You're already retired!");
  } else {
    let remainAge = retAge - curAge;
    let savedMoney = ((wage * percentage) / 100) * remainAge * 12;
    return console.log("$" + savedMoney);
  }
})(40, 65, 2000, 5);

////DE IBAN
// Write a function that checks if a user give a correct German bank account
// Example:
// DE3333 -> this is not a complete bank account please check
// QQ -> this is not a bank account
// DE33nn54637 -> this is a wrong bank account
// DE -> this is correct, I'll take your money :slightly_smiling_face:

const checkKonto = (str) => {
  let result;
  let restStr =
    str.length > 2
      ? str
          .substring(2)
          .split("")
          .filter((el) => !isNaN(el))
      : "";
  if (str.substring(0, 2) !== "DE") {
    result = "this is not a bank account";
  } else if (restStr.length !== str.substring(2).split("").length) {
    //// DE123vm,11
    result = "this is a wrong bank account";
  } else if (
    restStr.length == str.substring(2).split("").length &&
    restStr.length !== 20 //DE3232
  ) {
    result = "this is not a complete bank account please check";
  } else {
    result = "this is correct, I'll take your money 😀️";
  }
  return console.log(result);
};

checkKonto("DE3333"); ///this is not a complete bank account please check
checkKonto("QQ"); //this is not a bank account +
checkKonto("DE33nn54637"); //this is a wrong bank account
checkKonto("DE12345678901234567892"); //this is correct, I'll take your money
checkKonto("DE22222343548839385962");
