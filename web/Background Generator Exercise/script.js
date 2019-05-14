var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

var col1=[];
var col2=[];



function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

//1. Since I know the first page load colors are red and yellow I can set my color values to that.
// I wasn't able to find a way to read linear gradient colors with Javascript. This function will only work for red and yellow
// If the colors are ever changed I will need to come back and manually change the colors myself. Again I couldn't find a method
// That returned the values of the Linear Gradient colors in the CSS 

function setColor(){
	color1.value = "#FF0000";
	color2.value = "#ffff00";
}

//Display color on page load
// Using setGradient function

setColor();
setGradient();

//Generate Random number


function randomGen(){
	for(var i = 0; i < 3; i++){

	col1[i] =  Math.floor(Math.random() * 255);
		
		
	}
	//for(var i = 0; i < 3; i++){
	//	console.log(col1[i]);
	//}
	
	for(var i=0; i < 3; i++){
		col2[i] = Math.floor(Math.random() * 255);
	}

	//for(var i = 0; i < 3; i++){
	//	console.log(col2[i]);
	//}

	body.style.background = 
	"linear-gradient(to right, " 
	+ "rgb(" + col1[0] + ", " + col1[1] + ", " + col1[2] 
	+ ")" + ", " 
	+ "rgb(" + col2[0] + ", " + col2[1] + ", " + col2[2] 
	+ ")";
	
	css.textContent = body.style.background + ";";

}

button.addEventListener("click", randomGen);
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);




/* Exercise:

1. Write code so that the colour inputs match the background generated on the first page load. 

2. Display the initial CSS linear gradient property on page load.

3. BONUS: Add a random button which generates two random numbers for the colour inputs.

*/