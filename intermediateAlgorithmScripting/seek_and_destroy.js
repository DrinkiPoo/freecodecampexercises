/*
Intermediate Algorithm Scripting: Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.
*/

//This is my solution
//straight forward but might be a little confusing 

function destroyer(arr) {
  for(let i = 0; i <arguments.length; i++){
    let array = arguments[0];
    let item = arguments[i];

    while(array.includes(item)){
      array.splice(array.indexOf(item), 1);
    }
  }
  return arguments[0];
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); //returns [1,1]

//this is one of the solutions from FCC
//but it uses .filter() method and hence does it chance the original array
// looks neat nonetheless

const destroyer = (arr, ...valsToRemove) => arr.filter(elem => !valsToRemove.includes(elem));


//this returns the same result, but the original array remains unchanged
