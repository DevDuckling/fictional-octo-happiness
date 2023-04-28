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

// Condition ? ExpIsTrue : ExpIsFalse;
// only works with yes or no
// taking code of line 44
 userLogIn ? console.log("welcome") : console.error("Login please");

//  ------------[Array] methods --------------
const mixedArray = [null, undefined, 27.11, "August", NaN]
// In console try mixedArray[1], according to length which is 5 but mixedArray[5] is undefined highest number order -1  

// push - add last element to the array
// pop - removes last element to the array
// shift- removes first element from the array
// unshift - add element at index[0] to the array

// mixedArray.push('item any');
// include() returns boolean value
// indexOf() returns indices value if not present returns -1
// slice(?start, ?end) begins from start stops at excluding end
// splice(?startingIndex, ?numberOfItemsToRemove, "add element")

//-----------OBJECTS{KEY:VALUE}---------------

const ninjas = {
    naruto: 'air',
    sasuke: 'electric',
    sakura:'healing',
    '32 gates': 'lorem ipsum',}

// object are key value pairs with unsystematic order
// they could be nested and you can access them as ninjas['sakura'] or ninjas.skaura 
// if you want to update objects you can object['key'] = 'value' or object.key = 'value'