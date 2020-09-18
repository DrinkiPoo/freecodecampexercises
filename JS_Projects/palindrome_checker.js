/*
JavaScript Algorithms and Data Structures Projects: Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/

//this is a simple code i came up with

function palindrome(str) {
  let x = str.replace(/\W|_/g, "").toLowerCase();
  console.log(x);
  for(let i = 0; i <= x.length /2; i++){
    if(x[i] !== x[x.length - i-1]){
      return false;
    }
  }
  return true;
}



palindrome("eye");

//but it runs several string methods on the entire string even before comparing
//this wont be efficient for larg text strings
//let me  write something better


function palindrome(str) {
//i want to compare one character at a time
//so it wont be resource heavy
//if the character isnt alphanumeric, skip it 

let front = 0;
let back = str.length -1;

while (front <= back){
  if(str[front].match(/[\W_]/)){
    front++;
    continue;
    //if front is \W or _, then f++ and get to the next iteration
  }

  if(str[back].match(/[\W_]/)){
    back--;
    continue;
    //these two ifs will make sure that we are comparing the right
    //characters and not non-alphanumeric ones (\W or the underscore)
  }

  if(str[front].toLowerCase() !== str[back].toLowerCase()){
    return false;
  }

  front++;
  back --;
}

return true; // if the while loop finishes, then it must be a palindrome

}

//this is much better!
