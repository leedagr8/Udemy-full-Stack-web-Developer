//string padding
//.padStart()
//.padEnd()
//Padstart creates a string with 10 total space (left over space is showed at beginning)
//Almostl like indenting
//padEnd creates a string with 10 total spaces(left over space is showed at end)

const fun = (a,b,c,d,) => {
    console.log(a);
}

fun(1,2,3,4,)

Object.values
Object.entries
Object.keys

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
}

//Acts as an iterator over an object
Object.keys(obj).forEach((key,index) => {
    console.log(key,obj[key]);
})
//Returns the value in each property
Object.values(obj).forEach(value => {
    console.log(value);
})
//returns an array (key and value)
Object.entries(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
    //grabbing the value of each username and replacing them with new usernames
})