let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let A = Number(input[0]);
let [B, C, D, E] = input[1].split(" ").map(Number);

if (A > B) {
    console.log("1");
}
else {
    console.log("0");
}

if (A > C) {
    console.log("1");
}
else {
    console.log("0");
}

if (A > D) {
    console.log("1");
}
else {
    console.log("0");
}

if (A > E) {
    console.log("1");
}
else {
    console.log("0");
}