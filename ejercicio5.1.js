//Ejercicio 5
//Escribe un programa que tome una cadena como entrada y cuente el número de vocales (a,e,i,o,u) en la cadena .

const readline = require("readline-sync");

const input = readline.question("Introduce un texto: ");

function contarVocales(texto) {
  let mapa = new Map();
  let vocales = "aeiouAEIOU";
  for (letra of input) {
    if (vocales.includes(letra)) {
      if (mapa.has(letra)) {
        mapa.set(letra, mapa.get(letra) + 1);
      } else {
        mapa.set(letra, 1);
      }
    }
  }
  return mapa;
}
let resultado = contarVocales(input);
console.log(resultado);
