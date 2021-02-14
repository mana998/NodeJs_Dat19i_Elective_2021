// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";

// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

//concatenation
console.log("My first name is " + firstName + " and my last name is " + lastName);

//string literal
console.log(`My first name is ${firstName} and my last name is ${lastName}`);

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2020";
const number = 1;

// Add the year plus the number
// The result should be 2020
// You cannot touch line 1 or 2

//converts whole string
const result =  Number(year) + number;
//converts till first non-digit character
//works 123abc4 -> 123 unlike Number
const result2 =  parseInt(year) + number;
//converts year to number 
const result3 =  +year + number;
console.log(result);
console.log(result2);
console.log(result3);

// --------------------------------------

