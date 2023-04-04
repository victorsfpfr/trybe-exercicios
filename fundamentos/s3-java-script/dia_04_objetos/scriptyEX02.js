let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  let novoLivro = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
  
/*   for (novoLivro in leitor.livrosFavoritos) { */
    Object.assign(leitor.livrosFavoritos, novoLivro); 
  /* } */
  
  console.log(leitor.livrosFavoritos);