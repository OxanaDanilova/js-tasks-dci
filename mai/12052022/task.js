const workingTime = [
  { day: "Mon", start: 8, end: 17 },
  { day: "Di", start: 9, end: 16 },
  { day: "Mitt", start: 9, end: 16 },
  { day: "Don", start: 8, end: 17 },
  { day: "Fri", start: 8, end: 18 },
];

const workingSum = workingTime
  .map((el) => el.end - el.start)
  .reduce((acc, cur) => acc + cur);
console.log(workingSum);

const workingSum2 = workingTime.reduce((acc, cur) => {
  return (acc += cur.end - cur.start);
}, 0);

const studingTime = [
  { day: "Mon", start: 9, end: 16.25 },
  { day: "Di", start: 9, end: 16.25 },
  { day: "Mitt", start: 9, end: 16.25 },
  { day: "Don", start: 9, end: 16.25 },
  { day: "Fri", start: 9, end: 16 },
];

const studingSum = studingTime.reduce((acc, cur) => {
  return (acc += cur.end - cur.start);
}, 0);

console.log(studingSum);
