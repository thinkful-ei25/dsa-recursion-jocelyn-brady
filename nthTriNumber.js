'use strict'; 

//input --> 7
//output --> 28 

function nthTriNumber(num){

  if (num === 1) return 1;  

  return num + nthTriNumber(num-1); 


}

console.log(nthTriNumber(9)); 