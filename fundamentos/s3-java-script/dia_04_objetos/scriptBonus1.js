/* Organizando lições
Suponha que você esteja trabalhando em uma escola e precise fazer algumas atualizações no sistema. Para isso, considere o seguinte código:
 */
let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

/* /*  Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, 
a chave a ser adicionada e o valor dela. */
 
  let key = 'turno';
  let NovoTurno = 'noite';
  
  function addTurno (object, key, value) {
       object[key] = value
 };
    addTurno(lesson2, key, NovoTurno);
  
/*     lesson3 = {
        materia: 'Matemática',
        numeroEstudantes: 10,
        professor: 'Maria Clara',
        turno: 'noite',
        Objeto(object) 
         return Object.keys(object).length
    }; */
    /* 
    tamanhoObjeto(lesson2);
    console.log(tamanhoObjeto(lesson2));    
     */
    
  /* Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. */
    
  
    function listarKeys (object) {
    let keys = Object.keys(object);
    console.log(keys);
  
 };

   listarKeys(lesson1);
   listarKeys(lesson2);
   listarKeys(lesson3);

      
  /*  Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, 
   portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
  */  


   let allLessons = Object.assign({lesson1}, {lesson2}, {lesson3});
   console.log(allLessons);
