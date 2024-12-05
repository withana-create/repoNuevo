//Ejercicio 5
//Escribe un programa que tome una cadena como entrada y cuente el número de vocales (a,e,i,o,u) en la cadena .

const readline = require("readline-sync");

const input = readline.question("Introduce un texto: ");

let contador = 0;
for (let i = 0; i <= input.length; i++) {
  if (
    input[i] === "a" ||
    input[i] === "e" ||
    input[i] === "i" ||
    input[i] === "o" ||
    input[i] === "u" ||
    input[i] === "A" ||
    input[i] === "E" ||
    input[i] === "I" ||
    input[i] === "O" ||
    input[i] === "U"
  ) {
    contador++;
  }
}
console.log("Numero de vocales del texto es = " + contador);
