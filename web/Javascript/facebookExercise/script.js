var database = [
    {
        username: "andrei",
        password: "supersecret"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning."
    },
    {
        username:"Sally",
        timeline: "Javascript is cool."
    }
];

var userNamePrmpt = prompt("what's your username?");
var Password = prompt("whats your password?");

function signIn(user,pass) {
    if (user === database[0].username && pass === database[0].password){
        console.log(newsFeed);
    }else{
        alert("sorry, wrong username and password!");
    }
}

signIn(userNamePrmpt,Password);