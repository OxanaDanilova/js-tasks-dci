console.log(isNaN("101")); // false für Zahlen 101, '101', sonst true
console.log(isNaN("")); //  false " " == 0

///parseInt - convert String into Number
console.log(parseInt("Hadi 200")); // NaN

// (10)  0123456789 -> 11
// (2)  01 -> 0000 0001 0010 01
// (16) 0123456789ABCDEF   parseInt("10", 16) => A
console.log(parseInt("A", 16));
