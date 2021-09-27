// In a new .js file, create a few classes. 
// Create one "general category" class... 
class general {
    constructor(name,elemental){
        this.name=name;
        this.elemental=elemental;
    }
}

// ...then two more specific classes which extend from the first class.
class attributes extends general{
    constructor(name, elemental, range, frame){
        super(name, elemental);
        this.range=range;
        this.frame=frame;
    }
}

class doesPrint extends attributes{
    constructor(name, elemental, range, frame){
        super(name, elemental, range, frame)
    }
    method1(){console.log(`${this.frame}'s ${this.name} has a base range of ${this.range} meters.`)}
}

const andro= new doesPrint(`Divine Spears`,`puncture`,19,`Nezha`);
const spd= new doesPrint(`Discharge`,`electric`,20,`Volt`);
const eido= new doesPrint(`Reave`,`true`,6,`Revenant`);
const wf=[];
wf.push(andro,spd,eido);

for(i=0;i<wf.length;i++){
    wf[i].method1();
}