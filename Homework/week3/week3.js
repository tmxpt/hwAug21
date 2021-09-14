/*Create a getPizzaOrder function that
has the parameters size, crust, and an indefinite amount of toppings as inputs
prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
outputs a list with the size, crust, and toppings
*/
//! 1
const pizzaToppings=[`Pepperoni`,`Cheese`,`Olives`,`Sausage`]

//! 2
function greetCustomer(){}


function getPizzaOrder(size, crust, ...toppings) {
    console.log(`One ${size} ${crust} with ${toppings} coming up`);
};

// getPizzaOrder(`small`, `thin`, `peperoni`, `cheese`, `olives`, `sardines`);

function preparePizza (...myArray) {
const myPizzaObject= {
    Size:myArray[0],
    Crust:myArray[1],
    Toppings:[] };
// console.log(myArray.length);
// const myL=myArray.length;
for (x=2;x<myArray.length;x++){
    myPizzaObject.Toppings[x]=myArray[x];
    console.log(myPizzaObject.Toppings[x], x);
} }

preparePizza(`Small`,`Thin`,`Pepperoni`,`Cheese`,`Olives`,`Sausage`,`Pineapple`);

/*has an array as its parameter with three items: a size, a crust, and a list of toppings
prints something like "...Cooking pizza..."
outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
*/