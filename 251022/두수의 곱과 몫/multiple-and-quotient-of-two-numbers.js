const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let multiple = a * b;
let division = parseInt(a / b);

// let divisionToFixed = division.toFixed(1);

console.log(`${a} * ${b} = ${multiple}`);
console.log(`${a} / ${b} = ${division}`);