let pizzaPlace="Tom's Pizza";
let numberOfToppings=7;
//pepperoni sausage greenpeppers olives excheese bacon onions

console.log(pizzaPlace, typeof(pizzaPlace));
console.log(numberOfToppings, typeof(numberOfToppings));
console.log(pizzaPlace, `has`, numberOfToppings, `toppings;`);

if(numberOfToppings<10){
  console.log("Quality, not quantity.")
}else{console.log("A whole lot of pizza.")}


let a=1;
for(let i=1;i<=10;i++){
  a=(i%2);
  if(a===0){
    console.log(i, a);
  }
}
