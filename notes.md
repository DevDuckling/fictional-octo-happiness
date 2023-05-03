-----------------NOTES-----------------
1. array.map((num)=>{return num*2}) gives you copy of array and iterate over it. map expect a return or it wont do anything.
2. reduce(total, currentValue){total + currentValue}. It is used to add everything to array in single value.
3. ...spread give you another array with different pointer.
4. arguments are not real array you need to turn it into array by using ...spread and save it to variable.
