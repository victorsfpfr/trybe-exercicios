// Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do 
// TrybeBank e escreva quatro programas que:

//Adicione um valor ao saldo.
let saldo = 800;
const addValueSaldo = (param) => {
   return param + saldo;
}
console.log(addValueSaldo(100))

//Subtraia um valor do saldo.

const subValueSaldo = (param) => {
    return saldo - param;
}

//Multiplique o valor do saldo por uma taxa.

const MultiValueSaldo = (param) => {
    return saldo * param;
}

//Divida o valor do saldo.

const DivValueSaldo = (param) => {
    return saldo / param;
}


// Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve 
// receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

const addClientTrybeBank = (param) => {
  if (typeof param != 'string') {
    return `Error, param deve ser uma string`
  } 
  return clientesTrybeBank.push(param);
}

console.log(addClientTrybeBank('Matheus'));
console.log(clientesTrybeBank);

// Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. Certifique-se de que a função 
// deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, caso o parâmetro não seja do tipo string e caso o(a) cliente não
//  exista dentro do array.

const rmvClientsTrybeBank = (param) => {
    if (typeof param !== 'string' || !clientesTrybeBank.includes(param)) {
        return `Error, param nao e' uma string ou param nao esta contido na lista de clientes`
    }
    const index = clientesTrybeBank.indexOf(param);
   clientesTrybeBank.splice(index, 1);
   return `Client ${param} succefully removed from the clients list`
}

console.log(rmvClientsTrybeBank('John'));
console.log(clientesTrybeBank);

// Refatore a função removeCliente para diminuir sua complexidade e quebrá-la em funções menores.
let clientesTrybeBank2 = ['Ada', 'John', 'Gus'];

// function removeCliente(cliente) {
//   if (typeof cliente === 'string') {
//     let clienteEncontrado = false;
//     for (let index = 0; index < clientesTrybeBank2.length; index += 1) {
//       if (cliente === clientesTrybeBank[index]) {
//         clientesTrybeBank2.splice(index, 1);
//         clienteEncontrado = true;
//         return 'Cliente excluída(o) com sucesso.';
//       }
//     }

//     if (clienteEncontrado === false) {
//       return 'Cliente não encontrado'
//     }
//   } else {
//     return 'O parâmetro passado deve ser do tipo "string"!';
//   }
// };

function verifyClientTypeOf(cliente) {
    if (typeof cliente !== 'string') {
        return 'O parâmetro passado deve ser do tipo "string"!'
    }
}
function verifyClienteIsClient(cliente) {
   if(clientesTrybeBank2.includes(cliente)) {
    return cliente
   } else {
    return 'Cliente não encontrado';
   }
}
function removeClient(cliente) {
    if(verifyClientTypeOf(cliente) && verifyClienteIsClient(cliente)) {
        const index = clientesTrybeBank2.indexOf(cliente);
        clientesTrybeBank2.splice(index, 1);
        return `Cliente ${cliente} excluída(o) com sucesso.`
    }
   }