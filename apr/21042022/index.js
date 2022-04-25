//Object
const obj = {};
const obj2 = new Object();

const person = {
  firstName: "Ali",
  lastName: "Petrov",
  age: 28,
  act: ["sleep", "eat", "dream"],
  display: () => {},
  print: function () {},
};

person.firstName = "Jack";
person["lastName"] = "Dann";
person["middleName"] = "Mack";
person["AgeSum"] = () => {};
console.log(person);

const cars = {
  number: 5,
  storage: 4,
};

const house = {
  city: "Berlin",
  add: "xxx str",
};
///// Object.assign

const newObj = Object.assign({ name: "me", age: 99 }, cars, house);
console.log(newObj);

//////Keys

console.log("Keys: ", Object.keys(newObj));

//////////Values

console.log("Values: ", Object.values(newObj));

//////////////

const ggg = new Object({ hhh: "hghgh" });
console.log(ggg);

// Object.defineProperty()
console.log("-------------Object.defineProperty-------------");

const userInfoObj = {};
console.log(userInfoObj);

Object.defineProperty(userInfoObj, "name", {
  value: "Hadi",
  writable: true,
  enumerable: true,
}); /// wir können property, die wir mithilfe 'defineProperty erstellt haben, sehen, falls wir "configurable:true" für diese property schreiben

console.log(userInfoObj);

// Object.defineProperties()

Object.defineProperties(userInfoObj, {
  lastName: { value: "Nsrnee", writable: true },
  act: { value: ["Cooking", "Biking"] },
  cars: { value: ["V2"], writable: false },
});

console.log(userInfoObj);

// Object.hasOwnProperty()

console.log(userInfoObj.hasOwnProperty("name"));

//Wann soll mann einen String in ein Array umwandeln?
//Wenn mann nur die Zeichen eines Strigs zurückgeben, lesen, oder verwenden will, kann mann direkt in dem String durchlaufen.
//Wenn mann eine oder mehrere Zeichen eines Strigs ändern oder Array-Methoden benutzn will, muss mann zuerst den String in ein Array umwandeln.
const str = "hello";
for (let i = 0; i < str.length; i++) {
  console.log("Buchstabe zurückgeben: ", str[i]);
  str[i] = "N";
  console.log("ohne split() bleibt: ", str[i]);
}
console.log("-----------------------");
const strToarr = str.split("");

for (let i = 0; i < strToarr.length; i++) {
  strToarr[i] = "N";
  console.log("mit split() ändert sich zu: ", strToarr[i]);
}

console.log("------Cat----------");
const catObj = {};
Object.defineProperty(catObj, "name", {
  value: "cat",
  configurable: false,
});
console.log(catObj);
