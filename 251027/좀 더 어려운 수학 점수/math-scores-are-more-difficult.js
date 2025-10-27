const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [math_A, english_A] = input[0].split(" ").map(Number);
let [math_B, english_B] = input[1].split(" ").map(Number);

if (math_A > math_B || math_A === math_B && english_A > english_B) {
    console.log("A");
}
else {
    console.log("B");
}