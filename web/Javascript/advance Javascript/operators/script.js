//ternary Operator - similar to if else condition
    //condition ? expr1 : expr2;

function isUserValid(bool){
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access denied";

var automatedAnswer = 
    "your account # is " + (isUserValid(false) ? "1234" : "not available" );  

function condition(){
    if(isUserValid(true)){
        return "You may enter";
    }else {
        return "Acces denied";
    }
}

var answer2 = condition();

//Switch statement

function moveCommand(direction){
    var whatHappens;
    switch (direction){
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you ran into a troll";
            break;            
        default:
            whatHappens = "please enter a valid direction";    
    }
    return whatHappens;
}