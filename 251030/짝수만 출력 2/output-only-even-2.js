const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let B = Number(input[0]);
let A = Number(input[1]);

let i = B;
let result = "";

while (i >= A) {
    result += (i + " ");
    i -= 2;
}

console.log(result);