/* 1 – Crie uma função que ligue e desligue o motor de um carro */

let engineOnOff = `on`

let carState = (engineOnOff = `on`) ? `O Carro esta ligado` : `O Carro nao esta ligado`;
console.log(carState)

/* 2 – Crie uma função que calcule a área de um círculo */
// A area de um circulo = 2 * PI * raio(raio = circunferencia / 2)
/* 
let circunferenciaCirculo = 200; */

const calcularAreaCirculo = (circunferencia) => 2 * Math.PI * (circunferencia/2);

console.log(calcularAreaCirculo(200))