// 03-types.js
console.log(typeof 42);            // "number"
console.log(typeof 3.14);          // "number"
console.log(typeof "Bonjour");     // "string"
console.log(typeof true);          // "boolean"

let nonDefinie;
console.log(typeof nonDefinie);    // "undefined"

const vide = null;
console.log(typeof vide);          // "object" (anomalie historique du langage)

console.log(typeof NaN);           // "number" : NaN signifie « Not a Number »
                                   // mais reste de type number !