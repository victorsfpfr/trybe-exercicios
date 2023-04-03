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
/* Com base no objeto a seguir, utilize for/in e imprima no console a mensagem 'Olá, xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão. */
let names = {
    person1: 'João',
    person2: 'Maria',
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
  
  