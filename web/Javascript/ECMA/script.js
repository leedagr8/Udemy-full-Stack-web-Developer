//let + const

//const player = 'bobby';
//let experience = 100;
//let wizardLevel = false;

///Anytime let is wrapped around a curly braces then it creates a new scope
//if (experience > 90) {
//    let wizardLevel = true;
//    console.log('inside', wizardLevel);
//}

//console.log('outside', wizardLevel);

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

//With const obj you can still reassign the properties, but you can't change the variable to something else

//Destructuring

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;
// or
const {player, experience} = obj;
let {wizardLevel} = obj;

//Object properties

const name = 'john snow';

const obj = { [name]: 'hello',
    ['ray' + 'smith']: 'hihi'
    //dyname properities values
}


const a = "simon";
const b = true;
const c ={};

//if properties are the same we can keep it as it is
const obj2 = {
    a,
    b,
    c
}

//Template strings

//before

//const greeting = "hello" + nameHolder + "you seem  to be doing... ";
//const nameHolder = "sally";
//const age = 34;
//const pet = "horse";

//after

//const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`;

//default arguments

function greet(name ='', age = 30, pet ='cat'){
 return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`;
}

//Symbol - used to create unique type to create an indentfier for object properties. 
// In an object you don't want a properties to be the same as another so used for handling confusions

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');


//arrow functions - short hand form of writing functions

//before
function add(a,b) {
    return a +b;
}

//after 
const add2 = (a,b) =>  a +b;
