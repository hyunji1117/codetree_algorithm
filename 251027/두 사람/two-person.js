const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [age_A, sex_A] = input[0].split(" ").map(Number);
let [age_B, sex_B] = input[1].split(" ").map(Number);

if (age_A >= 19 || age_B >= 19 && (sex_A === 'M' && sex_B === 'M')) {    
    console.log("1");
}
else {
    console.log("0");
}