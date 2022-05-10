const obj = {
  name: "Ali",
  age: 22,
  visitedCities: ["Berlin", "LA", "London"],
  showInfo: function () {
    return `I'm ${this.name}`;
  },
};

//////Destructuring objects
//// wir können Eigenschaftsnamen benutzten als variables mithilfe Destructuring
function funObj(obj) {
  let firstName = obj.name;
  console.log(firstName);
}

const ppl = [
  { name: "Anna", age: 40 },
  { name: "Timur", age: 35 },
  { name: "Arman", age: 33 },
];

funObj({ name: "Nancy", tel: 23232323 });

const copyPpl = ppl.map(({ name, age }) => {
  console.log("------Object destructuring-----------");
  console.log(name);
  console.log(age);
});

/////////getter
const userCarData = {
  year: 2020,
  model: "A7",
  speed: 250,
  price: 75000,
  get fullCarName() {
    return console.log(`${this.model} price: ${this.price}`);
  },
  set fullCarName(str) {
    let arr = str.split(" ");
    this.year = arr[0];
    this.model = arr[1];
    this.speed = arr[2];
    this.price = arr[3];
  },
};

userCarData.fullCarName;
console.log("--------setter---------");
userCarData.fullCarName = "2022 Q5 300 80000";
userCarData.fullCarName;

//////////constructor///////

function Person(name, age, add) {
  this.name = name;
  this.age = age;
  this.add = add;
  this.printOut = function () {
    console.log(
      `Hey, ${this.name}, ${this.age} years old. You live in ${this.add}`
    );
  };
}

const hadiPerson = new Person("Hadi", 32, "Berlin");
console.log(hadiPerson);
hadiPerson.printOut();
