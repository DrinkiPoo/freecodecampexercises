/*
Intermediate Algorithm Scripting: Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
  let gcd = (a,b) => {  
    if(a % b == 0){
      return b ;
    }
    else {
      return gcd(b, a % b);
    }
  }

  //this gcd function takes the larger num as the first arg
  //therefore we have to work our way down the series

  let a = Math.max(...arr);
  let b = a - 1;
  let lcm = 1;
  while( b >= Math.min(...arr)){
    lcm = a * b / gcd(a, b);
    a = lcm; 
    b--;
  }
  return lcm;
}


smallestCommons([1,5]); //returns 60 whic is divisible by 1,2,3,4 and 5

