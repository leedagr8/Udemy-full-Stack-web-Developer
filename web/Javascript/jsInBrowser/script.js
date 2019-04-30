function sayHello(){
    console.log("Hello");
}

sayHello();

var sayBye = function () {
    console.log("Bye");
}

sayBye();

function sing(song){
    console.log(song);
}

sing("loooooo");

function multiply(a,b)
{
  return  a * b;
}

multiply(5, 10);

//var age = prompt("What is your age?");
var age = console.log("what is your age?");
function checkDriverAge(age){
if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}

var checkDriverAge2 = function(age){
	if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}

checkDriverAge(age);
checkDriverAge2(age);