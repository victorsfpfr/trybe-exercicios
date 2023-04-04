/* Parte I
   01 Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.
   Modifique a variável para que respeite o escopo em que está sendo declarada. 
   Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.
   Copie o código a seguir e rode-o para verificar sua saída.
 */

   function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }
   /*  console.log('Idade fora do for:', idade) // retire essa linha ao implementar o tipo de variável correta. */
  }
  imprimeIdade()

   /* 02 Altere o valor das propriedades do objeto para que respeite as características da variável do tipo const.
  Copie o código a seguir e rode-o para verificar sua saída. */
  
    // Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
    const pessoa = {
        nome: 'Henri',
        idade: 20
      }
     /*  pessoa = {
        nome: 'Luna',
        idade: 19
      } // Altere essa estrutura para corrigir o erro. */
      pessoa.nome = 'Luna'
      pessoa.idade = 19
       
      console.log('Nome:', pessoa.nome);
      console.log('Idade:', pessoa.idade);

/*   03 Modifique a variável para que não ocorra Erro.
Copie o código a seguir e rode-o para verificar sua saída. */

let favoriteFood = 'Lasanha';
favoriteFood = 'Hambúrguer';
console.log(favoriteFood);

/* 04 Modifique as concatenações para template literals.
Copie o código a seguir.
 */

const name = 'Adriana';
const lastName = 'Soares';
console.log(`Olá, ${name} ${lastName}!`);

function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de ${a} + ${b} é: ${a + b}`);

/* 05 Modifique a estrutura das funções a seguir para que elas sejam arrow functions.
Transforme a função numeroAleatorio em uma arrow function. */

/* function numeroAleatorio() {
    return Math.random()
  } */
  

  const numeroAleatorio = () => Math.random()
  console.log(numeroAleatorio());

/* 06 Transforme a função hello em uma arrow function.
Copie o código a seguir.
 */
/* function hello(nome) {
    return `Olá, ${nome}!`
  } */
  let nome = 'Ivan';
 const hello = (nome) => `Ola, ${nome}!` 
 console.log(hello(nome));


 /* 07 Transforme a função nomeCompleto em uma arrow function. */
/* function nomeCompleto(nome2, sobrenome) {
    return `${nome2} ${sobrenome}`
  } */
  let nome2 = 'Ivan';
  let sobrenome = 'Pires';
  
  const nomeCompleto = (nome2, sobrenome) => `${nome2} ${sobrenome}`
  
  console.log(nomeCompleto(nome2, sobrenome));

 
  /* 08 Altere a expressão if/else utilizando ternary operator. */
  let speed = 90;
  const speedCar = (speed >= 120) ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;
  /*   if (speed >= 120) {
      return `Você ultrapassou o limite de velocidade`;
    } else {
      return `Você está na velocidade permitida`;
    }
  }; */
  console.log(speedCar);

    