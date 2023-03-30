// Vamos criar um projeto que será capaz de ler/receber três valores 
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


(checkIntegerPositive(lado1, lado2, lado3))




// 1. Crie uma função `checkIntegerPositive` que verifica se os valores 
//    dos lados são inteiros e positivos.
// - a condição é que todos os valores dos lados devem ser maiores que zero;
// - a função deve receber 3 parâmetros (l1, l2, l3);
// - dica: use o operador E (&&);
// - se a condição for satisfeita, a função deve retornar true;
// - se a condição não for satisfeita, a função deve retornar false.