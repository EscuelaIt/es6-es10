const numbers = [1,2,3,4];
const rta = numbers.map(item => {
  // code
  return item * 2;
});
const rta2 = numbers.map(item => item * 2);
const rta3 = numbers.map(function(item){
  return item * 2;
});
console.log(rta, rta2, rta3);

const rta4 = numbers // [1,2,3,4]
.filter(item => item % 2 === 0) // [2,4]
.map(item => item * 2) // [4,8]
.filter(item => item === 4); // [4]

console.log(rta4);