/*
Basic Algorithm Scripting: Slice and Splice
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

*/

function frankenSplice(arr1, arr2, n) {
  let newArray = [...arr2];	//so that the second array remains unchanged
  newArray.splice(n,0,...arr1);	//got to remember splice parameters. the second 0 is to not remove any items 
  return newArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
