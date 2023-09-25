//---------------------18/08-------------------------------
//---------------------Exercicio 01------------------------
/*
let primeiroNumero = prompt("Digite o primeiro numero: ");
let segundoNumero = prompt("Digite o segundo numero: ");
let terceiroNumero = prompt("Digite o terceiro numero: ");

resultado = (+primeiroNumero + +segundoNumero + +terceiroNumero);
document.write("Resultado: " + resultado);
*/

//---------------------Exercicio 02------------------------
/*
let salarioFuncionario = prompt("Digite o salário do funcionário: ");

let reajusteSalario = +salarioFuncionario * 0.15;

let novoSalario = +salarioFuncionario + reajusteSalario;

document.write("O novo Salário do Funcionário é: " + novoSalario)
*/

//---------------------Exercicio 03------------------------
/*
var precoKg = parseFloat(prompt("Informe o preço por Kg"));
var pesoRegistrado = parseFloat(prompt("Informe o peso registrado em Gramas"));

var valorPagar = (precoKg * (pesoRegistrado / 1000));

document.writeln("Preço por Kg.: R$" + precoKg.toFixed(2) + "<br>");
document.writeln("Valor a Pagar: R$" + valorPagar.toFixed(2) + "<br>");
*/

//---------------------Exercicio 04------------------------
/*
var salarioMensal = prompt("Informe salário mensal");
var horasTrabalhas = prompt("Informe a qntd de horas trabalhadas por mês: ");

var valorHora = +salarioMensal / +horasTrabalhas;

document.write("Salário: " + valorHora);
*/

//---------------------Exercicio 05------------------------
/*
var ano = prompt("Informe quantos anos você tem");
var mes = prompt("Informe quantos meses você tem");
var dia = prompt("Informe quantos dias você tem");

var idade = (+ano * 365) + (+mes * 30) + +dia;

document.write("Em dias você tem: " + idade)
*/

//---------------------Exercicio 06------------------------
/*
var media1 = (8 + 9 + 7) / 3;
var media2 = (4 + 5 + 6) / 3;

document.write("Media de 8 9 e 7: " + media1 + "<br>");
document.write("Media de 4 5 e 6: " + media2 + "<br>");
document.write("Soma das Médias: " + (media1 + media2) + "<br>");
document.write("Média das Médias: " + ((media1 + media2) / 2) + "<br>");
*/

//---------------------Exercicio 07------------------------
/*
var saldo = prompt("Informe o saldo");
var reajuste = prompt("Informe a Porcentagem do reajuste");

reajuste = +reajuste / 100;

document.write("Saldo Reajustado: " + (+saldo * +reajuste));
*/

//---------------------Exercicio 08------------------------
/*
var precoProduto = prompt("Informe o valor do Produto");
var desconto = prompt("Informe o valor do Desconto");

document.write("Valor do Desconto: " + (+precoProduto - (+precoProduto  * (+desconto / 100))) + "<br>")
document.write("Valor do Produto com Desconto: " + (+precoProduto  * (+desconto / 100)))
*/

//---------------------Exercicio 09------------------------
/*
var qntdPontosLider = prompt("Informe a Quantidade de Pontos do líder do campeonato");
var qntPontosLanterna = prompt("Informe a Quantidade de Pontos do Time Lanterna");

document.write("Para vencer o líder o time Lanterna deverá vencer: " + ((+qntdPontosLider - +qntPontosLanterna) / 3))
*/

//---------------------Exercicio 10------------------------
/*
var num = prompt("Informe um Numero");


document.write("Antecessor: " + (+num - 1) + "<br>");
document.write("Numero Escolhido: " + +num + "<br>");
document.write("Sucessor: " + (+num + 1) + "<br>");
*/

//---------------------Exercicio 11------------------------
/*
var cotacaoDolar = prompt("Quanto esta a cotação do dólar?");
var produtoDolar = prompt("Informe o preço de um produto em dólar");


document.write("Cotação do Dólar: " + +cotacaoDolar + "<br>");
document.write("Produto em Dólar: " + +produtoDolar + "<br>");
document.write("Valor do Produto em Reais: " + (+cotacaoDolar * +produtoDolar));
*/

//---------------------Exercicio 12 ------------------------
/*
var maxEstoque = prompt("Informe o Estque Máximo");
var minEstoque = prompt("Informe o Estque Mínimo");

document.write("Estoque Médio: " + ((+maxEstoque + +minEstoque) / 2))
*/

//---------------------Exercicio 13------------------------
/*
var nomeVendedor = prompt("Nome Vendedor");
var codPeca = prompt("Código da Peça");
var precoUnitario = prompt("Informe o Preço da Peça");
var qntdVendida = prompt("Quantidade Vendida");

document.write("Nome Vendedor: " + nomeVendedor + "<br>");
document.write("Código da Peça " + +codPeca + "<br>");
document.write("Preço Unitário " + +precoUnitario + "<br>");
document.write("Quantidade Vendida " + +qntdVendida + "<br>");

var comissao = (+precoUnitario * +qntdVendida) * 0.05;

document.write("Comissão Arrecadada " + comissao.toFixed(2))
*/

//---------------------Exercicio 14------------------------
/*
var tempoGasto = prompt("Informe o tempo gasto na viagem");
var velocidadeMedia = prompt("Informe a velocidade média");

var distancia = +tempoGasto * +velocidadeMedia;
var litrosUsados = +distancia / 12;

document.write("Velocidade média: " + velocidadeMedia + "Km/h" + "<br>");
document.write("Tempo gasto: " + tempoGasto + " Horas" + "<br>");
document.write("Distância percorrida: " + distancia + "Km" + "<br>");
document.write(
  "Quantidade de litros utilizada na viagem: " + litrosUsados + "L"
);
*/

//---------------------Exercicio 15------------------------
/*
var varA = prompt("Informe o conteúdo da variavel A");
var varB = prompt("Informe o conteúdo da variavel B");
var aux = 0;

aux = varA;
varA = varB;
varB = aux;

document.write("Valor da Variavel A: " + varA + "<br>");
document.write("Valor da Variavel B: " + varB);
*/
