const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let area = input * input;

console.log(area);

if (input < 5) {
    console.log("tiny");
}