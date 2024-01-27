'use strict';
//1) Converting and Checking Numbers

//In JavaScript, every number is a floating point number. There is no integer type. So, 23 is a floating point number with .0 at the end. So, 23 is equal to 23.0. So, 23===23.0 is true.
console.log(23===23.0);

//Base 10 - 0 to 9. 1/10 = 0.1, 3/10 = 3.3333333333333333
//Binary base 2 - 0 1
console.log(0.1+0.2);
console.log(0.1+0.2===0.3); //false

//Conversion
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
console.log(Number.isNaN(23/0)); //false

//isFinite
//checks if value is a number and not infinity, and not NaN
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(+'20X')); //false
console.log(Number.isFinite(23/0)); //false

//isInteger
//checks if value is an integer
console.log(Number.isInteger(20)); //true
console.log(Number.isInteger(23.0)); //true
console.log(Number.isInteger(23/0)); //false