//Ejercicio 7
//Escribe un programa que reciba un número del usuario y pinte un triángulo de asteriscos cuya altura sea el número recibido.

const readline = require("readline-sync");

const input = readline.question("Introduce un numero: ");
const num = parseInt(input);
if (isNaN(num)) {
  console.log("Introduce un numero valido");
} else {
  for (i = 1; i <= input; i++) {
    //Bucle para generar número de líneas (es decir, la altura según input)
    let linea = " ";
    for (e = 0; e <= input - i; e++) {
      //Bucle para generar espacios en blanco antes de los asteriscos.
      linea += " ";
    }
    for (k = 0; k < 2 * i - 1; k++) {
      //Bucle para generar asteriscos simétricamente.
      linea += "*";
    }

    console.log(linea);
  }
}
