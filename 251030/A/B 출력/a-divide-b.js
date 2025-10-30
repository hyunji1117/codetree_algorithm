// const fs = require("fs");
// let N = fs.readFileSync(0).toString().trim();

// const fs = require("fs");
// let N = Number(fs.readFileSync(0).toString().trim());

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

const integerPart = Math.floor(A / B);
let remainder = A % B;
let result = "";

for (i = 1; i <= 20; i++) {
    remainder *= 10;
    const digit = Math.floor(remainder / B);
    result += digit;
    remainder %= B;
}
console.log(`${integerPart}.${result}`);