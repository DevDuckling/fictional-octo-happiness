// alert("I am working!!");

// Variables

let age = 21;
// mutable

const maxAge = 28;
// immutable

var minAge = 18;

console.log(Math.random()); 
// creates number between 0 and 1

console.log(Math.random() * 6)
// would give number between 0 and 5 if we want 6 in it then add + 1 to it

console.log((Math.random() * 6) + 1);
// to remove decimal we use Math.floor

console.log(Math.floor(Math.random() * 6) + 1);
// result is including 1 to 6 

// -------STRING TEMPLATE LITERAL using back-tick `` in between use ${in here code}

console.log(`Your current age is ${age}.\n You can be senior is ${maxAge - age}.\n For now your dice number is ${Math.floor(Math.random() * 6) + 1}.`);

// --------parseINT or parseFloat

const foo = '27.89';

console.log(typeof parseInt(foo));
// converts string to number

const bar = '27.89';

console.log(parseFloat(bar)); 