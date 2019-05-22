//Advanced Arrays

//before 
//var array = [1,2,10,16];

//after
const  array = [1,2,10,16];

const double = []
const newArray = array.forEach((num) => {
    double.push(num *2);
})

console.log('forEach', double);

//map, filter, reduce

//map--

const mapArray= array.map(num =>  num * 2);

console.log('map', mapArray);

//Difference between map and for each
//If you want to do a simple loop it's better to use a map
//With forEach the operation may do nothing. forEach only iterates through a collection of elements
//Map on the other hand expects the operation to return some element or value.
//Map transform the array. It creates and returns a new array "mapArray". 

//filter

const filterArray = array.filter( num => num > 5);
console.log('filter', filterArray);
//filter the array and return. In this case return all elements that are greater than 5 and store it into the filterArray[].

//reduce

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 5);

console.log('reduce', reduceArray);

//every iteration add accumulator to your number. My initial starting accumulator is 5.