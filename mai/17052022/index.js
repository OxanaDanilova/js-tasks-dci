// Clones vs Reference
let x = 5;
let val = x;
console.log(val);
val = 100;
console.log(val);

const obj = {
  id: 22,
};

let ref = obj; // reference
ref.name = "Nansy";
console.log(ref);
console.log(obj);

//// clonning Array

const names = ["Nansy", "Tom", "Jerry"];
let arrRef = names; // ref

///Method 1 - spread
const newArr = [...names];
///Method 2 - map
const newArrWithMap = names.map((ele) => ele);
////Method 3 - slice
const newArrWithSlice = names.slice(0);
////Method 4 - concat
const newArrWithConcat = [].concat(names);

/// copy Object
const car = {
  brandName: "Audi",
  colors: ["Red", "Silver", "White"],
  modelYear: 2020,
};

const copyObj = Object.assign({}, car);
console.log(copyObj);
copyObj.modelYear = 2021;
console.log(copyObj);
console.log(car);
//// copy with spread
const shallowCopy = { ...car };
console.log(shallowCopy);
shallowCopy.brandName = "BMW";
console.log(shallowCopy);
console.log(car);
shallowCopy.colors.push("Orange");
console.log(shallowCopy);
console.log(car);
console.log(copyObj);

///   Recursion  ///

const factorial = (num) => {
  if (num == 1) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(7));

//// Recursion for obj
const myObj = { name: "Timur", age: 35, children: ["Maria", "Arman", "Ali"] };
const recObj = (obj) => {
  const myNewObj = {};
  for (const key in obj) {
    myNewObj[key] = obj[key];
  }
  return myNewObj;
};

console.log(recObj(myObj));

function deepClone(val) {
  ///array
  if (Array.isArray(val)) {
    return val.map(deepClone);
  }
  ///obj
  if (typeof val == "object") {
    return Object.keys(val)
      .map((key) => {
        return { [key]: deepClone(val[key]) };
      })
      .reduce((acc, cur) => Object.assign(acc, cur), {});
  }

  return val;
}

const newDeepCloneCar = deepClone(car);
newDeepCloneCar.colors.push("Violet");
console.log(newDeepCloneCar);
console.log(car);
