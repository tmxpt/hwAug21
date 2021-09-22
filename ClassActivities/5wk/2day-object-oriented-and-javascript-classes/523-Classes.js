// refactor your Animal function constructor and methods to use the class keyword
class Animal{
    constructor(takesName,takesType,takesWeight,takesCountry) {this.name=takesName;
    this.name=takesName;
    this.type=takesType;
    this.weight=takesWeight;
    this.country=takesCountry;
    }
}

// extend the Animal class with a type of animal
class DomesiticAnimal extends Animal {
    constructor(takesName,takesType,takesWeight,takesCountry,takesDomesticated){
        super(takesName,takesType,takesWeight,takesCountry);
        this.domesticated=takesDomesticated;
    }
}
// add some unique methods and properties to the class extension
class AFAnimal extends DomesiticAnimal{
    constructor(takesName,takesType,takesWeight,takesCountry,takesDomesticated){
        super(takesName,takesType,takesWeight,takesCountry,takesDomesticated);
    }
    printMsg(){
        return (this.domesticated ? `The ${this.name} is domesticated`
                : `The ${this.name} is not domesticated`);}
}
// create an instance of the class extension and call one of its methods
const penguino = new AFAnimal(`PENGUIN`,`BIRD`,80,`ANTARCTICA`,false);
console.log(penguino);
console.log(`    `,penguino.printMsg());

const cato = new AFAnimal(`CAT`,`MAMMAL`,10,`ALL COUNTRIES`,true);
console.log(`         `,cato.printMsg());