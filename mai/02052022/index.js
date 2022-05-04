//let const var
let x = 0;

console.log(sumUP(3, 5));

function sumUP(x, y) {
  return x + y;
}

console.log(5 || 6);

////strings
let str = " This is a long text ";
console.log(str.length);
/* str.trim(); */
console.log(str.trim());

/////////////loops break continue
console.log("---------break----------");
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}
console.log("---------continue----------");
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

let color = "darkgreen";
switch (color) {
  case ("blue", "lightblue"):
    console.log("This is blue");
    break;
  case "green":
  case "lightgreen":
  case "darkgreen":
    console.log("This is green");
    break;
  case "black":
    console.log("This is black");
    break;
  case "red":
    console.log("This is red");
    break;
  default:
    console.log("Sorry, thi color is out of our list");
}
