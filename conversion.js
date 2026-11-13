// 04-conversions.js

// Conversions implicites : source d'erreurs
console.log("5" + 3);   // "53" : + avec un texte = concaténation
console.log("5" - 3);   // 2    : - convertit le texte en nombre
console.log("5" * "2"); // 10

// Conversions explicites
console.log(Number("42"));        // 42
console.log(Number("3.5"));       // 3.5
console.log(Number("abc"));       // NaN
console.log(Number(""));          // 0   (piège : texte vide = 0)
console.log(Number("12px"));      // NaN
console.log(parseInt("12px"));    // 12  (lit le début du texte)
console.log(parseFloat("3.5kg")); // 3.5
console.log(String(123));         // "123"
console.log(Boolean(""));         // false
console.log(Boolean("0"));        // true (texte non vide)

// Tester NaN : NaN n'est jamais égal à lui-même !
console.log(NaN === NaN);                  // false
console.log(Number.isNaN(Number("abc")));  // true