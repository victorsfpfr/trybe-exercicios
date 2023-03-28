let myName = "Victor";
let birthCity = "Belo Horizonte";
let birthYear = 1996;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

let base = 5;
let height = 8;
let area = base * height;
let perimeter = base + base + height + height;

console.log(base);
console.log(height);
console.log(area);
console.log(perimeter);

let nota = 80;
if (nota >= 80) {
    console.log("Parabéns, você faz parte do grupo de pessoas aprovadas!")
}

else if (nota <= 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera.")
} 

else {
    console.log("Infelizmente, você reprovou.")
}

let currentHour = 22;
let message = "";
if (currentHour >= 22) {
    message = "Nao deveriamos comer nada, e' hora de dormir";
}
else if (currentHour >= 18 && currentHour <= 22) {
    message = "Rango da noite, vamos jantar :D";
}
else if(currentHour >= 11 && currentHour <= 14) {
    message = "Hora do almoco!!!";
}
else if(currentHour > 4 && currentHour < 11) {
    message = "Hmmm, cheiro de cafe' rece'm-passado";
}

console.log(message);

let weekDay = "domingo"
if (weekDay === "segunda-feira" || weekDay === "terca-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}
else {
    console.log("FINALMENTE, descanso merecido! UwU!")
}
   
let statusEstudante = "";
  
    switch (statusEstudante) {
    case "aprovada":
    console.log("Parabens, voce esta no grupo de pessoas aprovadas!")    
    break;  
   
    case "lista":
    console.log("Voce esta na nossa lista de espera")
    break;
    
    case "reprovada":
    console.log("Infelizmente, voce reprovou")
    break;
    
    default:
    console.log("Informacao incorreta")    
}


