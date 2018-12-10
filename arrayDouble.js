'use strict';

function arrayDouble(arr) {
  // let newArr = [];
  //Base Case

  if(arr.length === 1 ) {
    return arr[0]*2;
  }

  return [arr[0]*2].concat(arrayDouble(arr.slice(1))); 



}

console.log(arrayDouble([1, 2, 3]));


// input [1,2,3] 
//output [2,4,6] 



