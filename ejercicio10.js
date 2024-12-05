//Ejercicio 10
// Escribe un programa que genere un número aleatorio del 1 al 10.
//Haz que el programa pregunte al usuario números hasta que acierte el número aleatorio generado.
//Cuando el usuario acierte el número aleatorio,el programa mostrará por pantalla el número de intentos .
//Este ejercicio lo he resuelto usando un mapa .
const readline = require("readline-sync");

const randomNumber = Math.floor(Math.random() * 10) + 1;

let intentos = 0;
let num = 0;

while (num !== randomNumber) {
  const input = readline.question(
    "Intenta adivinar el numero ! Introduce un numero del 1 al 10 : "
  );

  num = parseInt(input);
  intentos++;

  if (isNaN(num) || num > 10 || num < 0) {
    intentos--;
    console.log("numero invalido");
  } else if (num !== randomNumber) {
    console.log("numero incorrecto.Intenta de nuevo");
  }
}
console.log(
  "Correcto , has adivinado el numero tras " + intentos + " intentos"
);
