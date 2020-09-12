// output the given string in reverse order 

function reverseString(str) {
  let x = '';
  for (let char in str){
    x += str[str.length -1 - char]
  }
  return x;
 }

console.log(reverseString("hello"));
