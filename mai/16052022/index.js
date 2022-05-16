/// Closure
// Vater und Baby Funktion, Baby-Funktion kann nur bei Vater Funktion aufgeruft werden.
///Sequirity
//// Inner Funktion ist geschlosen.
/// 2 returns
function outerFunction(num) {
  function innerFunction() {
    return num * 10;
  }
  return innerFunction();
}

console.log(outerFunction(5));

/* const add2 = (a) => {
  return (function (b) {
    return a + b;
  })();
};

console.log(add2(7)(3)); */

////Destructuring
const printFunction = ({ name, age }) => {
  name = "Artur";
  console.log(name, age);
};
const obj = { name: "Steel", age: 22, height: 185 };
printFunction(obj);
console.log(obj);

/////////
///Self-invoking annonymos function - SIAF
//Eine Funktion hat keine name und ruft sich selbe auf
(function (num1, num2) {
  console.log("SIAF", num1 + num2);
})(8, 1);

///Constructor
function AnimalKrank(name, age, sickTyp) {
  this.name = name;
  this.age = age;
  this.sickTyp = sickTyp;
  this.display = function () {
    return console.log(this.name);
  };
}

const dog = new AnimalKrank("Max", 3, "Kopf Schmerzen");
dog.display();
console.log(dog);

//// Class
class Laptop {
  constructor(model, price) {
    this.model = model;
    this.price = price;
    this.display = function (productName) {
      console.log(
        `This ${productName} is ${this.model}, priced at ${this.price}`
      );
    };
  }
  priceUp() {
    return (this.price *= 5);
  }
}

const macBookPro = new Laptop("MacBook Pro 14in", 2500);
macBookPro.display("Laptop");
macBookPro.priceUp();
macBookPro.display("Laptop");
/////////////////////

class Keyboard extends Laptop {
  constructor(model, price, color, lang, cable) {
    super(model, price);
    this.color = color;
    this.lang = lang;
    this.cable = cable;
  }
}

const lg = new Keyboard("LG", 150, "Black", "DE", false);
lg.display("Keyboard");

/////spread operator

const average = (...arg) => arg.reduce((acc, cur) => acc + cur, 0) / arg.length;
console.log(average(5, 7, 4, 5, 6, 2, 5, 8, 5, 2, 6));

const avg = (...numbers) =>
  numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
console.log(avg(3, 5, 7, 8, 5, 4, 33, 3, 3));

////
const arr1 = ["This", "is"];
const arr2 = ["Cool"];
const totalArr = [...arr1, arr2];
