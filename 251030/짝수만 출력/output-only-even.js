const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

let i = A;
let result = "";

while (i <= B) {
    result += (i + " ");
    i += 2;
}

console.log(result);