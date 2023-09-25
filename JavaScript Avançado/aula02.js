//---------------------18/09-------------------------------

var pessoa = {
  nome: "João Ponchiroli",
  idade: "109.092.089-05",
  profissão: "Programador",
}

document.write("Nome: " + pessoa.nome + "<br>");
document.write("CPF: " + pessoa.idade + "<br>");
document.write("Profissão: " + pessoa.profissão + "<br>");

pessoa.estadoCivil = "Casado";
document.write("Estado Civil: " + pessoa.estadoCivil);