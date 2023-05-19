//Para Fixar
// Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

const primeNumbers = [17, 23, 37]

const [primeNumbers0, primeNumbers1, primeNumbers2] = primeNumbers

const sum = (a, b) => {
  console.log(a + b);
}
 sum(primeNumbers0, primeNumbers2) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

//A seguir, temos alguns valores que estão descritos em variáveis incoerentes. 
//Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

 [comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida); // arroz gato água

//O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. 
//Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

const [prim, sec, terc, quart, quint, sex, setp] = numerosPares
numerosPares = [quart, quint, sex, setp];


console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima

// Para Fixar
// Do jeito que está, quando person é passado para a função getNationality, o retorno é João is undefined. 
// Ajuste a função getNationality para que a chamada getNationality(person) retorne João is Brazilian.
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};



const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

// Para Fixar
// Agora é hora de praticar: altere a função getPosition utilizando a property shorthand.

const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,
  });
  
  console.log(getPosition(-19.8157, -43.9542));

//   Para Fixar
// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. 
// Atribua como default o valor 1, caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number = 1, value = 1) => {
    return number * value
  };
  
  console.log(multiply(8));
