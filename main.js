//el ejercicio dice lo siguiente. Que es la primera funcion

/* Escribe un programa que muestre por consola los resultados de numeros de 1 a n sustituyendo los valores siguienyes
Cuando sean
multiplos de 3 = DSG
multiplos de 5 = corp 
multiplos de 3 y 5 = DSG-corp
*/

function multiposDSGcorp(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("DSG-corp");
    } else if (i % 3 === 0) {
      console.log("DSG");
    } else if (i % 5 === 0) {
      console.log("corp");
    } else {
      console.log(i);
    }
  }
}
console.log("Esta es la funcion  1: Multiplos");
multiposDSGcorp(20);

//Pero la segunda funcion segun el ejemplo recibe una cadena al parecer entonces seria algo asi 

function reemplazarNumeros(cadena) {
  let resultado = "";
  
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === '3' && cadena[i+1] === '5') {
      resultado += "DSG-corp";
      i++;
    }
    else if (cadena[i] === '3') {
      resultado += "DSG";
    }
    else if (cadena[i] === '5') {
      resultado += "corp";
    }
    else {
      resultado += cadena[i];
    }
  }
  
  console.log(resultado);
  return resultado;
}
console.log("esta es la funcion 2: Remplazar en cadena");
reemplazarNumeros("1311150001435");
