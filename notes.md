-----------------NOTES-----------------
1. array.map((num)=>{return num*2}) gives you copy of array and iterate over it. map expect a return or it wont do anything.
2. reduce(total, currentValue){total + currentValue}. It is used to add everything to array in single value.
3. ...spread give you another array with different pointer.
4. arguments object are not real array you need to turn it into array by using ...spread and save it to variable.
5. ...rest collects evry argument and store it in seperate array. e.g function(firstName, lastName, ...everythingElse) here everything else is going to collect all arguments. works with arrow functions 
6. DESTRUCTURING is taking value from array and assigning them variable name
