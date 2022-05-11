// Miserable Parody of a Calculator
// Create a function that will handle simple math expressions. The input is an expression in the form of a string.
// Examples
// calculator("23+4") ➞ 27
// calculator("45-15") ➞ 30
// calculator("13+2-5*2") ➞ 5
// calculator("49/7*2-3") ➞ 11

const calculator = (str) => {
  /* console.log("stroka", str); */
  let result = 0;
  let operator;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "+" || str[i] === "-" || str[i] === "*" || str[i] === "/") {
      const number = str.substring(0, i);
      if (operator) {
        switch (operator) {
          case "+":
            result += +number;
            operator = str[i];
            break;
          case "-":
            result -= +number;
            operator = str[i];
            break;
          case "*":
            result *= +number;
            operator = str[i];
            break;
          case "/":
            result /= +number;
            operator = str[i];
            break;
          default:
            break;
        }
      } else {
        result = +number;
        operator = str[i];
      }
      str = str.substring(i + 1);
      i = 0;
      /*       console.log("number", number);
      console.log("result", result);
      console.log("operator", operator);
      console.log("str", str); */
    }
  }
  if (operator && str) {
    switch (operator) {
      case "+":
        result += +str;
        break;
      case "-":
        result -= +str;
        break;
      case "*":
        result *= +str;
        break;
      case "/":
        result += +str;
        break;
      default:
        break;
    }
  }
  return console.log(result);
};

// calculator("23+4"); //27
// calculator("45-15"); // ➞ 30
// calculator("13+2-5*2"); // ➞ 5
// calculator("49/7*2-3"); // ➞ 11

const calculator2 = (str) => {
  const numbersArr = str.split(/\D/);
  const operators = str.split("").filter((el) => isNaN(el));
  console.log("numbers", numbersArr);
  console.log("operators", operators);
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "*") {
      numbersArr[i] = numbersArr[i] * numbersArr[i + 1];
      numbersArr.splice(i + 1, 1);
      operators.splice(i, 1);
      i--;
    }
    if (operators[i] === "/") {
      numbersArr[i] = numbersArr[i] / numbersArr[i + 1];
      numbersArr.splice(i + 1, 1);
      operators.splice(i, 1);
      i--;
    }
  }
  const filteredOperators = operators.filter((el) => el === "+" || el === "-");
  for (let i = 0; i < filteredOperators.length; i++) {
    if (filteredOperators[i] === "+") {
      numbersArr[i] = +numbersArr[i] + +numbersArr[i + 1];
      numbersArr.splice(i + 1, 1);
      filteredOperators.splice(i, 1);
      i--;
    }
    if (filteredOperators[i] === "-") {
      numbersArr[i] = numbersArr[i] - numbersArr[i + 1];
      numbersArr.splice(i + 1, 1);
      filteredOperators.splice(i, 1);
      i--;
    }
  }
  return console.log(numbersArr.join(""));
};
//calculator2("3+11*7/5");
//calculator2("23+4"); //27
//calculator2("45-15"); // ➞ 30
//calculator2("13+2-5*2"); // ➞ 5
calculator2("49/7*2-3"); // ➞ 11

calculator3 = (str) => eval(str);
calculator3("49/7*2-3"); // ➞ 11

///////////calculator 4//////////
console.log("--Calculator 4v---------");
const calculator4 = (str) => Function(`return ${str}`)();
console.log(calculator4("49/7*2-3")); // ➞ 11

// Visa oer Master, write a function that checks if the user has entered a valid card data
// Example:
// 412178679036597 -> this is Visa card, I need your money
// 512178679036597 -> this is Master card, I need your money
// 34121786790365 -> this is AmEpx card, I need your money
// 11111 -> this is not correct
// de343ee -> this is not correct
console.log("----------Check Card----------");

const checkCard = (str) => {
  if (str[0] == 4 && str.length === 15 && !isNaN(str)) {
    return `${str} this is Visa card, I need your money`;
  } else if (str[0] == 5 && str.length === 15 && !isNaN(str)) {
    return `${str} this is Master card, I need your money`;
  } else if (str[0] == 3 && str.length === 14 && !isNaN(str)) {
    return `${str} this is AmEpx card, I need your money`;
  } else {
    return `${str} this is not correct`;
  }
};

console.log(checkCard("412178679036597")); //412178679036597 -> this is Visa card, I need your money
console.log(checkCard("512178679036597")); // 512178679036597 -> this is Master card, I need your money
console.log(checkCard("34121786790365")); // 34121786790365 -> this is AmEpx card, I need your money
console.log(checkCard("11111")); // 11111 -> this is not correct
console.log(checkCard("de343ee")); // de343ee -> this is not correct

// Phone number, Write a function that checks if a user give a correct German (landline Berlin 030) phone number
// 030-1247893 -> I'll call now
// 333-332222 -> this is not a phone number
// 030-33 -> This is not complete !
console.log("----------Check phone number----------");
const checkPhoneNumber = (str) => {
  str = str.replaceAll("-", "");
  if (str.substring(0, 3) !== "030" || isNaN(str)) {
    return `${str} this is not a phone number`;
  } else {
    if (str.substring(3).length == 7) {
      return `${str} I'll call you now`;
    } else {
      return `${str} This is not complete!`;
    }
  }
};
console.log(checkPhoneNumber("030-1247-893")); // 030-1247893 -> I'll call now
console.log(checkPhoneNumber("333-332222")); // 333-332222 -> this is not a phone number
console.log(checkPhoneNumber("030-33")); // 030-33 -> This is not complete !
console.log(isNaN("030123"));
