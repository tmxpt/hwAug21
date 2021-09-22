// create a function constructor that works as a template for an Animal
// include properties for name, type, weight, etc.
function animal(takesName,takesType,takesWeight,takesCountry,takesDomesticated){
    this.name=takesName;
    this.type=takesType;
    this.weight=takesWeight;
    this.country=takesCountry;
    this.domesicated=takesDomesticated;
}
// create a new instance on an Animal
const cow=new animal(`Cow`,`Mammal`,900,`All`,true);
const cat=new animal(`Cat`,`Mammal`,10,`All`,true);
const penguin=new animal(`Penguin`,`Bird`,75,`Antarctica`,false);

// add methods to the Animal prototype
animal.prototype.printMsg=function() {return `${this.name} weighs ${this.weight} pounds.`}
console.log(`  `,cat.printMsg());
        // console.log(cat);
// attach a method directly to the Animal instance that "overwrites" a prototype method
cat.printMsg=function () {return `Cats are cute!`}
console.log(`    `,cat.printMsg());
