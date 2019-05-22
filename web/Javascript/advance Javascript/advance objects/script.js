//reference type

var object1 = { value: 10};
var object2 = objet1;
var objec3 = {value: 10};


//context vs scope
function b (){
    //New scope is created when you create a function
    let a = 4;
}
//Context tells you where we are in the object
//this keyword - window object
//this- what is the object environment that we're in right now
//What is to the left of the dot

function a (){
    console.log(this);
}//This is the window object

const object4 ={
    a: function(){
        console.log(this);
    }
}

//instantation - make a copy of an object and reuse the code
//making instances or multiple copies of an object

class Player{
    constructor(name, type){
        console.log(this);
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player{
    constructor(name, type){
        super(name, type)
    }
    play(){
        console.log(`WEEEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shaun', 'Dark Magic');