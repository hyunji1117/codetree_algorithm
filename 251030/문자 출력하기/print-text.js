const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let result = "";

for (i = 1; i <= 8; i++) {
    result += input;
}
console.log(result);