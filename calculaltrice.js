// calculatrice.js
const saisieA = prompt("Premier nombre :");
const saisieB = prompt("Deuxième nombre :");

// prompt retourne du texte : conversion explicite
const a = Number(saisieA);
const b = Number(saisieB);

// true seulement si les DEUX conversions ont réussi
const saisieValide = !Number.isNaN(a) && !Number.isNaN(b);
console.log("Saisie valide ?", saisieValide);

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);
console.log(`${a} ** ${b} = ${a ** b}`);