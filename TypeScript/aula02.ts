//---------------------30/10------------------------------
                //Tipagem de Variaveis

// Declaracao de Tipos Primitivos
/*
let numero: number = 10;
let pessoa: string = "João Ponchiroli";
let verdadeiro: boolean = true;
let falso: boolean = false;
let indefinida: undefined;


console.log("Número: " + numero);
console.log("Pessoa: " + pessoa);
console.log("Verdadeiro: " + verdadeiro);
console.log("Faso: " + falso);
console.log("Indefinida: " + indefinida);
*/

//--------------------------------------------------------
// Tipos Personalizados


/*
type Pessoa = {
   nome: string
   idade: number
};


const pessoa1: Pessoa = {
   nome: "João Ponchiroli",
   idade: 17
};


console.log(pessoa1.nome);
console.log(pessoa1.idade + " Anos");


pessoa1.idade = 18;


console.log(pessoa1.idade + " Anos")
*/


//--------------------------------------------------------
// Union types e Type Aliases


/*
type Idade = number | null;


const idade1: Idade = 30;
const idade2: Idade = null;
//const idade3: Idade = "28" Erro pois "28" é uma String, type Idade recebe apenas numbers e nulls


console.log(idade1 + " Anos");
console.log(idade2);


//Exemplos


type TipoA = string | number;
type TipoB = "Sucesso" | "Erro";
type TipoC = null | undefined;
type TpoD = number | string | boolean | null | undefined;
*/


//--------------------------------------------------------
//Arrays e Objetos Tipados

/*
let numeros: number[] = [1, 2, 3];
let alunos: string[] = ["João", "Maria", "José"];

//console.log(numeros[1]);
//console.log(alunos[2]);

let pessoa: {nome: string, idade: number} = {nome: "Paulo", idade: 45}; //Variavel Recebe um Objeto

//console.log(pessoa.nome);
//console.log(pessoa.idade + " Anos");
*/

//--------------------------------------------------------
//Tipo de Retorno
function cumprimentar(nome: string): string {
    return `Olá, ${nome}!`;
}