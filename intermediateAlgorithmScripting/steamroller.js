/*
Intermediate Algorithm Scripting: Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
  let temp = []; //I could not figure out a way to work this without having a function inside another function
		// recursion is very powerful, but it's a bitch to work with 
    function inside(array){
      for(let x of array){
      if(!Array.isArray(x)){
        temp.push(x);
      }
      else {
        inside(x);
      }
      }
      return temp;
    }

  return inside(arr);
}

steamrollArray([1, [2], [3, [[4]]]]); //returns [1,2,3,4]


