// Creat a constructor function that receive product details (productName,prise,inventory) thin build a method to display this data in clear outputted form
// build two product using your constructor function
// i.e : (Pepsi,2.33,2232) -> Form item Pepsi selling prise 2.33€. we have 2232 in our store
function Product(productName, price, inventory) {
  this.productName = productName;
  this.price = price;
  this.inventory = inventory;
  this.display = function () {
    return console.log(
      `For item ${this.productName} selling prise ${this.price}. we have ${this.inventory} in our store`
    );
  };
}

const pepsi = new Product("Pepsi", 2.33, 2232);
pepsi.display();

const snickers = new Product("Snickers", 1.85, 1000);
snickers.display();

// get & set, create a car object that uses getter and setter method to get and set the following (modelName,modelNumber,enginCapacity)
// first get the data
// then set the data

console.log("-----------Car----------");
const car = {
  modelName: "A7",
  modelNumber: 12321,
  enginCapacity: 2,
  get fullInfo() {
    return console.log(
      `This is car with ${this.modelName}, ${this.modelNumber} and ${this.enginCapacity}`
    );
  },
  set fullInfo(str) {
    const arr = str.split(" ");
    this.modelName = arr[0];
    this.modelNumber = arr[1];
    this.enginCapacity = arr[2];
  },
};
car.fullInfo;
car.fullInfo = "Q5 12321 3";
console.log(car);
