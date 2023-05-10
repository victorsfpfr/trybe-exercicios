const countries = [
  {
    name: 'Afghanistan',
    region: 'Asia',
    currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
    capital: 'Kabul',
    population: 40218234,
    area: 652230
  },
  {
    name: 'Åland Islands',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Mariehamn',
    population: 28875,
    area: 1580
  },
  {
    name: 'Albania',
    region: 'Europe',
    currencies: [{ code: 'ALL', name: 'Albanian lek' }],
    capital: 'Tirana',
    population: 2837743,
    area: 28748
  },
  {
    name: 'Algeria',
    region: 'Africa',
    currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
    capital: 'Algiers',
    population: 44700000,
    area: 2381741
  },
  {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
  },
  {
    name: 'Andorra',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Andorra la Vella',
    population: 77265,
    area: 468
  },
  {
    name: 'Angola',
    region: 'Africa',
    currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
    capital: 'Luanda',
    population: 32866268,
    area: 1246700
  },
  {
    name: 'Anguilla',
    region: 'Americas',
    currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
    capital: 'The Valley',
    population: 13452,
    area: 91
  }
];

//Exercicio 1 1 - Calcule a quantidade total da população de todos os países.

const getPopulation = () => {
     return countries.reduce((acc, crr) => {
      return acc + crr.population
     }, 0)
   };

   console.log(getPopulation(countries));


   //2 - Calcule a área total de todos os países.
 //expectedResult = 4311757;
const getTotalArea = () => {
 return countries.reduce((acc, crr) => {
    return acc + crr.area
 }, 0)
};

console.log(getTotalArea(countries));


//3 - Encontre o país com o maior nome. 
const longestName = () => {
    return countries.reduce((acc, crr) => {
    if(crr.name.length > acc.name.length) {
        return crr;
    } else {
        return acc;
    }
    })
  };

  console.log(longestName(countries));

  // 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.
  
  const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  //const expectedResult = 20;
  
  const countA = () => {
    const regex = /a/ig;
    const amountOfA =  names.reduce((acc, crr) => {
    const allA = crr.match(regex);  
        return acc + allA.length;   
    },0);
   return amountOfA
};
  console.log(countA(names));

  // 5 - Crie um array de objetos e calcule a média de notas. Utilize as constantes students e grades para 
  //criar um array de objetos e calcule a média da nota das pessoas estudantes:

  // O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
// const expectedResult = [
//  { name: 'Pedro Henrique', average: 7.8 },
//  { name: 'Miguel', average: 9.2 },
//  { name: 'Maria Clara', average: 8.8 },
// ];
const studentAverage = () => {
    return mergeObjects = students.map((studant, index) => (
        {
         name: studant,
         average: (grades[index].reduce((acc, crr) => acc + crr,0) / grades[index].length),
        }
    ))
}
console.log(studentAverage());   
 

// Bônus
// Todos os exercícios devem ser realizados utilizando reduce e, se necessário, use outra HOF. A informação será citada no enunciado.

// 1 - Dada uma matriz, transforme em um array.
  
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  const flatten = () => {
    return arrays.reduce((acc, crr) => acc.concat(crr),[]);
    
  };

  console.log(flatten())

  
  const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

//   2 - Crie uma string com os nomes de todas as pessoas autoras.
// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = () => {
   return books.reduce((acc, crr) => `${acc} ${crr.author.name}, `, '')
  
};
console.log(reduceNames(books));

//3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
// const expectedResult = 43;

const averageAge = () => {
 const avgAuthor = books.reduce((acc, crr) => {
     return Math.round(acc + (crr.releaseYear - crr.author.birthYear) / books.length);
     }, 0)
    return avgAuthor
};

console.log(averageAge());

//4 - Encontre o livro com o maior nome.

const expectedResult = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  };
  
  const longestNamedBook = () => {
    // retorne seu código aqui
  }