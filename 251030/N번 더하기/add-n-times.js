const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let N = Number(input[1]);

let result = A;

for (let i = 1; i <= N; i++) {
    result += N
    console.log(result);
}