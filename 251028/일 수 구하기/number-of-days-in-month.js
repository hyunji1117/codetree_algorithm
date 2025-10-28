const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

if (n === 1 || n > 2 && n <= 12) {
    console.log("31");
} else if (n === 2) {
    console.log("28");
}