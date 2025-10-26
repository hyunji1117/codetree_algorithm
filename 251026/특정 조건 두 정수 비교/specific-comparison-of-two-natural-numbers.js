let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

let reslut1 = A < B ? "1" : "0";
let result2 = A === B ? "1" : "0";

console.log(reslut1, result2);