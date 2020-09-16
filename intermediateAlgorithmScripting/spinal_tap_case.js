/*
Intermediate Algorithm Scripting: Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

*/

//I still do not get regex. I had to look up the right regex for this
// but i got everything else correctly

function spinalCase(str) {
  return str
  .split(/(?=[A-Z])|\W|_/)
  .join("-")
  .toLowerCase();
}

spinalCase('This Is Spinal Tap');

