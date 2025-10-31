const fs = require("fs");
let N = Number(fs.readFileSync(0).toString().trim());

let result = "";

for (let i = 1; i <= N; i++) {

    if (i % 3 === 0 
    || i.toString().includes("3") 
    || i.toString().includes("6")
    || i.toString().includes("9")) {
        result += ("0" + " ");
    }
    else {
        result += (i + " ");
    }
}
console.log(result);