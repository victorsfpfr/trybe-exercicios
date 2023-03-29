//Exercicio 01// 
let a = 20.5;
let b = 19.45;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a ** b)
console.log(a % b)

//Exercicio 02// 
if (a > b) {
    console.log(a)
}
  else if (b > a){
    console.log(b)
}

//Exercicio 03// 
let a1 = 15;
let b1 = 21;
let c1 = 17;

if (a1 > b1 && a1 >c1) {
    console.log(a1)
}
else if (b1 > a1 && b1 > c1) {
    console.log(b1)
}
else if (c1 > a1 && c1 > b1) {
    console.log(c1)
}    

//Exercicio 04// 
let parametro = -100;

if (parametro > 0) {
    console.log("positive")
}
else if (parametro < 0) {
    console.log("negative")
}
else if (parametro === 0) {
    console.log("zero")
}

//Exercicio 05// 
let angulo1 = 100;
let angulo2 = 47;
let angulo3 = -52;

if(angulo1 + angulo2 + angulo3 === 180){
    console.log("true");
}
else if(angulo1 <= 0 || angulo2 <= 0 || angulo3 <=0) {
    console.log("error");
}
else{
    console.log("false")
}

//Exercicio 06// 
let pecaXadrez = "torre";
switch (pecaXadrez) {
    case "peao":
        console.log("uma casa p/ frente")
    break;
    
    case "torre":
        console.log("n casas horizontais ou verticais")
    break;
    
    case "bisbo":
        console.log("n casas diagonais")
    break;
    
    case "cavalo":
        console.log("duas casas verticalmente ou horizontalmente mais um terceira casa em angulo reto com a segunda, formando um L")
    break;

    case "rainha":
        console.log("mova-se livremente como qualuqer outra peca, com execao do cavalo")
    break;
    
    case "rei":
        console.log("uma casa em qualquer direcao")
    break;    

}
 
//Exercicio 07//
let nota = 35;
if (nota >= 90){
    console.log("A");
}
else if (nota >= 80 && nota <90) {
    console.log("B")
}
else if (nota >= 70 && nota <80) {
    console.log("C")
}
else if (nota >= 60 && nota < 70) {
    console.log("D")
}  
else if (nota >= 50 && nota < 60) {
    console.log("E")
}
else {
    console.log("F")
} 
   
//Exercicio 08//
let numero1 = 54;
let numero2 = 48;
let numero3 = 31;

if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
    console.log("true")
}
else {
    console.log("false")
}

//Exercicio 09//
let n1 = 50;
let n2 = 48;
let n3 = 31;

if(n1 % 2 != 0 || n2 % 2 != 0 || n3 % 2 !=0) {
    console.log("true")
}
else {
    console.log("false")
}

//Exercicio 10//
let custo = 50;
let venda = 45;
let lucro = (venda - custo) * 1000;

if (lucro > 0) {
    console.log(lucro) 
}
else {
    console.log("erro")
}

//Exercicio 11//
let salarioBruto = 4000;

let inss;

let ir;


if(salarioBruto <= 1556.94){
    inss = salarioBruto * 0.08;
}
else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    inss = salarioBruto * 0.09;
}
else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    inss = salarioBruto * 0.11;
}
else if(salarioBruto > 5189.82){
    inss = 570.88;
}

let salarioBase = salarioBruto - inss;

if(salarioBase <= 1903.98){
    ir = 0;
}
else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
    ir = salarioBase * 0.075 - 142.80;
}
else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
    ir = salarioBase * 0.15 - 354.80;
}
else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
    ir = salarioBase * 0.225 - 636.13;
}
else if(salarioBase > 4664.68){
    ir = salarioBase * 0.275 - 869.36;
}

let salarioLiquido = salarioBase - ir;

console.log(inss + " inss")
console.log(ir + " ir")
console.log(salarioBase + " base")
console.log(salarioLiquido + " liquido")