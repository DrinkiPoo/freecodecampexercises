/*
Basic Algorithm Scripting: Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

*/

function repeatStringNumTimes(str, num) {
  let x = "";
  for (let i = 0; i < num; i++){
    x += str;
  }
  return x;
}

repeatStringNumTimes("abc", 3);
