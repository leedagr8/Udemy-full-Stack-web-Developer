const basket = ['apples', 'oranges', 'grapges'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

//1st way
for(let i =0; i < basket.length; i++){
    console.log(basket[i]);
}

//2nd way
basket.forEach(item => {
    console.log(item);
})

// for of (ES6)
// Iterating over the array or strings
for(item of basket){
    console.log(item);
}

// for in - Allow me to loop over and see the objects properties
//Works best with objects
//enumerating - properties of an object are enumerable.

for(item in detailedBasket){
    console.log(item);
}

//Javascript arrays can be viewed as objects

basket={
    0: 'apples',
    1: 'oranges',
    2: 'grapes'
}