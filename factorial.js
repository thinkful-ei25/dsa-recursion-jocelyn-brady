// input: 5
// output: 120

function fact(num) {
  if(num === 1) return 1;

  return num * fact(num-1);
}

console.log(fact(5));