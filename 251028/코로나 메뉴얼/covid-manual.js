const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [coldSymptoms_A, temp_A] = input[0].split(" ");
let [coldSymptoms_B, temp_B] = input[1].split(" ");
let [coldSymptoms_C, temp_C] = input[2].split(" ");

temp_A = Number(temp_A);
temp_B = Number(temp_B);
temp_C = Number(temp_C);

if (coldSymptoms_A === 'Y') {
    if (temp_A >= 37) {
        resultA = ("A");
    } else {
        resultA = ("C")
    }
} else if (coldSymptoms_A === 'N') {
    if (temp_A >= 37) {
        resultA = ("B");
    } else {
        resultA = ("D");
    }
}

if (coldSymptoms_B === 'Y') {
    if (temp_B >= 37) {
        resultB = ("A");
    } else {
        resultB = ("C");
    }
} else if (coldSymptoms_B === 'N') {
    if (temp_B >= 37) {
        resultB = ("B");
    } else {
        resultB = ("D");
    }
}

if (coldSymptoms_C === 'Y') {
    if (temp_C >= 37) {
        resultC = ("A");
    } else if (temp_C < 37) {
        resultC = ("C")
    } else {
        resultC = ("D");
    }
} else if (coldSymptoms_C === 'N') {
    if (temp_C >= 37) {
        resultC = ("B");
    } else {
        resultC = ("D");
    }
}

let countA = 0
if(resultA === "A") countA++;
if(resultB === "A") countA++;
if(resultC === "A") countA++;

if (countA >= 2) {
    console.log("E");
} else {
    console.log("N");
}