//---------------------24/08-------------------------------
//---------------------Exercicio 01------------------------
/*
var sexo = prompt("Informe o seu Sexo \n F - Feminino   M - Masculino   I - Indefinido");

if (sexo == "F"){
    document.write("Sexo Feminino");
} else if (sexo == "M"){
    document.write("Sexo Masculino");
} else {
    document.write("Sexo Indefinido")
}
*/

//---------------------Exercicio 02------------------------
/*
var letra = prompt("Informe uma letra do alfabeto");

if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    document.write("Letra Informada é uma Vogal");
} else {
    document.write("Letra Informada é uma Consoante");
}
*/

//---------------------Exercicio 03-----------------------
/*
var turno = prompt("Informe o turno que você estuda \n Matutino     Vespertino      Noturno");

if (turno == "Matutino"){
    document.write("Bom dia");
} else if (turno == "Vespertino"){
    document.write("Boa Tarde");
} else if (turno == "Noturno") {
    document.write("Boa Noite")
} else {
    document.write("Valor Inválido");
}
*/

//---------------------Exercicio 04-----------------------
/*
var salario = parseFloat(prompt("Informe seu salário"));

if (salario <= 280) {
  var percAumento = 20;
  var valorAumento = salario * 0.2;
  var novoSalario = salario * 1.2;
} else if (salario <= 700) {
  var percAumento = 15;
  var valorAumento = salario * 0.15;
  var novoSalario = salario * 1.15;
} else if (salario <= 1500) {
  var percAumento = 10;
  var valorAumento = salario * 0.1;
  var novoSalario = salario * 1.1;
} else {
  var percAumento = 5;
  var valorAumento = salario * 0.05;
  var novoSalario = salario * 1.05;
}

document.write("Antigo Salário: " + salario + "<br>");
document.write("Percentual de Aumento: " + percAumento + "%" + "<br>");
document.write("Valor do Aumento: " + valorAumento + "<br>");
document.write("Novo Salário: " + novoSalario.toFixed(2) + "<br>");
document.write("--------------------------------------------------------");
*/

//---------------------Exercicio 05-----------------------
/*
var probAssassino = 0;

var pergunta1 = prompt("Telefonou para a vítima?    S/N");

if (pergunta1 == "S") {
  probAssassino++;
}

var pergunta2 = prompt("Esteve no local do crime?    S/N");

if (pergunta2 == "S") {
  probAssassino++;
}

var pergunta3 = prompt("Mora perto da vítima?    S/N");

if (pergunta3 == "S") {
  probAssassino++;
}

var pergunta4 = prompt("Devia para a vítima?    S/N");

if (pergunta4 == "S") {
  probAssassino++;
}

var pergunta5 = prompt("Já trabalhou com a vítima?     S/N");

if (pergunta5 == "S") {
  probAssassino++;
}

if (probAssassino < 2) {
  document.write("Você é Inocente");
} else if (probAssassino == 2) {
  document.write("Você é Suspeito");
} else if (probAssassino <= 4) {
  document.write("Cúmplice");
} else {
  document.write("Assassino");
}
*/

//---------------------Exercicio 06-----------------------
/*
var ano = parseInt(prompt("Informe um Ano"));

if (ano % 4 == 0) {
  if (ano % 100 != 0) {
    document.write("Ano é Bissexto");
  } else {
    document.write("Ano não é Bissexto");
  }
} else {
  document.write("Ano não é Bissexto");
}
*/

//---------------------Laço Repeticao-----------------------
//---------------------Exercicio 01-----------------------
/*
for (let index = 0; index <= 10; index++) {
  document.write(index + "\n");
}
*/

//---------------------Exercicio 02-----------------------
/*
for (let index = 0; index <= 20; index++) {
  if (index % 2 == 0) {
    document.write(index + "\n");
  }
}
*/

//---------------------Exercicio 03-----------------------
/*
var cont = 0;
var maiorNum = 0;

while (cont != -1) {
  var num = parseInt(prompt("Informe um número"));

  if (num > maiorNum) {
    maiorNum = num;
  }

  var cont = prompt("Digite -1 para Finalizar");
}

document.write("Maior Número: " + maiorNum);
*/

//---------------------Exercicio 04-----------------------
/*
var num = parseInt(prompt("Informe o numero da Tabuada"));

for (let index = 0; index <= 10; index++) {
  document.write(num + " X " + index + ": " + num * index + "<br>");
}
*/

//---------------------Exercicio 05-----------------------
/*
var somaPar = 0;

for (let index = 0; index <= 100; index++) {
  if (index % 2 == 0) {
    somaPar += index;
  }
}

document.write("Soma dos Números Pares: " + somaPar);
*/

//---------------------Exercicio 06-----------------------
/*
var cont = 0;

document.write("Lista Números Pares: " + "<br>");
while (cont != -1) {
  var num = parseInt(prompt("Informe um número"));

  if (num % 2 == 0) {
    document.write(num + "<br>");
  }

  var cont = prompt("Digite -1 para Finalizar");
}
*/

//---------------------Exercicio 07-----------------------
/*
var somaNum = 0;
var contaNum = 0;
var cont = 0;

while (cont != -1) {
  var num = parseInt(prompt("Informe um número"));

  somaNum += num;
  contaNum++;
  var cont = prompt("Digite -1 para Finalizar");
}
console.log(somaNum);
document.write("Média dos Números: " + somaNum / contaNum);
*/

//---------------------Exercicio 08-----------------------
/*
var cont = 1;

document.write("Lista Números Ímpares: " + "<br>");
while (cont != 0) {
  var num = parseInt(prompt("Informe um número"));

  if (num % 2 != 0) {
    document.write(num + "<br>");
  }

  var cont = prompt("Digite 0 para Finalizar");
}
*/
