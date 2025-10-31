const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

let result = "";

if (A > 0) {
    for (let i = 1; i <= B; i++) {
        result += A;
    }
    console.log(result);
} else {
    console.log("0");
}
