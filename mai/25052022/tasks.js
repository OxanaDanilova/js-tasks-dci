const obj = {
  name: "Vasiliy",
  age: 32,
  address: {
    city: "Berlin",
    street: "Platz 1",
    house: 2,
  },
  printOut: function () {
    console.log(`${this.name} is ${this.age} years old`);
  },
};

const copyObj = structuredClone(obj);
copyObj.printOut();
copyObj.name = "Arkadiy";
copyObj.address.city = "Milan";
console.log(obj);
console.log(copyObj);
