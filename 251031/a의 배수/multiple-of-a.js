const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let N = Number(input[0]);
let a = Number(input[1]);

let i = 1;
let result = "";

while (i <= N) {
    if (i % a === 0) {
        result += "1\n";
    }
    else {
        result += "0\n";
    }
    i++;
}
console.log(result);