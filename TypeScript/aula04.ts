// Tipagem de Funções

// Declaração de Função


/*
function soma(a: number, b: number):number{
   return a + b;
}


console.log(soma(10,5));
*/




//Tipos Opcionais e Padrão


/*
function saudacao(nome: string, saudacaoExtra?: string): string { // ? simboliza que ele pode ou não aparecer
   if(saudacaoExtra) {
       return `Olá ${nome}! ${saudacaoExtra}`;
   }
   return `Olá ${nome}`
}


console.log(saudacao('Joâo'))
console.log(saudacao('Joâo', 'Bem Vindo'))
*/


//Assinaturas de Funções


/*
type FuncaoSoma = (a: number, b: number) => number;


const soma: FuncaoSoma = (a, b) => a + b  // => representa return


console.log(soma(1, 2))


*/


// Callback e Funções de Alto Nível
/*
function processarDados(dados: number[], callback: (item: number ) => void){
   for(const item of dados) {
       callback(item);
   }
}


function callbackParaImpressao(item: number){
   console.log(item)
}


const numeros = [1, 2, 3, 4, 5];


processarDados(numeros, callbackParaImpressao);
*/

