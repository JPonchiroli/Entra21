//---------------------04/09-------------------------------
//---------------------Nosso Exercicio-------------------------------
/*
var nomePaciente, estadoPaciente, idadePaciente = 0, numPacientes = 1, totalPacientes = 0;
var numVacinas = 0, totalVacinas = 0;


while(numPacientes != 0){
  totalPacientes++;

  nomePaciente = prompt("Informe o seu Nome!");

  alert("Olá " + nomePaciente + "\n Bem Vindo ao nosso Hospital");
  idadePaciente = parseInt(prompt("Para prescrever o seu tratamento informe sua idade"));

  if(idadePaciente <= 17){
    numVacinas = 1;
  }else if(idadePaciente <= 40){
    numVacinas = 2;
  }else if(idadePaciente <= 60){
    numVacinas = 3;
  }else{
    numVacinas = 4;
  }

  totalVacinas += numVacinas;

  alert("Certo " + nomePaciente + " você deverá tomar " + numVacinas + " doses da vacina para ficar imune ao vírus");

  numPacientes = parseInt(prompt("Ainda existem pessoas na fila? \n 1- Sim     0- Não"));
}

document.write("Total de Pacientes Atendidos: " + totalPacientes + "<br>");
document.write("Total de Vacinas Necessárias: " + totalVacinas);
*/

//---------------------Exercicio Julio-------------------------------

var produtos = [];
var precoProduto = []
var totProdutos = 0;
var formaPagamento, qntProdutos;

qntProdutos = parseInt(prompt("Informe a Quantidade de Produtos"));

for (let index = 0; index < qntProdutos; index++) {
  produtos[index] = prompt("Informe o Produto que Deseja Comprar");
    precoProduto = parseInt(prompt("Informe o Preço do(a) " + produtos[index]));
    totProdutos += precoProduto;  
}

formaPagamento = prompt("Informe a Forma de Pagamento \n Débito   Crédito  \n Pix   Dinhero");


document.write("Produtos Comprados: <br>");

for (let index = 0; index < qntProdutos; index++) {
  document.write(produtos[index] + "<br>");
}

document.write("Total da Compra: " + totProdutos + "<br>");
document.write("Forma de Pagamento: " + formaPagamento);