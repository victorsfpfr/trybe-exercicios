/* // Vamos criar um projeto que será capaz de ler/receber três valores 
// inteiros e testar se são positivos. Em seguida, verifica se formam 
// um triângulo e, caso isso seja possível, verifica qual é o tipo de triângulo, 
// além de calcular o seu perímetro. Ao final, 
// uma mensagem deverá ser impressa na saída do console. 

// Ufa... E aí, aceita o desafio?

// Dados iniciais do desafio
// Valores dos lados em cm

let lado1 = 9;
let lado2 = 7;
let lado3 = 8;

function checkIntegerPositive (l1, l2, l3) {
     if (l1, l2, l3 > 0 && l1,l2, l3 % 1 === 0) {
    console.log("true")
   } else {
    console.log("Falso")
   }
}

function checkItsATriangle (l1, l2, l3)

(checkIntegerPositive(lado1, lado2, lado3))// Vamos criar um projeto que será capaz de ler/receber três valores 
// inteiros e testar se são positivos. Em seguida, verifica se formam 
// um triângulo e, caso isso seja possível, verifica qual é o tipo de triângulo, 
// além de calcular o seu perímetro. Ao final, 
// uma mensagem deverá ser impressa na saída do console. 

// Ufa... E aí, aceita o desafio?

// Dados iniciais do desafio
// Valores dos lados em cm

let lado1 = 9;
let lado2 = 7;
let lado3 = 8;

function checkIntegerPositive (l1, l2, l3) {
     if (l1, l2, l3 > 0 && l1,l2, l3 % 1 === 0) {
    console.log("true")
   } else {
    console.log("Falso")
   }
}

function checkItsATriangle (l1, l2, l3)

(checkIntegerPositive(lado1, lado2, lado3))





// 2. Crie uma função `checkItsATriangle` que verifica se os valores dos 
//    lados formam um triângulo.
// - a condição é que o valor de um lado deve sempre ser menor 
//   que a soma dos valores dos outros dois lados, ou seja, 
//   l1 < l2 + l3 e l2 < l1 + l3 e l3 < l1 + l2.
// - a função deve receber 3 parâmetros (l1, l2, l3); 
// - dica: use o operador E (&&);
// - se a condição for satisfeita, a função deve retornar true;
// - se a condição não for satisfeita, a função deve retornar false.




// 2. Crie uma função `checkItsATriangle` que verifica se os valores dos 
//    lados formam um triângulo.
// - a condição é que o valor de um lado deve sempre ser menor 
//   que a soma dos valores dos outros dois lados, ou seja, 
//   l1 < l2 + l3 e l2 < l1 + l3 e l3 < l1 + l2.
// - a função deve receber 3 parâmetros (l1, l2, l3); 
// - dica: use o operador E (&&);
// - se a condição for satisfeita, a função deve retornar true;
// - se a condição não for satisfeita, a função deve retornar false. */



function maisRepetido(array) {
    // cria objeto para armazenar contagem de cada número
    const contagem = {};
    for (let i = 0; i < array.length; i++) {
      const numero = array[i];
      if (contagem[numero]) {
        contagem[numero]++;
      } else {
        contagem[numero] = 1;
      }
    }
  
    // encontra o número com maior contagem
    let numeroMaisRepetido;
    let contagemMaxima = 0;console.log(verificaFimPalavra(palavra3,palavra4))
    for (const numero in contagem) {
      if (contagem[numero] > contagemMaxima) {
        contagemMaxima = contagem[numero];
        numeroMaisRepetido = numero;
      }
    }
  
    return Number(numeroMaisRepetido);
  }
  const array1 = [2, 3, 2, 5, 8, 2, 3];
  console.log(maisRepetido(array1)); // 2
  
  const array2 = [2, 3, -2, 3, -2, 2, 3];
  console.log(maisRepetido(array2)); // 3
    