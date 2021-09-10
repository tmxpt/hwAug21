let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
console.log(x,y,z);
// reassign x, y, and z to FALSY values
x=0;
y=null;
z.id=NaN;
z.name=``;
// print x, y, and z
console.log(x,y,z);


const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values
//a=0;
//b=0;
//c=0;
// using BRACKET NOTATION, assign a value to b
b[0]=`myzero`;
console.log (b[0]);
// using DOT NOTATION, assign a PROPERTY to c
c.myProperty=`Cards`;
console.log (c.myProperty);
// using DOT NOTATION, assign a METHOD to c
c.myMethod=()=>`This is a method that can be called`;
// using BRACKET NOTATION, call the method in c
console.log(c[`myMethod()`]);
// print a, b, and c
console.log(a,b,c);