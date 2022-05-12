// extends && super

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printData() {
    return console.log(`Hey ${this.name}! You are ${this.age} years old.`);
  }
}

const steelObj = new Person("Steel", 35);
steelObj.printData();

class Kind extends Person {
  constructor(name, age, height = 50) {
    super(name, age);
    this.height = height;
  }
  show() {
    console.log(`Hello, I am ${this.name}`);
  }
}
const zainBabyObj = new Kind("Zain", 1, 75);
zainBabyObj.printData();
zainBabyObj.show();

// Email check, write a program that checks yours input if it's a correct email
// emailCheck("Hi@hh.co") -> true
// emailCheck("Hihh.co") -> false
// emailCheck("@hh.co") -> false
