/*
1 Escreva um programa que calcule e exiba a soma dos quadrados dos 20 primeiros números inteiros 
positivos ímpares a partir do número informado pelo usuário menor que 10 e maior que zero


2 Escreva um programa que leia um conjunto de números positivos que serão informados 
pelo usuário, e apresente qual foi o maior e o menor a cada interação, isso é cada vez que o 
usuário informar um número valide se ele é o menor ou o maior já digitado. Quando o usuário desistir de informar ele deve ter opção de sair. 

3 - Faça um programa que leia as variáveis C e N, respectivamente código e* número de horas 
trabalhadas de um operário. E calcule o salário sabendo-se que* ele ganha R$ 10,00 por hora. 
Quando o número de horas exceder a 50, calcule o* excesso de pagamento armazenando-o na variável 
E, caso contrário zerar tal* variável. A hora excedente de trabalho vale R$ 20,00. 
No final do processamento* imprimir o salário total e o salário excedente. 
O programa só deve parar de* rodar quando o usuário responder "S" na seguinte pergunta, "Deseja encerrar o* programa?".

4 - Faça um programa que dada a idade de um nadador, classifique-o em uma das seguintes categorias:
- Infantil A = 5 a 7 anos
- Infantil B = 8 a 11 anos
- Juvenil A = 12 a 13 anos
- Juvenil B = 14 a 17 anos
- Adultos = Maiores de 18 anos


5 - Uma rainha requisitou os serviços de um monge e disse-lhe que pagaria qualquer preço. O monge, necessitando
de alimentos, indagou à rainha sobre o pagamento, se poderia ser feito com grãos de trigo dispostos em um
tabuleiro de xadrez, de tal forma que o primeiro quadro deveria conter apenas um grão e os quadros
subseqüentes, o dobro do quadro anterior. A rainha achou o trabalho barato e pediu que o serviço fosse
executado, sem se dar conta de que seria impossível efetuar o pagamento. Faça um programa para calcular o
número de grãos que o monge esperava receber.

6 - Dada uma seqüência de n números (vetor de inteiros), imprimi-la na ordem inversa que foi realizada a leitura.

7 - Fazer um programa que sorteie um número de 0 a 100 e que permita que o usuário (sem conhecer o número
sorteado) tente acertar. Caso não acerte, o programa deve imprimir uma mensagem informando se o número
sorteado é maior ou menor que a tentativa feita. Ao acertar o número, o programa deve imprimir a quantidade de
tentativas feitas.

8 - Fazer um programa que leia uma frase e imprima somente as vogais.
*/

//---------------------25/08-------------------------------

//---------------------Exercicio 04------------------------
/*
var classifiq = [
  "Infantil A",
  "Infantil B",
  "Juvenil A",
  "Juvenil B",
  "Adultos",
];

var qtdNadador = prompt("Informe Quantos Nadadores serão Classificados");

for (let index = 0; index < qtdNadador.length; index++) {
  var idadeNadador = 0;
  idadeNadador = prompt("Informe a idade do nadador");
  if (idadeNadador >= 5 && idadeNadador <= 7) {
    document.write("Idade Nadador: " + idadeNadador + "<br>");
    document.write("Classificação Nadador: " + classifiq[0] + "<br>");
    document.write(
      "----------------------------------------------------------- <br>"
    );
  } else if (idadeNadador <= 11) {
    document.write("Idade Nadador: " + idadeNadador + "<br>");
    document.write("Classificação Nadador: " + classifiq[1] + "<br>");
    document.write(
      "----------------------------------------------------------- <br>"
    );
  } else if (idadeNadador <= 13) {
    document.write("Idade Nadador: " + idadeNadador + "<br>");
    document.write("Classificação Nadador: " + classifiq[2] + "<br>");
    document.write(
      "----------------------------------------------------------- <br>"
    );
  } else if (idadeNadador <= 17) {
    document.write("Idade Nadador: " + idadeNadador + "<br>");
    document.write("Classificação Nadador: " + classifiq[3] + "<br>");
    document.write(
      "----------------------------------------------------------- <br>"
    );
  } else if (idadeNadador > 18) {
    document.write("Idade Nadador: " + idadeNadador + "<br>");
    document.write("Classificação Nadador: " + classifiq[4] + "<br>");
    document.write(
      "----------------------------------------------------------- <br>"
    );
  } else {
    document.write("Idade Nadador: " + idadeNadador + "<br>");
    document.write(
      "Classificação Nadador: Classificação não Definida" + "<br>"
    );
    document.write(
      "----------------------------------------------------------- <br>"
    );
  }
}
*/
