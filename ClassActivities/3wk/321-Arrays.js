// create an Array using an Array literal
let a=9;
let b='boukenda';

const something = [a,b, 'incorrigible', [1,2,3,4,5],true,false,[`ttgl`,`nge`],601];

// access the 1st item in the Array
console.log(`firstele:: ${something[0]}`);
// access the last item in the Array
console.log(`lastele:: ${[something.length-1]}`);
// print the length of the Array
console.log(`length:: ${something.length}`);
// use the length property to access the last item in the Array
    /*see above*/
// with for...of, loop over the Array, modify the value and add to a different Array
let z, q=[];

for (let element of something){
    let newElement =element+1;
    console.log(`newell:: `,newElement);

    z+=" "+newElement;
    

    q[element]=element;
    
}
console.log(`z:: `,z);
console.log(`q:: `,q);