/*
Intermediate Algorithm Scripting: Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.
*/

function translatePigLatin(str) {
  let num = str.search(/[AEIOUaeiou]/)
  if(num === 0){
    return str.concat('way');
  }
  else if(num === -1){
    return str + "ay";
  }
  return str.slice(num)+str.slice(0,num)+"ay";
 }

translatePigLatin("consonant"); // returns onsonantcay

//I am still not comfy with regular expressions 
//need to master regex any way possible

