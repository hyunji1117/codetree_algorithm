const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let C = input[0];
let N = Number(input[1]);
let result1 = "";
let result2 = "";

if (C === "A"){
    for (let i = 1; i <= N; i++) {
        result1 += (i + " ");
    }
    console.log(result1);
} else if (C === "D") {
    for (let i = N; i >= 1; i--) {
        result2 += (i + " ");
    }
    console.log(result2);
}
