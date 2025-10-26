const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);
let C = Number(input[2]);

let result = B > A && B < C ? "1" : "0";

console.log(result);