
//! 1
const pizzaToppings=[`Pepperoni`,`Cheese`,`Olives`,`Sausage`]
console.log(`#1`,pizzaToppings);

//! 2
function greetCustomer(myArray){
    console.log(`#2`,`Welcome to Pizza House, our toppings are: `)
    for (x=0;x<myArray.length;x++){
        console.log(`topping ${x+1}: ${myArray[x]}`);
    }
}
greetCustomer(pizzaToppings);

//! 3
function getPizzaOrder(size, crust, ...toppings) {
    console.log(`#3`,`One ${size} ${crust} crust pizza with ${toppings} coming up`);
};

 getPizzaOrder(`small`, `thin`, `peperoni`, `cheese`, `olives`, `sardines`);

//! 4
function preparePizza (...myArray) {
const myPizzaObject= {
    Size:myArray[0],
    Crust:myArray[1],
    Toppings:[] };
                    // console.log(myArray.length);
                    // const myL=myArray.length;
for (x=2;x<myArray.length;x++){
    myPizzaObject.Toppings[x]=myArray[x];
    /*console.log(myPizzaObject.Toppings[x], x);*/ }
console.log(`#4`,myPizzaObject);
}

preparePizza(`Small`,`Thin`,`Pepperoni`,`Cheese`,`Olives`,`Sausage`,`Pineapple`);


//! 5
/*
has a parameter of a pizza Object
logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
outputs the same pizza Object that was passed in
*/
const orderToPassIntoFunction={
    size:`large`,
    crust:`cheesy`,
    toppings:[`pepperoni`,`sardines`,`sausage`,`olives`,`extra cheese`]
}
function servePizza(orderObject){
    console.log(`#5`,`Order up! Here's your ${orderObject.size},
    ${orderObject.crust} crust pizza with ${orderObject.toppings}. Enjoy!`);
}

servePizza(orderToPassIntoFunction);

