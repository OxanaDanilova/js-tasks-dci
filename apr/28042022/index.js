// for

for (let i = 0; i <= 10; i++) {}

const personObj = {
  firstName: "Steel",
  age: 22,
};
for (const prop in personObj) {
  console.log(`${prop}:${personObj[prop]}`);
}

const names = ["Alex", "Olga", "Petr"];
for (const name of names) {
  console.log(name);
}

// do while
console.log("------do while------");
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

// while
console.log("-----while----");

let index = 0;
while (index < 5) {
  console.log(index);
  index++;
}

// forEach
const cities = ["Berlin", "London", "Dubai", "NY"];
cities.forEach((el) => {
  console.log(el);
});

const numbers = [1, 3, 4, 5, 7, 2, 3, 2, 1, 2, 2, 676];
// find
const findRes = numbers.find((el) => el == 2);
const filterRes = numbers.filter((el) => el == 2);
console.log(findRes);
console.log(filterRes);

// some
console.log("---some---");
console.log(numbers.some((el) => el == 7));
// every
console.log("---every---");
console.log(numbers.every((el) => el == 7));
