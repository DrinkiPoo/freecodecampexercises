/*
Intermediate Algorithm Scripting: Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
  for(var i = 0; i <arr.length; i++){ //doesn't work if i use let instead of var
    if(func(arr[i])){ break;}
  }
  return arr.slice(i);
}

dropElements([1, 2, 3], function(n) {return n < 3; }); //returns [1,2,3]

//I am no fully confident about the nuances of var vs let/cont, scope, closure etc
// but i managed to solve my manipulating var/let difference 
