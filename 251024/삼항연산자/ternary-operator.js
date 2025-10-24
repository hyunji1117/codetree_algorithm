const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let result = Number(input) === 100 ? "pass" : "failure";

console.log(result);