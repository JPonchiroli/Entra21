// Dados temporários para a lista de vagas (simulando um backend)
const cadastro = [];

// Função para salvar o cadastro de reserva
function salvarCadastro() {
    const cpf = document.getElementById("cpf").value;
    const nome = document.getElementById("nome").value;
    const dataNasc = document.getElementById("dataNasc").value;
    const nomeVacina = document.getElementById("nomeVacina").value;
    const dataVacinaStr = new Date(document.getElementById("dataVacina").value);

    // Adicione validações se necessário
    const dataVacina = new Date(dataVacinaStr);
    const dataReforco = new Date(dataVacina);
    dataReforco.setDate(dataReforco.getDate() + 30);

    // Adicione o novo cadastro à lista de vagas
    cadastro.push({ cpf, nome, dataNasc, nomeVacina, dataVacina, dataReforco});

    // Limpe o formulário
    document.getElementById("cadastro-form").reset();

    // Exiba uma mensagem de confirmação
    alert("Cadastro realizado com sucesso!");

    // Atualize a lista de vagas na tela
    listarCadastros();
}

// Event listener para o formulário de cadastro
document.getElementById("cadastro-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio do formulário padrão
    salvarCadastro();
});

// Inicialize a lista de vagas na tela de listagem
listarCadastros();


// Função para exibir as vagas na tela de listagem
function listarCadastros() {
    const cadastroList = document.getElementById("vagas-list");
    cadastroList.innerHTML = "";

    cadastro.forEach(cadastro => {
        const listItem = document.createElement("li");
        listItem.textContent = `CPF: ${cadastro.cpf} | Nome Completo: ${cadastro.nome} | Data Nascimento: ${cadastro.dataNasc} | 
        Nome da Vacina: ${cadastro.nomeVacina} | Data de Vacinação: ${cadastro.dataVacina.toISOString().split('T')[0]} | 
        Data Reforco: ${cadastro.dataReforco.toISOString().split('T')[0]}`;
        cadastroList.appendChild(listItem);
    });

}
