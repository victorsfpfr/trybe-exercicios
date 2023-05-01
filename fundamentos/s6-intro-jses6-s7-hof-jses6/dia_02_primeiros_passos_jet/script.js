// myRemove.js
// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item, caso ele exista no array:
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.


function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }
  
 
//   A função myFizzBuzz(num) recebe um número num como parâmetro. Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz". 
//   Caso num seja um número divisível apenas por 3, retorna "fizz". E caso num seja um número divisível apenas por 5, retorna "buzz". 
//   Se num for um número que não é divisível nem por 3 e nem por 5, a função retorna o próprio número num. Caso num não seja um número, a função retorna false.
// Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado.
// Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado.
// Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado.
// Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado.
// Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado.

// myFizzBuzz.js

function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }
  
//   Para as funções encode e decode, crie os seguintes testes em Jest:
//   Teste se encode e decode são funções;
//   Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
//   Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
//   Teste se as demais letras/números não são convertidos para cada caso;
//   Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.
  
  const mapString = (objectMap, string) => {
    const splitString = string.split('');
    const mappedArray = [];
  
    for (let index = 0; index < splitString.length; index += 1) {
      const character = splitString[index];
      const mappedValue = objectMap[character];
      
      if (mappedValue) {
        mappedArray.push(mappedValue);
      } else {
        mappedArray.push(character);
      }
    }
  
    return mappedArray.join('');
  }
  
  const encode = (string) => {
    const map = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5,
    };
    return mapString(map, string);
  }
  
  const decode = (string) => {
    const map = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u',
    };
    return mapString(map, string);
  }
  
  
//   A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. 
//   Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:

// {
//     tech: 'nomeTecnologia',
//     name: name,
//   }
  


// encodeDecode.js

const techList = (tech, nome) => {
    if (tech.length === 0) {
        return `Vazio!`;
    }
    const listTech = tech.sort().map(t => {
        return {
            tech:t,
            name:nome
        }
    })
   return listTech    
} 
    
function hydrate (copos) {
    let quantbebidas = /\d+/g;
    let numeroBebidas = (copos.match(quantbebidas));

    let arrayNum = numeroBebidas.map(Number);
    let somaArrayNum = arrayNum.reduce((total, amount) => total + amount);

    if(somaArrayNum === 1) {
        return `${somaArrayNum} copo de água`
    } else {
        return `${somaArrayNum} copos de água`
    }
}    



module.exports = {myRemove, myFizzBuzz, mapString, encode, decode, techList, hydrate}