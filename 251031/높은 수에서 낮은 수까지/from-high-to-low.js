const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

let result = "";

if (A >= B) {
    for (let i = A; i >= B; i--) {
        result += (i + " ");
    }
    console.log(result);
} else if (B >= A) { 
    for (let i = B; i >= A; i--) {
        result += (i + " ");
    }
    console.log(result);
}
