/*
Basic Algorithm Scripting: Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {
  let newArr = [];	//it's just easier to push items that pass the test into a new array than to delete them because the idex gets fucked up
for(let item of arr){
  if(item){		// this is a tricky one. I tried (item == true) and (item != false) and neither works. Keyword here is 'evaluates' to
    newArr.push(item);	// false and the best way to test that is (item) and not (item ==true) or (item != false)
  }
}
arr = [...newArr];
return arr;
}

bouncer([7, "ate", "", false, 9]);
