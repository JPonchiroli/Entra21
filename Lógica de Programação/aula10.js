//---------------------29/08-------------------------------
//---------------------Exercicio 01------------------------
/*
var somaNumeros = 0;
var vetNumeros = [];

for (let i = 0; i < 5; i++) {
  vetNumeros[i] = parseInt(prompt("Informe um Número"));
  somaNumeros += vetNumeros[i];
  document.write("Numero " + (i + 1) + ": " + vetNumeros[i] + "<br>");
}

document.write("Soma Numeros: " + somaNumeros);
*/

//---------------------Exercicio 02------------------------

var vetNomes = [];

for (i = 0; i < 5; i++) {
  vetNomes[i] = prompt("Informe o Nome");
  document.write(vetNomes[i] + "<br>");
}

document.write("----------------------------- <br>");
document.write("Ordem Inversa <br>");

for (i = 5; i >= 0; i--) {
  document.write(vetNomes[i - 1] + "<br>");
}
