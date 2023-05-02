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

// --------------for loop-----------------
// Accessing nest array items throught for loop

let randomData = [
    ['F', 'O', 'O'],
    ['B', 'A', 'R'],
    ['F', 'O', 'O']
] 

for(let i = 0; i < randomData.length; i++){
    console.log(randomData[i]);
    let rowString = randomData[i];
    for(j = 0; j < rowString.length; j++){
        console.log(rowString[j]);
    }
}
// ---------------for in works OBJECTS---------------
for(power in ninjas){
    console.log(power +' elemental type is '+ ninjas[power]);
}

// it prints their indices
for(charct in randomData){
    console.log(charct)
}
// ---------------for of work with ITERaBLES e.g. array---------
for(row of randomData){
    console.log(row);
    for(letter in row){
        console.log(row[letter])
    }
}

// ninjas is not iterable 
// for(pow of ninjas){
//     console.log(pow);
// }

// you can use OBject.keys and Object.values to iterate
for(p of Object.keys(ninjas)){
   console.log(p)
}

for(p of Object.values(ninjas)){
    console.log(p)
 }

// --------------scope
// child functions can access parent function variable if not found on nearest scope
//   every loop is block and func is func scope I am talking about {}

function exampleFunc(){
    let a = 'first var';
    function printStrLetters(){
        // let a = 'second var';
        for(let i = 0; i  < a.length; i++){
            console.warn(a);
            console.log(a[i]);
        }
    }
    printStrLetters();
}

// adding function to ibject and accessing it is method

// -----Factory Function
function multiplyBy(num){
    return function(x){
        return x * num;
    }
}
// const triple = mutliplyBy(3);
// triple(3) --> 9

// -------------MAP use return in func give new array-----------
const arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const arrayB = [1, 2, 5, 4, 3,5, 6,5];
const arrayPrices = [22, 63, 14,20, 110.71]

// console.log(arrayA.map(function(num) {return num * 2}))

// Arrow functions
console.log(arrayA.map((num)=>{return num*2}))
const evenNums = arrayA.filter(n => n%2===0);
const oddNums = arrayA.filter(n=>n%2===1);
const bigNums = arrayA.filter(n => n >5)

const findFive = arrayB.find(n => n===5)
const filterFive = arrayB.filter(n => n ===5)
const everyFive = arrayB.every(n => n ===5)

const sortAscend = arrayPrices.slice().sort((a,b)=> a-b)
// it will in acsending order
const sortDscend = arrayPrices.slice().sort((a,b)=> b-a)
// desending order 
// it will mutate array so use slice() it give u copy of arr