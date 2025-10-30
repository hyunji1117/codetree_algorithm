const fs = require("fs");
let N = Number(fs.readFileSync(0).toString().trim());

let i = 3;
let result = "";

while (i <= N) {
    result += (i + " ");
    i += 3;
}

console.log(result);