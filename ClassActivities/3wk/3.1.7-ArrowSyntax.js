//https://github.com/savvy-coders/sc-curriculum/blob/master/Section03/Activities/3.1-Activities/3.1.7-ArrowSyntax.md

// refactor the functions below into arrow syntax
/* function myNumberFunction() {
  return ((2 ** 2 + 3) % 4) * 14;
}
*/
const myNumberFunction = (n) => ((2 ** 2 + 3) % 4) * 14;


/*function greet(name) {
  return `Hello, ${name}`;
}*/
const greet = (name) => `Hello, ${name}`;


/*const timeOfDayGreet = function(name, timeOfDay) {
  return `Hello, ${name}, good ${timeOfDay}`;
};*/
const timeOfDayGreet = (name, timeOfDay) => `Hello, ${name}, good ${timeOfDay}`;


/*function tripleAndHalf(num) {
  let triple = num * 3;
  return triple / 2;
}*/
const tripleAndHalf = (num) => {
  let triple = num * 3;
  return triple / 2;
}

/*function sumTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}*/
const sumTwoNumbers = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}

//3.1.7 Activity Validity Checker
console.log(`--myNumberFunction:: ${myNumberFunction(10)}`); //myNumberFunction
console.log((`--greet:: ${greet("Harold Donniver Tregold")}`)); //greet
console.log((`--timeOfDayGreet:: ${timeOfDayGreet("jameston","Evening")}`)); //timeOfDayGreet
console.log((`--tripleAndHalf:: ${tripleAndHalf(10)}`)); //tripleAndHalf
console.log((`--sumTwoNumbers:: ${sumTwoNumbers(10,11)}`)); //sumTwoNumbers
