const nums = [6, 5, 2, 3, 4, 1, 0];
console.log(nums,` SHOWS THE ORIGINAL ARRAY`);
// remove each of the last two items with pop(), saving each item to a variable
const popReturn1=nums.pop();
console.log(popReturn1, nums,`.pop's the end value and stores it (1st time)`);
const popReturn2=nums.pop();
console.log(popReturn2, nums,`.pop's the end value and stores it (2nd time)`);
// remove each of the first two items with shift(), saving each item to a variable
const shiftReturn1=nums.shift();
console.log(shiftReturn1,nums,`.shift's the begin value and stores it (1st time)`);
const shiftReturn2=nums.shift();
console.log(shiftReturn2,nums,`.shift's the begin value and stores it (2nd time)`);
// use push and unshift to add the variables back to the array in numerical order, 0-6
let numsLength;
numsLength=nums.unshift(popReturn2)
    console.log(numsLength, nums,`shows length of array then .unshift's 2nd .pop'd var`);
numsLength=nums.unshift(popReturn1)
    console.log(numsLength, nums,`shows length of array then .unshift's 1st .pop'd var`);
numsLength=nums.push(shiftReturn2);
    console.log(numsLength, nums,`shows length of array then .push's 2nd .shift
    'd var`);
numsLength=nums.push(shiftReturn1);
    console.log(numsLength, nums,`shows length of array then .push's 1st .shift'd var`);