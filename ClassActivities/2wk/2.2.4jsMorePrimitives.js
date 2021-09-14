// create five variables and assign them values
// each variable should reference a different primitive data type
// ! REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
const string="Earth";
let number=8;
let bool=true;
let nullifier=null;
let nothing;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof string,  typeof number,   typeof bool, typeof nullifier, typeof nothing);
// create a variable that references a template literal
// inside the template literal, use two variables
let templateString=`My favorite planet is ${string} and I will flood it ${number} times`;
// reassign the value of the variable that references "null"
nullifier=205;
// print the value and its type
console.log(nullifier,typeof nullifier);
// print a variable that causes a ReferenceError
    /*console.log(refError);*/
console.log(string);
// alter the previous line to no longer cause a ReferenceError
