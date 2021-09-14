// ? TO DO: create a for loop that TOTALS the numbers from 1 to 100
let cTotal=0;
let stringer=`0`;
for(let x=1;x<=100;x++){

cTotal+=x;

stringer=(stringer+"+"+x);
/*if(stringer==`aa`){stringer=`0`
}else if(stringer!=0){
    stringer=(stringer+"+"+x);
}*/


}
console.log(stringer,`=`,cTotal);
console.log(`TOTAL: `, cTotal);
