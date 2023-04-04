/* 1 – Crie uma função que ligue e desligue o motor de um carro */



const ligarDesligar = (status) => { 
    status = status === 'desligado' ? 'ligado' : 'desligado';
    console.log(`O motor esta ${status}`);
    return status;
}

ligarDesligar('ligado');





/* 2 – Crie uma função que calcule a área de um círculo */
// A area de um circulo = 2 * PI * raio(raio = circunferencia / 2)
/* 
let circunferenciaCirculo = 200; */

const calcularAreaCirculo = (circunferencia) => 2 * Math.PI * (circunferencia/2);

console.log(calcularAreaCirculo(200))

/* 3 – Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase */
