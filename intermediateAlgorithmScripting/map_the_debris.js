/*
Intermediate Algorithm Scripting: Map the Debris
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  return arr.map(obj => {
    let myObj = {};
    myObj.name = obj.name;
    myObj.orbitalPeriod = Math.round(2*Math.PI*Math.pow((Math.pow(earthRadius+obj.avgAlt,3) / GM), 0.5));
    return myObj;
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
//returned [{name: "sputnik", orbitalPeriod: 86400}]

//got a better idea of how to use map() to manipulate objects within arrays
