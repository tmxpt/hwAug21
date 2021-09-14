//Best tip: use word wrap in your vscode, it can be wonderful. Alt+z is the windows shortcut.

// Logical Operators
console.log(`----logical operators----`);
// ? what do you expect each line to print?
console.log(true && false, `    true && false`);
console.log(true || false, `     true || false`);
console.log(!true, `    !true`);
console.log(!(true && false), `     !(true && false)`);
console.log(false || !false, `     false || !false`);

// Logical Operators and Truthy/Falsy
console.log(`\n----Logical Operators and Truthy/Falsy----`);
// ? what do you expect each line to print?
console.log("" && 0, `         "" && 0`); //also comments exist
console.log(undefined || null, `     undefined || null`);
console.log(!``, "     !``");
console.log(!(1 && "false"), `    !(1 && "false")`);
console.log(NaN || !"true", `    NaN || !"true"`);

// ? TO DO: set the age variable equal to a number, then use the conditional operator to construct an expression that returns "full menu" if the age is over 10, and "kids menu" if the age is less than 10
console.log(`\n----Age Check: Less than 10 or over 10?----`)
let age;
age=9;
if(age>=10){
console.log(`Age is over 10. Full Menu.`)
}else{console.log(`Age is under 10. Kids Menu`)}



// ? TO DO: using only logical operators (no comparison operators), write an if statement that prints "The number is zero" when num is 0.
console.log(`\n----Number check: is num 0 or not 0----`)

let num = 0;
// * your if statement here *
/*if(num){
    console.log(`The number is not zero.`, `num is `, num);
}else{console.log(`The number is zero.`, `num is `, num)}
*/
!num ? null : console.log(`number is 0`);