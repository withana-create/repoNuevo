//Ejercicio 4
//Escribe un programa que tome un número como entrada e imprima la tabla de multiplicar de ese número del 1 al 10.

const readline = require("readline-sync");

const input = readline.question("Introduce tu numero: ");

for (let i = 1; i <= 10; i++) {
  // input * i;
  // console.log("La multiplicacion de " + input + " es = " + input * i);
  console.log(
    "la multiplicación de " + input + " x " + i + "es : " + input * i
  );
}
