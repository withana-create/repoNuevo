//Ejercicio 8
//Escribe un programa que reciba dos números por consola que serán la base y la altura de un rectángulo de asteriscos que se deberá pintar por pantalla .

const readline = require("readline-sync");

const altura = readline.question("Introduce un numero altura: ");
const base = readline.question("Introduce un numero base: ");

if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
  console.log("Por favor introduce numeros correctos");
} else {
  //para determinar la altura
  for (let i = 0; i < altura; i++) {
    let fila = "";

    for (let j = 0; j < base; j++) {
      if (i === 0 || i === altura - 1 || j === 0 || j === base - 1) {
        fila += "*";
      } else {
        fila += " ";
      }
    }
    console.log(fila);
  }
}
