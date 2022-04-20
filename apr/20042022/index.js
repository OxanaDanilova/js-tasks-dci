// Objects
// const <namespace> = { <key 1>: <value 1>, <key 2>: <value 2>, ... }
// keys, properties : value
let str = "";
let num = 0;
let bool = true;
const arr = [];
let firstName = "Ali";
const personObj = {
  firstName: firstName,
  lastName: "Danilova",
  age: 34,
  address: "Chemnitz",
  toolStack: ["JS", "HTML", "CSS"],
  hasKids: true,
};

console.log(typeof personObj);
console.log(personObj);

//----------------------------------------------------------------
const carObj = {
  model: "Bugatti",
  color: "red",
  price: 3987000,
  fuelConsumption: "16.6*30.3 L/100km",
};
console.log(personObj["lastName"], typeof personObj["lastName"]);
console.log(personObj.age, typeof personObj.age);

// Object Literal
const obj = {};
obj.firstName = "Oxana";
obj.firstName = "Lila";
obj["lastName"] = "Olala";
console.log("my Object", obj);
console.log("keys", Object.keys(obj));
console.log("values", Object.values(obj));

// Accessing properties
// 1- with (bracket notation)

// 2- with (dot notation)

const userObj = {
  name: "Tobi",
  age: 33,
  address: "Berlin",
  act: ["draw", "sleep", "eat"],
  job: "HR",
  fat: true,
};

const myObj = {
  firstName: "Oxana",
  lastName: "Danilova",
  address: "Chemnitz",
  hasKids: true,
  activity: "Web Development",
  mobile: "987-654-321",
  email: "myemail@gmail.com",
  hasPets: false,
  display: function () {
    // wir können nicht hier pfile-funktion anwenden, weil this=undefined
    console.log(`Hi! I am ${this.firstName} and live in ${this.address}! `);
  },
};

myObj.print = function () {
  console.log("This is a cool method");
};

/// this bedeutet objekt, mit welchem Objekt ich jetzt arbeite

console.log(myObj);
myObj.display();

// Assignment using dot notation, more used to access a property value

// Assigning using bracket notation, more used for an empty object

// Tell us more about you

// Object.keys
console.log(Object.keys(myObj));

// Object.values
console.log(Object.values(myObj));

console.log(Object.entries(myObj));

// Object.assign
const obj1 = { kids: 2, cars: 5 };
const obj2 = { kids: 5, colors: ["red", "orange"], pet: "fish" };
function hi() {
  console.log("Hi!!!!!");
}

obj1.testMethode = hi;
const totalObj = Object.assign({ name: "Steel", age: 32 }, obj1, obj2);
console.log(totalObj);
totalObj.hi;

// Object.seal()
Object.seal(totalObj);
delete totalObj.name;
console.log(totalObj);

console.log(Object.isSealed(totalObj));

// Object.defineProperty()

// Object.defineProperties()

// Object.hasOwnProperty()
