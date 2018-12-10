'use strict'; 

//input  'house'
//output 'esuoh' 

//base case '' --> return


function reverseString(string){
  if (string.length === 1){
    return string[0]; 
  } 

  // console.log(string.slice(0,-1));

  return string.slice(-1)+reverseString(string.slice(0,-1)); 

}

console.log(reverseString('h'));