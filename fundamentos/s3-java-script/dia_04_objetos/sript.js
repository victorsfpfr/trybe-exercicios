//Para Fixar

/* Acesse as chaves name, lastName e age por meio da sintaxe meuObjeto.chave e concatene as informações para imprimir 
no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”. */

/* let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3}; */

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  }
}
console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade");


/* Adicione ao objeto a chave bestInTheWorld por meio da sintaxe meuObjeto.chave = valor e atribua a essa chave um 
array que contenha as datas em que a jogadora Marta foi considerada a melhor do mundo.
 */

/* [2006, 2007, 2008, 2009, 2010, 2018] */

let player2 = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
    medals: {
      golden: 2,
      silver: 3,
    }   
   
}

console.log("A jogadora " + " " + player2.name + " " + player2.lastName + " Foi eleteita a melhor do mundo por " + player2.bestInTheWorld.length + " vezes");

/* Acesse a chave medals por meio da sintaxe meuObjeto.chave e faça um console.log no seguinte formato: 
“A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”. */

console.log("A jogadora possui " + player2.medals.golden + " medalhas de ouro e " + player2.medals.silver + " medalhas de prata");

//FOR IN & FOR OF
/* No exemplo acima, utilizamos o for/of para percorrer o iterável e retornar o valor dos elementos.
Agora que você já sabe a diferença entre eles e como usá-los, chegou o momento de praticar.
 */
/* Com base no objeto a seguir, utilize for
  let student = {

  }

  let newStudentInfo = {
  nome: "Estudante",
  eMail: "emailestudante@betrybe.com.br",
  telefone: 123456789,
  GitHub: "estudanteNovo/github.com",
  LinkedIn:  "novoestudante/linkedin.com.br",
}
 
 function addProperty (object, key, value) {
    object[key] = value;
  };

  
  addProperty(student, newStudentInfo, allinfo);
  console.log(student);
  
    person3: 'Jorge',
  };
for (let pessoas in names) {
    console.log('Ola ' + names[pessoas]);
}

/* Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
 */
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(index in car) {
    console.log(index + ":" + car[index])
  }

  /* Após ter conhecido diferentes maneiras de associar chaves e valores a um objeto, que tal praticar? 
  Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo.
 */
/* 
  let student = {

  }

  let newStudentInfo = {
  nome: "Estudante",
  eMail: "emailestudante@betrybe.com.br",
  telefone: 123456789,
  GitHub: "estudanteNovo/github.com",
  LinkedIn:  "novoestudante/linkedin.com.br",
}
 
 function addProperty (object, key, value) {
    object[key] = value;
  };

  
  addProperty(student, newStudentInfo, allinfo);
  console.log(student);
   */
  






  
  
  //EXERCICIOS DO DIA
  /* Com base neste objeto, faça os exercícios a seguir. */


 /*  1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo o nome dela. Para isso, utilize a sintaxe meuObjeto.chave. 
  Então, o valor esperado no console é:
 */

 /*  console.log("Bem Vindo(a) " + info.personagem + "!"); */

/*   2 - Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. 
  Para isso, use a sintaxe meuObjeto['chave'] = valor. Então, o valor esperado no console é:
 */

    
/*   info.recorrente = 'sim';  */
  
 /*  console.log(info); */

 /*  3 - Faça um for/in que mostre todas as chaves do objeto. O valor esperado no console é: */

 let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim', 
 };

 
 for (let infoKeys in info) {
    console.log(infoKeys);
 } 


 /* 4 - Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto. O valor esperado no console é: */

for (let key in info) {
    console.log(info[key]);
}

/* 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, 
“Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, 
de acordo com cada uma das chaves. O valor esperado no console é:
*/

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
}

for (let key in info) {
    if (
        key === 'recorrente' &&
        info[key] === 'sim' &&
        info2[key] === 'sim'
    )  {console.log('Ambos recorrentes');
} else {
    console.log(info[key] + ' e ' + info2[key]);
}     
}


