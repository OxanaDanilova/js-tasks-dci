// The Puppy Age Calculator
// You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

const calculateDogAge = (dogAge, rate = 7) => {
  if (typeof dogAge == "number" && typeof rate == "number") {
    let resultAge = dogAge * rate;
    return console.log(`Your doggie is ${resultAge} years old in dog years!`);
  } else {
    return console.log("Please write a number!");
  }
};

calculateDogAge(5, 5);
calculateDogAge(10);
calculateDogAge(2);
// ------------------------
// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

const calculateSupply = (age, amountPerDay) => {
  const maxAge = 120;
  let amount = Math.floor(amountPerDay) * 365 * (maxAge - age);
  return console.log(
    `You will need ${amount} to last you until the ripe old age of ${maxAge}. You will still have ${
      maxAge - age
    }`
  );
};

calculateSupply(40, 3.7);
calculateSupply(30, 4);
calculateSupply(50, 5);

// ------------------------
// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.
// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

const celsiusToFahrenheit = (celsius) => {
  let far = (celsius * 9) / 5 + 32;
  return console.log(`${celsius}°C is ${far.toFixed(2)}°F`);
};

celsiusToFahrenheit(15); // 59Far

// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

const fahrenheitToCelsius = (far) => {
  let celsius = ((far - 32) * 5) / 9;
  return console.log(`${far}°F is ${celsius.toFixed(2)}°C`);
};

fahrenheitToCelsius(50); // 10 Cel

// ------------------------
// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments

const tellFortune = (children, partner, location, job) => {
  return console.log(
    `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`
  );
};

tellFortune(8, "Alex", "Rio", "webdev");

//------------------------------------

// Write a JavaScript function that generates a string passing a specified length of random characters. AKA password generator
// // use the following chrList
//  let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const passGenerator = (num) => {
  let charList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const password = []; // let str="";
  let random;
  for (let i = 0; i < num; i++) {
    ////////0-10 Math.random()*10
    random = Math.floor(Math.random() * charList.length);
    password.push(charList[random]); // str += charList[random];
  }
  return console.log(password.join(""));
};

passGenerator(8);
passGenerator(28);
passGenerator(40);

//---------------------------------------
/* Print Exponential Values
Write a function that accepts two numbers and validate that they are numbers.
After that, the function should print y exponential values starting from x.
For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2. */

const exponenFunc = (num, exp) => {
  if (typeof num == "number" && typeof exp == "number") {
    const arr = [];
    for (let i = 1; i <= exp; i++) {
      //arr.push(num ** i);
      arr.push(Math.pow(num, i));
    }
    return console.log(arr.join(" "));
  } else {
    console.log("Please, enter the numbers");
  }
};

exponenFunc(3, 5); // 3 9 27 81 243
exponenFunc(3, 3); // 3 9 27
exponenFunc(2, 8); // 2 4 8 16 32 64 128 256

//---------------------------------------
// Fruits
// Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x"

let fruit = "apple";
const printFavoriteFruit = () => {
  fruit = "orange";
  return console.log(`My favorite fruit is: ${fruit}`);
};

printFavoriteFruit();
