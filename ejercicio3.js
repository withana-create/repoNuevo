// Ejercicio 3
//Escribe un programa que tome un número como entrada y calcule su factorial .

const readline = require("readline-sync");

const input = readline.question("Introduce tu numero: ");

let factorial = 1;

for (let i = 1; i <= input; i++) {
  factorial *= i;
}
console.log("El factorial de " + input + " es: " + factorial);
