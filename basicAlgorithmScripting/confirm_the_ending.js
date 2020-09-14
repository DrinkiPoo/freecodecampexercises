/* 
Basic Algorithm Scripting: Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

This was my first idea, but turns out there's a neater way!

 function confirmEnding(str, target) {
   let temp = "";
   for(let i = str.length - target.length + 1;
           i <= str.length; i++){
             temp += str[i-1];
           }
   return (temp == target);
 }

*/

function confirmEnding(str, target) {
return (str.slice(str.length - target.length, str.length) == target)
}

confirmEnding("Bastian", "n");

