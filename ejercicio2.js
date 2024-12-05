// Ejercicio 2
//Escribe un programa que pida al usuario 3 números y que pinte por pantalla si al menos uno de ellos es par .

const readline = require("readline-sync");

const input1 = readline.question("Introduce tu primer numero: ");
const input2 = readline.question("Introduce tu segundo numero: ");
const input3 = readline.question("Introduce tu tercer numero: ");

if (input1 % 2 === 0 || input2 % 2 === 0 || input3 % 2 === 0) {
  console.log("hay al menos un numero par");
} else {
  console.log("no hay numeros pares");
}
