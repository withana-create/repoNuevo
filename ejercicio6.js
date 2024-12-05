//Ejercicio 6
//Escribe un programa que pida al usuario un año y que imprima por pantalla si dicho año es bisiesto o no.

const readline = require("readline-sync");

let bisiesto = false;

while (!bisiesto) {
  const input = parseInt(readline.question("Introduce un año: "));

  if ((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0) {
    bisiesto = true;
    console.log("el año es bisiesto");
  } else {
    bisiesto = false;
    console.log("el año no es bisiesto .Vuelve a intentarlo");
  }
}

// He añadido la parte de que si no es bisiesto vuelve a lanzar el mensaje para que lo intentes .
