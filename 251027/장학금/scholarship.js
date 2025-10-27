const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let middle = Number(input[0]);
let final = Number(input[1]);

if (middle >= 90 && (final >= 95 && final <= 100)) {
    console.log("100000");
}
else if (middle >= 90 && (final >= 90)) {
    console.log("50000");
}
else {
    console.log("0");
}