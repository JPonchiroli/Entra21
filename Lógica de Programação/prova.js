//---------------------11/09-------------------------------
//---------------------Prova-------------------------------

var notas = [];

for (let numAlunos = 0; numAlunos < 3; numAlunos++) {
    document.write("---------------------------------Boletim Escolar--------------------------------------- <br>");
    var nomeAluno = prompt("Informe o Nome do Aluno");    
    document.write("Nome Aluno: " + nomeAluno + " ----------  ");
    var frequencia = parseInt(prompt("Informe a Frequência do(a) " + nomeAluno + " em %"));
    if(frequencia < 75){
        document.write("Situação: Reprovado por Falta <br>");
        document.write("-------------------------------------------------------------------------------------------- <br>");
        document.write("<br>")
    } else {
        var totalNotas = 0, media = 0;
        for (let numNota = 0; numNota < 4; numNota++) {
        notas[numNota] = parseFloat(prompt("Informe a " + (numNota + 1) + "° nota do(a) " + nomeAluno))   ;
        totalNotas += notas[numNota];
        }
        
        media = totalNotas / 4;
        if(media < 5.5){
            document.write("Situação: Aluno Reprovado <br>");
        } else if (media < 7.49){
            document.write("Situação: Aluno em Recuperação <br>");
        } else {
            document.write("Situação: Aluno Aprovado <br>");
        }

        document.write("Notas: " + notas[0] + " - " + notas[1] + " - " + notas[2] + " - " + notas[3] + " -------");

        document.write(" Média: " + media.toFixed(1) + "<br>");
        document.write("-------------------------------------------------------------------------------------------- <br><br>");
        document.write("<br>")
    }
}