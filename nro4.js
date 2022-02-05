console.log("Ejercicio nro 4"); // Titulo del script

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

let texto = prompt("Ingrese el mensaje");
let veces = prompt("Cuantas repeticiones desea");

function repiteTexto(str, x) {
  for (i = 0; i < x; i++) {
    alert("Repeticion nro " + Number(i + 1) + " del mensaje: " + str);
  }
}

repiteTexto(texto, veces);
