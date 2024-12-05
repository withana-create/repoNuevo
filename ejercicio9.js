//Ejercicio 9
// Programa que solicite un número al usuario del 0 al 10 y devuelva el número escrito en letras .Si no es un numero o no está en el rango del 0 al 10 , no es un numero
//y se deberá volver a solicitar un número .
const readline = require("readline-sync");

const input = readline.question("Introduce un numero del 0 al 10 : ");
const num = parseInt(input);
if (isNaN(num)) {
  console.log("Introduce un numero valido del 0 al 10");
} else if (num === 0) {
  console.log("cero");
} else if (num === 1) {
  console.log("uno");
} else if (num === 2) {
  console.log("dos");
} else if (num === 3) {
  console.log("tres");
} else if (num === 4) {
  console.log("cuatro");
} else if (num === 5) {
  console.log("cinco");
} else if (num === 6) {
  console.log("seis");
} else if (num === 7) {
  console.log("siete");
} else if (num === 8) {
  console.log("ocho");
} else if (num === 9) {
  console.log("nueve");
} else if (num === 10) {
  console.log("diez");
}
