'use strict'; 

//input: 7
//output: 13





function fibonacci(num){

 
  if(num <= 2){
    return 1;
  }
 
  return fibonacci(num - 1) + fibonacci(num - 2);

}

console.log(fibonacci(5)); 