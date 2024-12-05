// Programa que solicite un número al usuario del 0 al 10 y devuelva el número escrito en letras .Si no es un numero o no está en el rango del 0 al 10 , no es un numero
//y se deberá volver a solicitar un número .
const readlineSync = require("readline-sync");

// Función que solicita el número y lo convierte a letras
//resolví el ejercicio con un map .
function solicitarNumero() {
  const numerosEnLetras = [
    "cero",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
    "diez",
  ];
  let numero = readlineSync.question("Introduce un numero entre 0 y 10: ");

  // Verificar si el número es válido (un número entero en el rango 0-10)
  if (!isNaN(numero) && numero >= 0 && numero <= 10) {
    // Convertir a número entero y mostrar el número en letras
    numero = parseInt(numero);
    console.log("El numero en letras es: " + numerosEnLetras[numero]); // Concatenación tradicional
  } else {
    console.log(
      "No es un número válido o está fuera del rango. Intenta de nuevo."
    );
  }
}

solicitarNumero();
