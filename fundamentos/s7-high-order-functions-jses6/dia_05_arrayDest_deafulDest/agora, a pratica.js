// Exercício 1
// Escreva a função swap, que, dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: 
// você precisa fazer essa função gastando apenas 1 linha. O retorno da função utilizando o array myList deve ser [3, 2, 5].

const myList = [5, 2, 3];

const swap = ([um, dois, tres]) => {return [tres, dois, um]};

console.log(swap(myList));

// Exercício 2
// Suponha que você esteja trabalhando em projeto de um site de carros, onde cada carro é representado dentro de um array. 
// Então sua liderança pede que seja mudado o formato de array para objeto. Para isso, crie uma função chamada toObject que, 
// dada uma lista, retorna um objeto representando o carro:

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = ([palio, shelbyCobra, chiron]) => ({palio, shelbyCobra, chiron});

const adult = [
    {
      weight: 100,
      height: 1.85,
    },
    {
      weight: 90,
      height: 1.72,
    },
    {
      weight: 79,
      height: 1.99,
    },
  ];
  
  // IMC = Índice de Massa Corporal
  
  function IMC(person) {
    return parseFloat((person.weight/(Math.pow(person.height,2))).toFixed(2));
  }
  
  console.log(adult.map(IMC));
  