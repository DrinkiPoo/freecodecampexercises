/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

//kicked my ass. Learned that i need to understand the problem well, write down pseudocode/algorithm before starting to code!!

function checkCashRegister(price, cash, cid) {
  let obj = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "HUNDRED": 10000
  };
  let myObj = {};
  let changeNeeded = (cash - price) * 100;
  let totalCID = cid.reduce((a,b)=> a + b[1], 0) * 100;
  // console.log(totalCID, typeof totalCID, changeNeeded, typeof changeNeeded);

  //case 1: Not enough Money
  if(totalCID < changeNeeded){
    myObj.status = "INSUFFICIENT_FUNDS";
    myObj.change = [];
    return myObj;
  }

  //Case 2: Only enough for change// give out everything
  if(totalCID === changeNeeded){
    myObj.status = "CLOSED";
    myObj.change = cid;
    return myObj;
  }

  //case 3 & 4: Enough change in hand// engough money but not enough change. This is where we need to do some math  
  let rem = changeNeeded;
  let arr = [];

  for(let i = 8; i >= 0; i--){
    let denomination = Object.values(obj)[i];

    if(rem < denomination) { continue;}

    let needed = Math.floor(rem / denomination );
    let have = cid[i][1] * 100 / denomination ;
    let extract = Math.min(needed, have) * denomination;
    let key = Object.keys(obj)[i];

    

    if(have * denomination >= extract){
      arr.push([key, extract / 100]);
      rem -= extract;
    }
  }


  if(rem !== 0){
    myObj.status = "INSUFFICIENT_FUNDS";
    myObj.change = [];
  } else {
    myObj.status = "OPEN";
    myObj.change = arr;
  }
  
  return myObj;
}

let x = checkCashRegister(19.5, 20, [["PENNY", 0], ["NICKEL", 0], ["DIME", 0.5], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

console.log(x);

// {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
