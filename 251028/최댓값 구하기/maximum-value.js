const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

if ((a >= -100 && a <= 100) && (b >= -100 && b <= 100) && (c >= -100 && c <= 100)) {
    if (a >= b && a >= c) {
        console.log(a);
    } else if (b >= a && b >= c) {
        console.log(b)
    } else {
        console.log(c);
    }
}