const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let result = "";

for (let i = 1; i <= input.length; i++) {
    const num = Number(input[i]);
    if (num % 2 === 1 && num % 3 === 0) {
        result += num + "\n";
    }
}
console.log(result);