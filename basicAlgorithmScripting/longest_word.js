// find the longest word in a given sentence 
// trying to not use any string methods


function findLongestWordLength(str) {
  let startAt = 0;
  let indexOfSpace; 
  let long = 0;
  let longest = 0;

  while (indexOfSpace != -1){
    indexOfSpace = str.indexOf(" ", startAt);
       
    if (indexOfSpace == -1) {
      long = str.length - startAt;
    } else {
        long = indexOfSpace - startAt;
    }

    if (long > longest){
      longest = long;
    }
  
    startAt = indexOfSpace + 1;
  }

  return longest; 
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

