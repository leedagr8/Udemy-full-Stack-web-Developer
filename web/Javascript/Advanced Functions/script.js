//Closures - the child scope always has access to the parent scope
//A function ran. The function executed. It's never going to execute again.
//But it's going to remember that there are references to those variables.

//Currying- converting a function that takes multiple action into a function that takes in actions 1 at a time
//USed for making functions more extensible 
const multiply = (a,b) => a+b;
const curriedMultiply = (a) => (b) => a +b;
curriedMultiply(3);

//compose - act of putting 2 functions together to form a third function
//The the output of 1 function is the input to another

const compose = (f,g) => (a) => f(g(a));

const sum = (num) => num +1;

compose(sum, sum)(5);

// Avoiding Side effects, functional purity.  
//Deterministic - By avoiding side effects and always returning. No matter what input
//Goes through the function the return value will always be the same.