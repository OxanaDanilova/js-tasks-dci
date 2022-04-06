const b = [45, 56, 65];
console.log(Math.max(...b));

const arr1 = ["Hi", "cool"];
const arr2 = [22, 33];
const totalArray = arr1.concat(arr2, arr2, ["Hier ist fun", "Noo"]);
console.log(totalArray);

////  functions

function sum(x = 0, y = 0) {
  //!!!!!!!!!!!!!!!!      default value        !!!!!!!!!!!!
  ///parameter kricken Werte, wann wir Funktion aufrufen
  return console.log("Sum: ", x + y);
}

sum(5, 4);

function iPrint(str, num, arr) {
  return console.log(
    `I have an arr ${arr} and a string ${str} and a number ${num}`
  );
}

iPrint("Nice", 22, ["no", "yes", "cool"]);

function manyArgs(...args) {
  //// ... - spread - operator - nemmt alle argumente und packt in ein array args
  return console.log(args);
}

manyArgs(5, 7, 8, 9, 10, 22, 5554, 45654, 4);
