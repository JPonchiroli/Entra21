// Definir tipos com Type
/*
type Pessoa = {
   nome: string,
   idade: number
}


const pessoa1: Pessoa = {
   nome: "João Pedro",
   idade: 18
}


console.log(pessoa1);
*/


// Definir tipos com interface
/*
interface Veiculo {
   marca: string,
   ano: number
}


const carro: Veiculo = {
   marca: "BMW",
   ano: 1998
}


console.log(carro);
*/


// Type Aliases


/*
type Coordenada = [number, number];


const ponto: Coordenada = [10, 20];


console.log(ponto);
*/


// Tipos Personalizados para Funcoes
/*
type Calculo = (a: number, b: number) => number;


const somar: Calculo = (a, b) => a + b;


console.log(somar(4, 6));
*/


// Union types


/*
type Status = "Encerrado" | "Em Andamento" | "Concluído";


const statusProjeto: Status = "Em Andamento"


console.log(statusProjeto);

*/
