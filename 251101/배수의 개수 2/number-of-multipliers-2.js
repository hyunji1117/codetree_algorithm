const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let result = 0;

for (let i = 1; i <= input.length; i++) {
    num = Number(input[i]);
    if (num % 2 !== 0) {
        result++;
    }
}
console.log(result);