const {
    myRemove,
    myFizzBuzz,
    encode,
    decode,
    techList,
    hydrate,

  
} = require('./script.js'); 

describe('function myRemove()', () => {
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
    
})

describe('function myFizzBuzz()', () => {
    it('Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(30)).toEqual('fizzbuzz');
    })
    
    it('Execute a função myFizzBuzz(num), sendo num um número somente divisível por 3, e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(9)).toEqual('fizz');
    })

    it('Execute a função myFizzBuzz(num), sendo num um número somente divisível por 5, e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(10)).toEqual('buzz');
    })

    it('Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(37)).toEqual(37);
    })

    it('Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz('abba')).toEqual(false);
    })
})

describe('functiom mapString()', () => {
       
    it('Teste se encode e decode são funções', () => {
        expect(typeof encode === 'function').toEqual(true);
        expect(typeof decode === 'function').toEqual(true);
    })
    
    it('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
        expect(encode('a', 'e', 'i', 'o', 'u')).toEqual('1', '2', '3', '4', '5');
    })
    
    it('Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
        expect(decode('5', '4', '3', '2', '1')).toEqual('u', 'o', 'i', 'e','a');
    })

    it('Teste se as demais letras/números não são convertidos para cada caso', () => {
        expect(encode('d', 'b', 'h', 'q')).toEqual('d', 'b', 'h', 'q');
    })

    it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
        expect(encode('testeteste')).toHaveLength('testeteste'.length);
    })

})

describe('Testa a função techList', () => {
    it('Testa se a função techList é definida', () => {
      expect(techList).toBeDefined();
    });
    it('Testa se techList é uma função', () => {
      expect(typeof techList).toBe('function');
    });
    it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
      expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
        {
          tech: 'CSS',
          name: 'Lucas'
        },
        {
          tech: 'HTML',
          name: 'Lucas'
        },
        {
          tech: 'JavaScript',
          name: 'Lucas'
        },
        {
          tech: 'Jest',
          name: 'Lucas'
        },
        {
          tech: 'React',
          name: 'Lucas'
        }
      ]);
    });
    it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
      expect(techList([], 'Lucas')).toBe('Vazio!');
    });
  });


  describe('Testa a função hydrate', () => {
    it('Testa se a função hydrate é definida', () => {
      expect(hydrate).toBeDefined();
    });
    it('Testa se hydrate é uma função', () => {
      expect(typeof hydrate).toBe('function');
    });
    it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
      expect(hydrate('1 cerveja')).toBe('1 copo de água');
      expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
      expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
      expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
      expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
    });
  });