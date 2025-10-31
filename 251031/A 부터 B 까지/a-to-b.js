const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

let result = "";

for (let i = A; A <= B; i++) {
    result += (A + " ");

    if (A % 2 === 1) {
        A *= 2;
    }
    else {
        A += 3;
    }
}
console.log(result);