// Ejercicio 1
//Escribe un programa que pida al usuario un número e imprima por pantalla si el número es par o impar y si es positivo o negativo .
//Si la entrada no es un número,se deberá pinta "No es un número"

const readline = require("readline-sync");

const input = readline.question("Introduce tu numero: ");

const num = parseInt(input);
if (isNaN(num)) {
  console.log("No es un número");
} else if (num >= 0 && num % 2 === 0) {
  console.log("El número es positivo y par");
} else if (num < 0 && num % 2 === 0) console.log("El numero es negativo y par");
else if (num < 0 && num % 2 !== 0) console.log("El numero es negativo y impar");
else if (num >= 0 && num % 2 !== 0)
  console.log("El numero es positivo e impar");
