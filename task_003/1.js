const degreeC = parseFloat(prompt("Введи температуру в градуса Цельсия"));
const degreeF = convertCF(degreeC);

alert(`Цельсий: ${degreeC.toFixed(2)}, Фаренгейт: ${degreeF.toFixed(2)}`);

function convertCF(degree) {
    return ((9 / 5) * degree + 32);
}
