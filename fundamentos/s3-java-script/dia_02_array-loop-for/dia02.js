//Arrays
let menu = ['Home', 'Servicos', 'Portfolio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

let indexOfPortifolio = menu.indexOf('Portfolio');

console.log(indexOfPortifolio);

menu.push('Contato');

console.log(menu);

//For
let groceryList = ['Arroz', 'Feijao' , 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index])
}

//For/Of
let names = ['Joao', 'Maria', 'Antonio', 'Margarida'];
for(let items of names){
    console.log(items);
}

//While
let dado1 = Math.ceil(Math.random() * 6);
console.log('resultado dado 1:', dado1);
let dado2 = Math.ceil(Math.random() * 6);

while (dado1 !== dado2) {
  dado2 = Math.ceil(Math.random() * 6);
  console.log('resultado dado 2:', dado2);
}
