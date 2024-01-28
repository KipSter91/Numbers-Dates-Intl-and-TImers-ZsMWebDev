'use strict';
//1) Converting and Checking Numbers

//In JavaScript, every number is a floating point number. There is no integer type. So, 23 is a floating point number with .0 at the end. So, 23 is equal to 23.0. So, 23===23.0 is true.
console.log(23 === 23.0);

//Base 10 - 0 to 9. 1/10 = 0.1, 3/10 = 3.3333333333333333
//Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); //false

//Conversion
//Number is a built in function in JS
console.log(Number('23'));
//type coercion - JS automatically converts the number to string
console.log(+'23'); //same as above

//Parsing
//only the first number is returned
//we must give as second parameter the base of the number, which is 10 in this case
//ParseInt
console.log(Number.parseInt('30px', 10)); //30
console.log(Number.parseInt('e23', 10)); //NaN

//parseFloat
console.log(Number.parseFloat('2.5rem')); //2.5
console.log(Number.parseInt('2.5rem')); //2

//isNaN
//best way to check if value is NaN
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); //false
console.log(Number.isNaN(+'20X')); //true
console.log(Number.isNaN(23 / 0)); //false

//isFinite
//checks if value is a number and not infinity, and not NaN
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(+'20X')); //false
console.log(Number.isFinite(23 / 0)); //false

//isInteger
//checks if value is an integer
console.log(Number.isInteger(20)); //true
console.log(Number.isInteger(23.0)); //true
console.log(Number.isInteger(23 / 0)); //false

//2) Math and Rounding
//Math is a built in object in JS
//Math.sqrt
console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2)); //5 - same as above
console.log(8 ** (1 / 3)); //2 - cube root
console.log(25 ** 2); //625
console.log(8 ** 4); //512

//Math.max
//returns the maximum value
console.log(Math.max(5, 18, 23, 11, 2)); //23
//Math.max converts strings to numbers, as you can see below
console.log(Math.max(5, 18, '23', 11, 2)); //23
//Math.max does not parse strings to numbers, as you can see below, we get NaN
console.log(Math.max(5, 18, '23px', 11, 2)); //NaN

//Math.min
//returns the minimum value
console.log(Math.min(5, 18, 23, 11, 2)); //2

//Math.PI
//returns the value of PI
//Here below, we are calculating the area of a circle with radius 10
console.log(Math.PI * Number.parseFloat('10px') ** 2); //314.1592653589793

//Math.random
//returns a random number between 0 and 1
console.log(Math.random()); //0.7871914068283662

//below formula calculates a random number between min and max
const randomNumber = (min, max) => {
  return (Math.floor(Math.random() * (max - min) + 1) + min)
}

console.log(randomNumber(5, 19));

//Rounding integers
//Math.trunc
//removes the decimal part of the number
console.log(Math.trunc(25.7));  //25

//Math.round
//rounds the number to the nearest integer
console.log(Math.round(25.7));  //26 
console.log(Math.round(25.4));  //25

//Math.ceil
//rounds the number up to the nearest integer
console.log(Math.ceil(25.7));  //26
console.log(Math.ceil(25.4));  //26

//Math.floor
//rounds the number down to the nearest integer
console.log(Math.floor(25.7));  //25
console.log(Math.floor(25.4));  //25

//Rounding decimals
//toFixed
//returns a string
//rounds the number to the number of decimal places specified
console.log((2.7).toFixed(0));  //3
console.log((2.7).toFixed(3));  //2.700
console.log((2.345).toFixed(2));  //2.35
console.log(+(2.345).toFixed(2));  //2.35 - converts to number

//3) The Remainder Operator
//remainder operator is %
//returns the remainder of the division
//remainder is also called modulo
console.log(5 % 2); //1
console.log(5 / 2); //2.5

console.log(8 % 3); //2
console.log(8 / 3); //2.6666666666666665

//below function checks if a number is even or odd
const isEven = n => {
  return n % 2 === 0;
}

console.log(isEven(8)); //true
console.log(isEven(23)); //false
console.log(isEven(514)); //true

//Numeric separators
//makes the number easier to read
//we can use _ to separate numbers
console.log(1_000_000); //1000000
console.log(10_000_000); //10000000

//we camt use _ at the beginning or end of a number
//console.log(_100); //SyntaxError: Invalid or unexpected token
//console.log(100_); //SyntaxError: Invalid or unexpected token

//from API we get a number like this
const accountNumber = 123456789;
//we can use _ to separate numbers
const accountNumber2 = 123_456_789;
//both are same
console.log(accountNumber === accountNumber2); //true
