// 05-operateurs.js
console.log(7 + 2, 7 - 2, 7 * 2, 7 / 2, 7 % 2, 7 ** 2);
// 9 5 14 3.5 1 49

let n = 5;
n += 3;                   // n = n + 3
n++;                      // n = n + 1
console.log(n);           // 9

// Priorité : * avant +, parenthèses prioritaires
console.log(2 + 3 * 4);   // 14
console.log((2 + 3) * 4); // 20

// Comparaisons
console.log(5 > 3, 5 >= 5, 5 < 3);   // true true false
console.log(5 === "5");   // false (types différents)
console.log(5 == "5");    // true  (à ÉVITER)
console.log(0 == false);  // true  (à ÉVITER)
console.log(0 === false); // false

// Opérateurs logiques
const age = 20;
const aUneCarte = false;
console.log(age >= 18 && aUneCarte);  // false
console.log(age >= 18 || aUneCarte);  // true
console.log(!aUneCarte);              // true

// Nombres décimaux : précision limitée (norme binaire)
console.log(0.1 + 0.2);               // 0.30000000000000004
console.log((0.1 + 0.2).toFixed(2));  // "0.30" (attention : c'est un texte)