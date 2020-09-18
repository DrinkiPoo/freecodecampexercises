/*
JavaScript Algorithms and Data Structures Projects: Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {

  return str
  .split("")	//split into array elements so you can iterate over it. 
  .map((x)=> {	//mapping into an array after adding or substracting 13, and  turning back to string
    let r = x.charCodeAt(0);
    if(r >= 65 && r < 78){
      return String.fromCharCode(r + 13);
    }
    else if(r >= 78 && r < 91){
      return String.fromCharCode(r - 13)
    }
    else {
      return String.fromCharCode(r);
    }
  })
  .join("");	//joining to make a string back 
  
}

rot13("SERR PBQR PNZC");

