//Dom event exercise

/*
Using the Shopping List files from the previous videos update the shopping list app to do the following:

1. If you click on the list item, it toggles the .done  class on and off.

2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)
*/

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");
var gone = document.getElementsByClassName("delete");


//Sourced from Nick
//---------------------
/*
I Couldn't figure out how to remove child from a parent
node. Since I am using the "getElementByClassName" method
This was returning an array and I wasn't sure how to 
parse it. Nick's code help me with this step.
*/

//add event listener to first 6 btns in HTML file
for(var i = 0; i < gone.length; i++){
	gone[i].addEventListener("click", removeParent, false);
}


//from StackOverflow:
function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}
//---------------------




function inputLength(){
    return input.value.length;
}

function createListeElement(){
    var li = document.createElement("li");
    var del = document.createElement("button");
    del.className = "delete";
    del.innerHTML = "Delete";
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(del);
    ul.appendChild(li);
    input.value ="";
}

function addListAfterClick(){
  
    if(input.value.length > 0){
        createListeElement();
    }
}

function addListAfterKeyPress(event){

    if(input.value.length > 0 && event.which === 13){
        createListeElement();
        } 
}


ul.onclick = function(event){
    var target = event.target;
    target.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeyPress)

/*

My approach:

--------
function goneForever(){
    var parent = document.getElementById("parent");
    var child = document.getElementById("child");
    parent.removeChild(child);
}

gone.addEventListener("click", goneForever)

I needed to add false to the function above and 
iterate through my array and add event listeners
to each item in my list.
------
*/