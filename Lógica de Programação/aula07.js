//---------------------23/08-------------------------------
//---------------------Exercicio 01------------------------
/*
var contador = prompt("Informe um Número");

while (contador > 0) {
  document.write("NR:" + contador + "<br>");
  contador--;
}
*/

//---------------------Exercicio 02------------------------
/*
var contaAluno = 1;

while (contaAluno <= 2) {
  var nomeAluno = prompt("Insira o nome do Aluno");
  var nota1 = parseFloat(prompt("Insira a nota da Prova 1"));
  var nota2 = parseFloat(prompt("Insira a nota da Prova 2"));
  var resultado = (nota1 + nota2) / 2;
  document.write("Nome Aluno: " + nomeAluno + "<br>");
  if (resultado > 7) {
    document.write("Media Aluno: " + resultado + "<br>");
    document.write("STATUS: Aprovado!" + "<br>");
  } else {
    document.write("Media Aluno: " + resultado + "<br>");
    document.write("STATUS: Reprovado!" + "<br>");
  }
  document.write("---------------------------------------------" + "<br>");
  contaAluno++;
}
*/

//---------------------Exercicio 03------------------------
/*
var contaAluno = 1;


var numAluno = parseInt(prompt("Informe a Quantidade de Alunos"));
var numNotas = parseInt(prompt("Informe a Quantidade de Notas do Semestre"));

while (contaAluno <= numAluno) {
  var nomeAluno = prompt("Informe o nome do + numAluno +° Aluno");
  var contaNotas = 1; 
  var totNotas = 0;
  while (contaNotas <= numNotas) {
    var valorNota = parseFloat(prompt("Informe qual foi a nota do " + nomeAluno + " na " + contaNotas + "° avaliação"));
    totNotas += valorNota;
    contaNotas++;
  }
  contaAluno++;
  document.write("Nome Aluno: " + nomeAluno + "<br>");
  document.write("Media do Semestre: " + (totNotas / numNotas).toFixed(1) + "<br>");
  document.write("---------------------------------------------------" + "<br>");
}
*/