function arrayDouble(arr) {
  let newArr = [];
  //Base Case

  if(arr.legnth === 0 ) {
    return newArr;
  }
  if(arr.length === 1) {
    return arr[0] * 2;
  }

  let str = '';
  let num = arr[0]*2;
  newArr.push(num);
  str += num + ',' + arrayDouble(arr.slice(1)); 
  return str.split(',');

  // let num = arr[0]*2;
  // newArr.push(num, arrayDouble(arr.slice(1)));

  // arrayDouble(arr.slice(1));


  // return newArr;


  

//  console.log(arr.slice(1))
//  console.log(arr.splice(0)) 
 
// return newArr.push(arrayDouble(arr.splice(1)));

}

console.log(arrayDouble([1, 2, 3]));