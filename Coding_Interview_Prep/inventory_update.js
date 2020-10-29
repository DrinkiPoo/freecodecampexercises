/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item
*/

function updateInventory(arr1, arr2) {

  for(let r of arr2){
    let count = 0;
    for(let s of arr1){
      if(r[1]==s[1]){
        s[0] += r[0];
        break;
      }
      count++;
    }
    if(count == arr1.length){
      arr1.push(r);
    }
  }

  return arr1.map(x => [x[1], x[0]]).sort().map(x => [x[1], x[0]]);
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
