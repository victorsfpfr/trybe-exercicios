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
        birthYear: 1921,
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
  
  // Adicione o código do exercício aqui:
  const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
  return books.find((element) => element.author.birthYear === 1947).author.name
  
};

const expectedResult2 = 'Duna';
const smallerName = () => {
    let nameBookTamanho = Infinity;
    let nameBook = '';
    books.forEach((book) => {
        if(book.name.length > nameBookTamanho) {
          nameBookTamanho = book.name.length
          nameBook = book.name
        }
    })
  

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
//Encontre o primeiro livro cujo nome possua 26 caracteres
const expectedResult3 = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
  };
  
  const getNamedBook = () => {
    return books.find((element) => element.name.length === 26);
  };

  

  //Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.
  const expectedResult4 = false;

function everyoneWasBornOnSecXX() {
return books.every((element) => element.author.birthYear >= 1901 && element.author.birthYear <= 2000)
};

//Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
const expectedResult5 = true;

const someBookWasReleaseOnThe80s = () => {
  return books.some((element) => element.releaseYear > 1979 &&  element.releaseYear < 1990);
}

//Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.
const expectedResult6 = false;

const authorUnique = () => {
  
  return books.every((eleE) => books.some((eleS) => (eleS.author.birthYear === eleE.author.birthYear) && (eleS.author.name !== eleE.author.name)))
}

console.log(authorUnique());

