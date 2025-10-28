const fs = require("fs");
let N = Number(fs.readFileSync(0).toString().trim());

let result = "";

for (i = 1; i <= N; i++) {
    result += (i + " ");
}

console.log(result);