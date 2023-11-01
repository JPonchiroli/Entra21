// Declaração Genérica
/*
function identidade<T>(valor: T): T{ // Generics permitem com que o código aceite qualquer tipo de valor
   return valor;
}


const numero  = identidade(42);
const texto = identidade("João");




console.log(numero);
console.log(texto);
*/




// Generics em classes
/*
class Pilha<T> {
   elementos: T[] = []
  
   push(item: T){
       this.elementos.push(item) // push insere o elemento
   }


   pop(): T | undefined {
       return this.elementos.pop(); // pop remove e recupera elementos
   }
}


const pilhaNumeros = new Pilha<number>();
pilhaNumeros.push(1);
pilhaNumeros.push(2);




const pilhaTexto = new Pilha<string>();
pilhaTexto.push("Olá");
pilhaTexto.push("João");


console.log(pilhaNumeros.pop());
console.log(pilhaTexto.pop());
*/


//Restrições de Tipo


/*
function soma(a: number, b: number): number;
function soma(a: string, b: string): string;
function soma(a: any, b: any): any {
 return a + b;
}


const resultadoNumero = soma(3, 4);
const resultadoTexto = soma("Olá" , " Mundo");


console.log(resultadoNumero);
console.log(resultadoTexto);
*/

