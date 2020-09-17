/*
Intermediate Algorithm Scripting: Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether() {
  if([...arguments].every(x=> typeof x === 'number')){
  if(arguments.length === 1){
    return (x)=> (typeof x === 'number')
    ? arguments[0] + x
    : undefined
  }
  return arguments[0]+ arguments[1];
  }
  return undefined;
}

addTogether(2,3); //returns 5

//not too proud of this
