const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let sex = Number(input[0]);
let age = Number(input[1]);

if (age < 19) {
    if (sex === 1) {
        console.log ("GIRL");
    } else {
        console.log("BOY");
    }
} else {
    if (sex === 1) {
        console.log ("WOMAN");
    } else {
        console.log("MAN");
    }
}