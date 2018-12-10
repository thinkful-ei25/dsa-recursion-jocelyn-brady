function countingSheep(num){
  const message = 'Another sheep jumped over the fence!'
  //base case 
  if(num === 0 ) return
  
  //Output
  // num + message
  console.log(`${num} - ${message}`);
  countingSheep(num - 1)



}

countingSheep(5);