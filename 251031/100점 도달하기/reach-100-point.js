const fs = require("fs");
let N = Number(fs.readFileSync(0).toString());

let i = N;
let result = "";

while (i <= 100) {
    if (i >= 90) {
        result += "A" + " ";
    }
    else if (N >= 80) {
        result += "B" + " ";
    }
    else if (N >= 70) {
        result += "C" + " ";
    }
    else if (N >= 60) {
        result += "D" + " ";
    }
    else {
        result += "F" + " ";
    }
    i++;
}
console.log(result);

