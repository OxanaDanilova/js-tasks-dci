// reduce
// Create a function that returns an object has following output, try this one in Advance array methods :muscle::skin-tone-2:
// Examples:
// ABC -> { A: 1, B: 1, C: 1 } QQQ -> { Q: 3}

const countLetter = (str) => {
  const arr = str.toLowerCase().split("");
  const result = arr.reduce((box, cur) => {
    box[cur] = box[cur] ? box[cur] + 1 : 1;
    return box;
  }, {});
  return console.log(result);
};

countLetter("Hadi");
countLetter("ABC");
countLetter("QQQ");
countLetter("tree");

console.log("2.Lösung");

const countLetter2 = (str) => {
  const arr = str.split("");
  const result = arr.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});
  return console.log(result);
};

countLetter2("tree");
