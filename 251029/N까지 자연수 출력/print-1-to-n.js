const fs = require("fs");
let N = Number(fs.readFileSync(0).toString().trim());

let result = "";
let i = 1;

while (i <= N) {
    result += (i + " ");
    i++;
}

console.log(result);