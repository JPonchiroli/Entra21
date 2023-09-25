//---------------------05/09-------------------------------
// bra marrom preta ovelha
var cabecaGado = 5000, cabecaOvelha = 3000, numAnimal = 1;

while (numAnimal != 0){
    var tipoAnimal = 0, corAnimal = 0, qtdAnimal = 0;
    tipoAnimal = parseInt(prompt("Informe o Tipo do Animal \n 1- Gado \n 2- Ovelha"));

    switch(tipoAnimal){
        case 1: corAnimal = parseInt(prompt("Informe a cor do Gado \n 1- Branco \n 2- Malhado \n 3- Marrom"));
                qtdAnimal = parseInt(prompt("Informe Quantos Gados existem no Rebanho"));

                document.write("Tipo de Animal: Gado <br>");
                if(corAnimal == 1){
                    document.write("Cor do Gado: Branco  <br>");
                } else if(corAnimal == 2){
                    document.write("Cor do Gado: Malhado  <br>");
                } else if (corAnimal == 3){
                    document.write("Cor do Gado: Marrom  <br>");
                }
                document.write("Quantidade de Gado: " + qtdAnimal + "<br>");
                document.write("Preço Final: " + (cabecaGado * qtdAnimal) + "<br>");
                document.write("------------------------------- <br>");
        break;
        case 2: corAnimal = parseInt(prompt("Informe a cor da Ovelha \n 1- Branco \n 2- Marrom \n 3- Preta"));
                qtdAnimal = parseInt(prompt("Informe Quantas da Ovelhas existem no Rebanho"));

                document.write("Tipo de Animal: Ovelha  <br>");
                if(corAnimal == 1){
                    document.write("Cor da Ovelha: Branco  <br>");
                } else if(corAnimal == 2){
                    document.write("Cor da Ovelha: Marrom  <br>");
                } else if (corAnimal == 3){
                    document.write("Cor da Ovelha: Preta  <br>");
                }
                document.write("Quantidade de Ovelha: " + qtdAnimal + "<br>");
                document.write("Preço Final: " + (cabecaOvelha * qtdAnimal) + "<br>");
                document.write("------------------------------- <br>");
    }

    numAnimal = parseInt(prompt("Ainda Existem Animais no Rebanho? \n 1- Sim \n 0- Não"))
}