const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let h = Number(input[0]);
let w = Number(input[1]);

let b = (10000 * w) / (h * h);
let obesity = parseInt(b);

console.log(obesity);

if (obesity > 25) {
    console.log("Obesity");
}