const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);

if (N > 80) {
    console.log("pass");
} else {
    let x = Number(80) - N;
    console.log(`${x} more score`);
}