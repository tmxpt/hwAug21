// bracket and dot notation
const key = "1";
const obj = {
  key: console.log("the key is 'key'"),
  1: console.log("the key is 1")
};
// what will the following lines print?
obj[key];
obj.key;
obj["key"];

// create an object with at least four properties, each with a different data type
// name one of the four properties "collection" and set its value to an Array or Object
    const obj1 ={
        collection:[1,2,3,4,5,6],
        1:`first`,
        thk:`pv`,
        myBool:false //!kvp key value pairs -what these are officially called
    };

// access a value in in "collection" property
    console.log(`obj1.collection[2]:: `,obj1.collection[2])

    
// Nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];
obj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};
// fill in your favorite movie and color below
obj["favorites"] = {
  movie: "",
  number: 0,
  color: ""
};
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// how many lines will the following for...of statement print?
// what do you expect to see on each line?
for (let key in keys) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}
// use a template literal to print a sentence about your favorite movie and color

// access the values "b", 4, and 6 from obj.list
