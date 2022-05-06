function factorial(x) {
  if (x == 1) return 1;
  return x * factorial(x - 1);
}

//console.log(factorial(6));

const sumOfNum = (x) => {
  if (x < 1) {
    console.log("Only positive numbers please");
  } else {
    if (x == 1) return 1;
    return x + sumOfNum(x - 1);
  }
};
console.log(sumOfNum(6)); // 1 + 2 + 3 + 4 + 5 + 6
console.log(sumOfNum(10)); // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55

// Alle Kombinationen/Permutationen der übergebenen Buchstaben
// Es sollen alle möglichen Kombinationen der eingegebenen Buchstaben ausgegeben werden.
// etwa:
//   permutate("abc") =>
//   abc
//   acb
//   bac
//   bca
//   cab
//   cba

const resultArr = [];
const permutate = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.length == 1) {
      return str;
    } else {
      let letter = str[i];
      console.log("current letter", letter);
      let index = str.indexOf(letter);
      console.log("current index", index);
      let restStr =
        str.slice(0, str.indexOf(letter)) +
        str.slice(str.indexOf(letter) + 1, str.length);
      console.log("current rest string", restStr);
      console.log("--------------nächste runde---------------");
      let rest = letter + permutate(restStr);
      resultArr.push(rest);
    }
  }
  return console.log(resultArr);
};

permutate("abc");
