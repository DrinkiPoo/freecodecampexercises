/*
Basic Algorithm Scripting: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

*/
function titleCase(str) {
  let myFunc = (x) => {
   let temp = x[0].toUpperCase();
   for(let i = 1; i < x.length; i++){
     temp += x[i];
   }
   return temp;
 };

 return str.toLowerCase().split(" ").map(myFunc).join(" ");
  
}
titleCase("I'm a little tea pot");

//I have a feeling that there should be a neater way to do this. 
//There is a function inside of a functional and i dont like it all that much.
