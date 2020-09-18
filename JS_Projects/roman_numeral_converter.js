/*
JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
  let obj = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M"
  };
  let rem = num;
  let rom = "";
  let part;

  while(rem > 0){

    for(let i =12; i >=0; i--){
      if(Object.keys(obj)[i] <= rem){
        part = Object.keys(obj)[i];
        break;
      }
    }

    for(let i = 0; i < Math.floor(rem / part) ; i++){
      rom += obj[part];
      rem -= part;
    }
  }
  return rom;
}

convertToRoman(36);
// returns XXXVI


//I did the same problem about a year ago and i spent a long time with that
// -------->
//this one was pretty dificult. I am sure my code is messy, but it is stricly mathematical, and i can include more symbols if I need to go more than 3999.
//change the input number towards the end 

function funcYouRomanAssholes(num){
  let x = num;
  let arr = [[1000],[500],[100],[50],[10],[5],[1]];
  let obj={1000:'M',500:'D',100:'C',50:'L',10:'X',5:'V',1:'I'};
  let newarr=[];
  //I am denominating num into 1000,500,100,50,10,5 and 1 blocks. there will be 7 blocks if we are not exceeding 3999
  for(let i=0; i<7;i++){
    let y = (x-x%arr[i][0])/arr[i][0];
    if(y>=1){
      arr[i].push(y, 7-i-1);
    }
    else {
      arr[i].push(0, 7-i-1);
    }
    x=x%arr[i][0];
  }
  //the following code will make sure that we dont get more than three same symbols. in case of consecutive 4 symbols, it will carry over to the next place value. 
  for(let i=6; i>0;i--){
    if(arr[i][1]===4){
      arr[i][1]=1;
      arr[i-1][1]+=1;
      arr[i][2]+=1;
      arr[i-1][2]-=1;
    }
  }
// the following code will change two Vs into a since X, two two Ls to one C and so forth
  for(let i =5; i>0; i-=2){
    if(arr[i][1]===2){
      arr[i][1]=1;
      arr[i][0]*=2;
    }
  }
//sorting by the last element of each arry. this element is the position of coming symbols. 
  arr.sort((x,y)=>y[2]-x[2]);
  //uncomment the following if you want to see what's going on behind the scene 
  console.log(arr);
  

  for(let i=0;i<7;i++){
    for (let j=0;j<arr[i][1];j++){
      newarr.push(obj[arr[i][0]]);
    }
  }

  return newarr.join('');
}
//Enter a number between one and 3999.will need more symbols if we exceed 3999
console.log(funcYouRomanAssholes(25));

