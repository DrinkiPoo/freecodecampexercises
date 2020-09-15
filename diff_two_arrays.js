/*
Intermediate Algorithm Scripting: Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.
*/

//I came up with this, but it looks a little confusing

function diffArray(arr1, arr2) {
  let temp = [];
  temp.push(...arr1.filter(x => arr2.indexOf(x) == -1));
  temp.push(...arr2.filter(x => arr1.indexOf(x) == -1));
  return temp;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//I found this from FCC website and it looks a litte neater
// However it's almost equally lengthy stepwise

function diffArray(arr1, arr2) {
return arr1
.concat(arr2)
.filter(item => !arr1.includes(item) || !arr2.includes(item));
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
