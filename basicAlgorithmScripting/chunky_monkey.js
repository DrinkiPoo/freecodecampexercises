/*
Basic Algorithm Scripting: Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
---
This one was quite confusing. I have done it in two different ways.
 */

function chunkArrayInGroups(arr, size) {
  let max = Math.ceil(arr.length / size);
  let arr1 = [];
  let arr2 = [];
  
  for(let i = 0; i < max -1; i++){
    for(let j = 0; j < size; j++){
      arr1.push(arr[i*size +j]);
    }
    arr2.push(arr1);
    arr1 = [];
  }

  for(let i = (max - 1) * size; i < arr.length; i++){
    arr1.push(arr[i]);
  }
  arr2.push(arr1);
  return arr2;
}

x = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 2);
console.log(x);

// And this is another way:
function chunkArrayInGroups(arr, size) {
  let arr1 = [];
  let arr2 = [];

  for(let i = 0; i < arr.length; i+= size){
    for(let j = i; j< i+ size; j++){
      if(j == arr.length){
        break;
      }
      arr1.push(arr[j]);
    }
    arr2.push(arr1);
    arr1 = [];
  }
  return arr2;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", 5], 2));


//both ways I have used two loops and i think that i should be able to do this with just one. 
