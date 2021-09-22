// create an object literal
const whenTheObjectIsSus={
    itemname:`banana`,
    upc:4011,
    inventory:655,

    
}
// include a method that uses "this"
const myItem={
    itemname:`Special Selects Bran Cereal`,
    upc:2021092100,
    inventory:26,
    orderMore(){return `${this.itemname} inventory count:${this.inventory}`}    
}
// create a function in the global scope that prints "this"
function logThis(){
    console.log(`this is: `, this)
}

logThis();