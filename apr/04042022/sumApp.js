/* function sum(x, y) {
  return console.log(x + y);
}
//process ist ein Objekt, indem fast alle Info steht.
const userData = process.argv.slice(2);
console.log(userData);

sum(parseInt(userData[0]), parseInt(userData[1])); */

function greetings() {
  const userName = process.argv.slice(2);
  userName.forEach((element) => {
    console.log(`Hello, ${element}`);
  });
}

greetings();

console.log(process.env.USER);
