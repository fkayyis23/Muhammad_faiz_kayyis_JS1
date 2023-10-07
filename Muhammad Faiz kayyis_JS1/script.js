let age = 23;
let resultIfElse = "";

if (age < 23) {
    resultIfElse = "Anda sudah cukup umur";
} else if (age >= 23 && age < 60) {
    resultIfElse = "Anda dewasa";
} else {
    resultIfElse = "Anda seorang senior";
}

document.getElementById("ifElseResult").textContent = resultIfElse;

// Switch Case
let day = new Date().getDay();
let dayName = "";

switch (day) {
    case 0:
        dayName = "Minggu";
        break;
    case 1:
        dayName = "Senin";
        break;
    case 2:
        dayName = "Selasa";
        break;
    case 3:
        dayName = "Rabu";
        break;
    case 4:
        dayName = "Kamis";
        break;
    case 5:
        dayName = "Jumat";
        break;
    case 6:
        dayName = "Sabtu";
        break;
}

document.getElementById("switchResult").textContent = `Hari ini adalah ${dayName}`;

// For Statement
let fruits = ["Mangga", "Anggur", "Pisang"];
let resultFor = "";

for (let i = 0; i < fruits.length; i++) {
    resultFor += `<li>${fruits[i]}</li>`;
}

document.getElementById("forResult").innerHTML = resultFor;

// While dan Do-While
let countWhile = 0;
let whileResult = "";

while (countWhile < 5) {
    whileResult += `Iterasi ke-${countWhile + 1}<br>`;
    countWhile++;
}

document.getElementById("whileResult").innerHTML = whileResult;

let countDoWhile = 0;
let doWhileResult = "";

do {
    doWhileResult += `Iterasi ke-${countDoWhile + 1}<br>`;
    countDoWhile++;
} while (countDoWhile < 5);

document.getElementById("whileResult").innerHTML += doWhileResult;

// Function
function addNumbers(a, b) {
    return a + b;
}

let sum = addNumbers(20, 3);

document.getElementById("functionResult").textContent = `Hasil penjumlahan: ${sum}`;
