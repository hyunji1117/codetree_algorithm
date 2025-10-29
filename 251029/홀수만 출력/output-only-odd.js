const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

let result = "";

for (i = A; i <= B; i += 2 ) {
    result += (i + " ");
}
console.log(result);
