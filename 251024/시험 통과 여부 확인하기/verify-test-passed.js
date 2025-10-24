const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

if (input > 80) {
    console.log("pass");
} else {
    x = 80 - input;
    console.log(`${x} more score`);
}