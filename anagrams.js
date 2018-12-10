'use strict'; 


function anagrams(prefix, str){

  if(str === '') {
    return [prefix];
  }
  let words = [];
  for(let i = 0; i < str.length; i++) {
    words = words.concat(anagrams(prefix + str[i], str.slice(0, i) + str.slice(i+1)));
  }
return words;  
}

const obj = {
  prefix: '',
  str: 'east'
}

console.log(anagrams(obj.prefix, obj.str));
  
  