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
