const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

if (A < B) {
    console.log(B - A);
} else {
    console.log(A - B);
}