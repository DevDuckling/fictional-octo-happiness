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
// -------------------------------------------------------------------------
// everything in js is based on trye or false
// false values - false 0 "" null undefined Na
// everything else is true

let userLogIn = "";

if(userLogIn){
    console.log("welcome");
} else{
    console.error("login please")
}

// operator ! && ||
// ( ... ) have higher precedence
// !(condn is true) answer is false

let loyalCustomerAge = 22;

if(loyalCustomerAge && loyalCustomerAge <= 20){
    console.log("We got an offer click on know more");
}else{console.error("Adults not allowed");}

let promotionDownGrade ="Yes";

if(promotionDownGrade ||  loyalCustomerAge <= 20){
    console.log("U will be missed");
} else{console.log("happy to see you!");}

// start ternary operators