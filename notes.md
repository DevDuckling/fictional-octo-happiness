-----------------NOTES-----------------
1. array.map((num)=>{return num*2}) gives you copy of array and iterate over it. map expect a return or it wont do anything.
2. reduce(total, currentValue){total + currentValue}. It is used to add everything to array in single value.
3. ...spread give you another array with different pointer.
4. arguments object are not real array you need to turn it into array by using ...spread and save it to variable.
5. ...rest collects evry argument and store it in seperate array. e.g function(firstName, lastName, ...everythingElse) here everything else is going to collect all arguments. works with arrow functions 
6. DESTRUCTURING is taking value from group iterable and non iterables and storing them in variable
- In Array [newName, newName1] = fromArray;
- In Objects {key, anotherKey} = fromObject, {key:newKey, anotherKey:newAnotherKey} it find property store their value in provide name.
- In function if we need some parts from obj then define them in parameters like function clients({name, location}){return `${name} and ${location}`}