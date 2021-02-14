function myFirstFunction(){
   return "Hello there!";
}

console.log(myFirstFunction());

const myVariableFunction = function () {
    console.log("Hello there from anonymous function");
}

myVariableFunction();

//arrow functions declare the "this" keyword differently, bunds it to te scope of the function
const myArrowFunction = () => {console.log("hello")};

myArrowFunction();

//callbacks
//function that is passed as an argument to the function
function sayHiLater(anyFunctionReference) {
    //simulate some code running
    //takes some time
    anyFunctionReference();
}

//hoisting - when files and variables are declared, they are put at the top fo the file

sayHiLater(() => {console.log("Hi")});

const sayHi = () => {
    console.log("Hello!");
}

sayHiLater(sayHi);

function interact(genericInteraction, name){
    console.log(genericInteraction(name));
}

//call interact
//should call poke function and say Poke + name

const poke = (name) => {
    return "Poke " + name;
};

interact(poke, "Nicole");

// hug someone by calling interact in 1 line
interact((name) => {return "Hug " + name}, "Napster");