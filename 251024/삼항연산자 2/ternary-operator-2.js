const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let result = Number(input) === 1 ? "t" : "f";

console.log(result);