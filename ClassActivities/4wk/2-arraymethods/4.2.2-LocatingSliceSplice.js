const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
const myLetters = [`a`,`b`,`c`]
const myIndexes = [];
myIndexes[0]=arr.indexOf(`a`);
myIndexes[1]=arr.indexOf(`b`);
myIndexes[2]=arr.indexOf(`c`);
console.log(`indexOf:[${myLetters}]:`,myIndexes);
// find the last index of "a", "b", and "c"
myLastIndexes=[];
myLastIndexes[0]=arr.lastIndexOf(`a`);
myLastIndexes[1]=arr.lastIndexOf(`b`);
myLastIndexes[2]=arr.lastIndexOf(`c`);
console.log(`lastIndexOf:[${myLetters}]:`,myLastIndexes);
// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
function removeDupes(myArr,removeIt){
let firstA=myArr.indexOf(removeIt);
let lastA=myArr.lastIndexOf(removeIt);
if(firstA===lastA){
    console.log(`done, removed all but first ${removeIt},`,myArr);
    return 0;
}else{console.log(`not done, removing last ${removeIt},`,myArr);
      myArr.splice(lastA, 1);
      removeDupes(myArr,removeIt);}
}
removeDupes(arr,`c`);
removeDupes(arr,`a`);
removeDupes(arr,`b`);