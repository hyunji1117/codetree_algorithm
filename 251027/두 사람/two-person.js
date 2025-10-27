const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [age_A, sex_A] = input[0].split(" ");
let [age_B, sex_B] = input[1].split(" ");
age_A = Number(age_A);
age_B = Number(age_B);

if ((age_A >= 19 && sex_A === "M") || (age_B >= 19 && sex_B === "M")) {    
    console.log("1");
}
else {
    console.log("0");
}