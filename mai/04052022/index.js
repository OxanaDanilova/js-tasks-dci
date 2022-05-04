const personen = [
  {
    name: "Petr",
    age: 55,
    city: "NY",
  },
  {
    name: "Mery",
    age: 30,
    city: "LA",
  },
  {
    name: "John",
    age: 19,
    city: "Berlin",
  },
];

console.table(personen.map((person) => person.city));
