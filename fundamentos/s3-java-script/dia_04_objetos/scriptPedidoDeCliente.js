


let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  function customerInfo(order) {
    console.log(`Ola, ${order.order.delivery.deliveryPerson} , entrega para: ${order.name} , Telefone: ${order.phoneNumber}, R. ${order.address.street},
    Nº: ${order.address.number}, AP: ${order.address.apartment}`) 
  }
  
  customerInfo(order);
  
  function orderModifier(order) {
    Object.assign(order.order.delivery.deliveryPerson = "Luiz Silva");
    Object.assign(order.payment.total = 50);

  }
  
  orderModifier(order);

  console.log(`Ola, ${order.order.delivery.deliveryPerson}, o valor total de seu pedido de ${Object.keys(order.order.pizza).join(', ')} e 
  ${order.order.drinks.coke.type} e' R$${order.payment.total}.`);

/*   Complete a função customerInfo() para que seu retorno seja similar a 'Olá, Ana Silveira, entrega para: Rafael Andrade, 
  Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.
De olho na dica 👀: Note que o parâmetro da função já está sendo passado na chamada da função.

Complete a função orderModifier() para que seu retorno seja similar a 
'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
Modifique o nome da pessoa compradora para Luiz Silva;
Modifique o valor total da compra para R$ 50,00.
 */