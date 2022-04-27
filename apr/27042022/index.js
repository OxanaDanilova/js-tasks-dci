const emoji = ["😉", "😉", "😉", "😉", "😎", "😎", "🤓"];
const discounts = [22, 3, 45, 6];
// map
// Have 4 toDos
// 1. method
// 2. callBack
// 3. loop
// 4. make a copy for the original array

const emojiCopy = emoji.map((element, index) => {
  return `hi ${element} ${index}`;
});

console.log(emojiCopy);

const copyDiscounts = discounts.map((el) => (el * 10) / 100);
console.log(copyDiscounts);
console.log("***------**********----------******");

const users = [
  {
    id: "john",
    name: "John Smith",
    age: 20,
  },
  {
    id: "ann",
    name: "Ann Smith",
    age: 24,
  },
  {
    id: "pete",
    name: "Pete Peterson",
    age: 31,
  },
];
const greetings = users.map((user) => {
  return {
    text: `Hi, ${user.name}, ${user.age} years old`,
  };
});
console.log(greetings);

// filter

const filteredEmoji = emoji.filter((elem) => {
  return elem == "😎";
});

console.log("filter", filteredEmoji);
console.log("original array", emoji);
console.log("---*******--------***********");

const words = ["this", "is", "longText", "somethingLong"];
const filterdWords = words.filter((word) => word.length == 2);
console.log(filterdWords);

const jobs = [
  { title: "teacher", salary: 1500, location: "Amsterdam", remote: true },
  { title: "IT", salary: 2400, location: "LA", remote: true },
  { title: "Web Developer", salary: 1800, location: "London", remote: false },
];

const filterdJobs = jobs.filter(
  (job) => job.salary > 2000 || job.location == "Amsterdam"
);
console.log(filterdJobs);

// reduce
const itemsList = [
  { title: "Qual lock", price: 80 },
  { title: "shoe", price: 139 },
  { title: "light", price: 120 },
];

const totalCost = itemsList.reduce((acc, item) => acc + item.price, 0);
console.log("You have to pay", totalCost);

// fill
const arr = [1, 2, 5, 3, 4];
console.log(arr.fill("angel", 2, 3));
console.log(arr);

// sort
const sortedArr = arr.sort();
console.log(sortedArr);
console.log(arr.sort((a, b) => b - a));
const alpha = ["a", "c", "b", "A", ":"].sort();
console.log(alpha);

// forEach

// find

// some

// every
