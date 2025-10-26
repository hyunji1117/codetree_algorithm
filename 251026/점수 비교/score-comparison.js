const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let A = (input[0]).split(" ").map(Number);
let B = (input[1]).split(" ").map(Number);

let [math_A, english_A] = A;
let [math_B, english_B] = B;

if (math_A > math_B && english_A > english_B) {
    console.log("1");
}
else {
    console.log("0");
}
