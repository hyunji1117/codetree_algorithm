const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

if (n >= 1 && n < 7) {
    if (n % 2 === 1) {
        console.log("31");
    } else if (n === 2) {
        console.log("28");
    } else {
        console.log("30");
    }
} else if (n >= 8 && n <= 12 ) {
    if (n % 2 === 0) {
        console.log("31")
    } else {
        console.log("30");
    }
}

