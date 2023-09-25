//---------------------31/08-------------------------------
//---------------------Exercicio 01------------------------
/*
var numeros = [];
var numerosPares = [];
var numerosImpares = [];
var qtdPar = 0,
  qtdImpar = 0;

for (let index = 0; index < 6; index++) {
  numeros[index] = prompt("informe um numeros");
  if (numeros[index] % 2 == 0) {
    qtdPar++;
    numerosPares[index] = numeros[index];
    numerosImpares[index] = "Não é Ímpar";
  } else {
    qtdImpar++;
    numerosImpares[index] = numeros[index];
    numerosPares[index] = "Não é Par";
  }
}

document.write("Números Digitados: ");

for (let index = 0; index < 6; index++) {
  document.write(numeros[index] + "  | ");
}

document.write("<br>");

document.write("Numeros Pares: " + qtdPar + "<br>");
document.write("Numeros Ímpares: " + qtdImpar + "<br>");

document.write("Números Pares: ");

for (let index = 0; index < 6; index++) {
  document.write(numerosPares[index] + "  | ");
}

document.write("<br>");

document.write("Números Ímpares: ");

for (let index = 0; index < 6; index++) {
  document.write(numerosImpares[index] + "  | ");
}
*/
//---------------------Exercicio 02------------------------
/*
var numeros = [];
var qtdPossitiva = 0,
  qtdNegativa = 0;

for (let index = 0; index < 6; index++) {
  numeros[index] = parseInt(prompt("informe um numeros"));
  if (numeros[index] >= 0) {
    qtdPossitiva += numeros[index];
  } else {
    qtdNegativa++;
  }
}

document.write("Números Digitados: ");

for (let index = 0; index < 6; index++) {
  document.write(numeros[index] + "  | ");
}

document.write("<br>");

document.write("Numeros Negativos: " + qtdNegativa + "<br>");
document.write("Soma dos Números Positivos: " + qtdPossitiva + "<br>");
*/

//---------------------Exercicio 03------------------------
/*
var nomes = [];
var numeroPessoas = 0;
var pessoaEscolhida;
var cont = 1;
var opcao = 0;

while (cont === 1) {
  opcao = parseInt(
    prompt(
      "Informe sua Escolha \n 1 Cadastrar Nome \n 2 Pesquisar Nome \n 3 Listar Todos os Nomes \n 0 Sair do Programa"
    )
  );

  switch (opcao) {
    case 1:
      for (let index = 0; index <= 0; index++) {
        nomes[numeroPessoas] = prompt("Informe o Nome de uma Pessoa");
        numeroPessoas++;
      }
      break;
    case 2:
      pessoaEscolhida = prompt("Informe o nome da Pessoa ");
      var posicao = nomes.indexOf(pessoaEscolhida);
      document.write("Pessoa Procurada: <br>");
      if (posicao !== -1) {
        document.write("O elemento " + pessoaEscolhida + " está na posição " + posicao + " do vetor.");
      } else {
        document.write(
          "O elemento " + pessoaEscolhida + "não foi encontrado no vetor."
        );
      }
      cont -= 1;
      break;
    case 3:
      document.write("Nomes Cadastrados: <br>");
      for (let index = 0; index < numeroPessoas; index++) {
        document.write(nomes[index] + "<br>");
      }
      cont -= 1;
      break;
    case 0:
      cont -= 1;
      break;
  }
}
*/
//---------------------Exercicio 04------------------------
/*
var numeros = [];

for (let index = 0; index < 10; index++) {
  numeros[index] = parseInt(prompt("Informe o " + (index + 1) + "° Número"));
}

let numeroProcurado = parseInt(prompt("Informe o número Procurado"));
let posicao = numeros.indexOf(numeroProcurado);

if (posicao !== -1) {
  document.write("O Número " + numeroProcurado + " está na posição " + posicao + " do vetor.");
} else {
  document.write(
    "O Número " + numeroProcurado + " não foi encontrado no vetor."
  );
}
*/