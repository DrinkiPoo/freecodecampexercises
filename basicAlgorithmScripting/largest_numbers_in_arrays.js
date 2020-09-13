// This function will return an array with largest number of all the nested arrays
//learned that i need to use the first element as the comparision element not zero because that doesnt work with -ve numbers
// also learned that  for/in loop is for objects and for/of is for arrays

function largestOfFour(arr) {
  let myArr = [];

  for (let sub of arr){
    let largest = sub[0];
    for (let num of sub){
      if(num > largest){
        largest = num;
      }
    }
    myArr.push(largest);
  }
  return myArr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
