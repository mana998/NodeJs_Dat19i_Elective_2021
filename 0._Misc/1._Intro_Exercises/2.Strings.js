// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2


// --------------------------------------

const result = parseFloat(numberOne) + parseFloat(numberTwo);
//const result = Number(numberOne) + Number(numberTwo);
console.log(result);

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

// --------------------------------------

const resultDecimals = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(resultDecimals.toFixed(2));

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const average = (one + two + three) / 3;
console.log(average.toFixed(5));

// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log(letters[2]);

// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const capital = fact.replace("j","J");
console.log(capital);

// --------------------------------------


