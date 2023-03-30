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

//Exercio 01 A
{let numbers = [5, 9, 3, 19, 70, 8,100, 2, 35, 27];
let printarray = numbers;
console.log(printarray);
}

//01 B
{let numbers = [5, 9, 3, 19, 70, 8,100, 2, 35, 27];
let sum = 0;

for(let index = 0; index < numbers.length; index += 1) {
    sum = sum + numbers[index];
}
console.log(sum); }  

//01 C
 {
 let numbers = [5, 9, 3, 19, 70, 8,100, 2, 35, 27];
 let sum = 0; 
 let divnumbers = 0; 
 
 for(let index = 0; index < numbers.length; index +=1){
    sum = sum + numbers[index];
    divnumbers = sum / numbers.length;
  } 
    console.log(divnumbers);
 }

//01 D
{
    let numbers = [5, 9, 3, 19, 70, 8,100, 2, 35, 27];
    let sum = 0; 
    let divnumbers = 0; 
    
    for(let index = 0; index < numbers.length; index +=1){
       sum = sum + numbers[index];
       divnumbers = sum / numbers.length; 
    } 
       
       if (divnumbers >= 20) {
        console.log("Valor maior que 20")
       } else {
         console.log("Valor menor que 20")
       }      
       
    }

   //01 E
   {
    let numbers = [5, 9, 3, 19, 70, 8,100, 2, 35, 27];
    let maiornum = numbers[0];
    
    for(let index = 1; index < numbers.length; index += 1){
      if (numbers[index] > maiornum) {
        maiornum = numbers[index];
      } 
    }
      console.log(maiornum)

   }
   //01 F
   {
   let numbers = [6, 10, 4, 20, 74, 8,100, 4, 36, 20];
   let numImpars = 0;
     for (let index = 0; index < numbers.length; index += 1){
        if(numbers[index] % 2 !== 0) {
            numImpars += 1;
        } 
    }         
        if(numImpars === 0) {
            console.log("Nenhum valor impar encontrado");
        } else {
            console.log(numImpars);
        }
    }

    //01 G    
        
      