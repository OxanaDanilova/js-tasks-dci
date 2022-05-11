function Person(name, age, add) {
  this.name = name;
  this.age = age;
  this.add = add;
  this.printOut = function () {
    return `Hi! ${this.name}`;
  };
}

const aliData = new Person("Ali", 75, "London");
console.log(aliData.printOut());

/// class
class Animal {
  constructor(_kind, _hometown) {
    this.kind = _kind;
    this.hometown = _hometown;
  }
  display() {
    return `This animal ${this.kind} lives in ${this.hometown}`;
  }
}

const cat = new Animal("cat", "LA");
console.log(cat.display());
const dog = new Animal("dog", "NY");
console.log(dog.display());
console.log(typeof Animal);
dog.printDog = function () {
  console.log("dog");
};
dog.age = 2;
dog.printDog();
console.log(dog);

class Color {
  constructor() {
    this.name = "";
    this.tem = 0;
  }
}

const red = new Color();

//////////
class Tv {
  constructor(brand, channel, volume = 10) {
    this.brand = brand;
    this.channel = channel;
    this.volume = volume;
  }
  inVolume() {
    this.volume =
      this.volume < 100 ? this.volume + 1 : console.log("This is tool loud");
  }
  decVolume() {
    this.volume = this.volume > 0 ? this.volume - 1 : console.log("No sound");
  }
  reset() {
    this.channel = 1;
    this.volume = 10;
  }
  randomChannel() {
    this.channel = Math.floor(Math.random() * 10) + 1;
  }
  display() {
    return `This ${this.brand} Tv, has ${this.channel} on right now. The volume is currently at ${this.volume}`;
  }
}

const samsung = new Tv("Samsung", 50, 20);
console.log(samsung);
samsung.inVolume();
samsung.inVolume();
samsung.inVolume();
samsung.inVolume();
samsung.inVolume();
console.log(samsung);
samsung.decVolume();
samsung.reset();
samsung.randomChannel();
console.log(samsung);
console.log(samsung.display());

const lg = new Tv("LG", 80);
console.log(lg.brand);
//////////////////
class WashingMachine {
  constructor(brand, capacity, price, energyClass, color) {
    this.brand = brand;
    this.capacity = capacity;
    this.price = price;
    this.energyClass = energyClass;
    this.color = color;
  }
  programms = [
    { name: "Wool", temp: 40, time: 30 },
    { name: "Short", temp: 30, time: 15 },
    { name: "Sport", temp: 30, time: 25 },
    { name: "Jeans", temp: 60, time: 40 },
  ];
  timer = 0;
  temperature = 0;
  programName = "";
  displayProgram() {
    console.log(
      `The current programm is ${this.programName} with time ${this.timer} and temperature ${this.temperature}`
    );
  }
  runProgram(num) {
    this.programName = this.programms[num].name;
    this.temperature = this.programms[num].temp;
    this.timer = this.programms[num].time;
  }
}

const samsungW = new WashingMachine("Samsung", 6, 500, "A+", "white");
console.log(samsungW);
samsungW.runProgram(1);
samsungW.displayProgram();
