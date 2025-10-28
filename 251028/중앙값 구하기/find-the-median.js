const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);
let C = Number(input[2]);

if ((B >= A && A >= C) || (C >= A && A >= B)) {
    console.log(A);
} else if ((A >= B && B >= C) || (C >= B && B >= A)) {
    console.log(B);
} else {
    console.log(C);
}