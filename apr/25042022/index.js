// For
const names = ["Ali", "Nancy", "Olga", "Steel"];
for (let i = 0; i < names.length; i++) {
  console.log(`${names[i]}`);
}

const steelObj = {
  name: "Steel",
  age: 22,
  add: "Paris",
};

// For in (Objects)
for (const prop in steelObj) {
  console.log(prop, steelObj[prop]);
}

// for of (Array)

for (const element of names) {
  console.log(element);
}
console.log("-------callbacks-------------");
// callbacks Innerhalb einer Funktion wird andere Funktion aufgerufen

function first(cb) {
  return cb;
}

function cb() {
  return console.log("Cool");
}

first(cb());

console.log("-------map-------------");
// map - macht eine Kopie von aray
const cities = ["Berlin", "Paris", "LA", "NY"];
const newCities = cities.map((element, i) => element);
console.log(newCities);

console.log("-------reduce------------");
// reduce
const numArr = [3, 4, 5, 6, 7, 8, 9];

const sumResult = numArr.reduce((acc, curEl) => acc + curEl, 0);
console.log(sumResult);

// filter
