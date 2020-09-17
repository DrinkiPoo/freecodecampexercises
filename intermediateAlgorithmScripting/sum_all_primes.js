/*
Intermediate Algorithm Scripting: Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
  let number = 2; //first prime number
  let array = []; //array to store prime numbers
  let tempArray; //subset of array that only includes numbers < sqrt of number

  while(number <= num){
    tempArray = array.filter(x => x <= Math.pow(number, 0.5));
    
    if(tempArray.every(x => number % x !== 0)){
      array.push(number);
    }

    number++;
    
  }
  return array.reduce((a,b)=>a+b);

}

sumPrimes(10);

//I like this algorighthm i cam up with. 
// I have other algorithms too 
