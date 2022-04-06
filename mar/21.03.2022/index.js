console.log(1 == 8);
// ; , - _ ? ! " " ' ' ` ` (Backtick) § $ & / | \ = : * + { } [ ] ' ~ @ #   ^  < > % () .
console.log("Oxana");
console.dir(1 > 5);

let cool = "I'm cool";
let empty;
// undefined - variable ohne Wert
// not defined  - wir haben keine variable defieneiert

console.log(cool);

console.log(empty);

function iDoSomething() {
  //function scope - Bereich
  console.log("I'm a function");
}

iDoSomething();

let pr = null;
console.log(pr + 8);

function printOut(name, age, adress) {
  console.log("I'm name", name, age, "years old", " I live in", adress);
  console.log(`Hi, I'm ${name}. I'm ${age} years old. I live in ${adress}`);
}

printOut("Oxic", 34, "Chemnitz");
