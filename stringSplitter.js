
function stringSplitter(str, sep) {
str = str.toLowerCase();

  if(str.includes(sep) === false) {
    return str;
  }
  let i = str.indexOf(sep);
return str.substring(0, i+1).concat(',', stringSplitter(str.substring(i+1), sep));
}

console.log(stringSplitter('Hello My Name Is' , 'i'));




