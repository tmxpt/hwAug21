const arrOne = ["a", [0], "b"];
const arrTwo = [1, 2, "c", ["d", 3]];
console.log(arrOne,`,`,arrTwo);
// concatenate arrTwo, 4, and "e" to arrOne and save the resulting array to a variable
const arrSan=arrOne.concat(arrTwo, 4,`e`);
// print the new, merged array
console.log(arrSan);
// join the merged array and print the result
const arrYon=arrSan.join("_");
console.log(arrYon);