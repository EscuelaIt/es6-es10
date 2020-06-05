const numbers = [1,2,3,4,3];

const rta = numbers.filter(item => item === 3);
console.log(rta);

const rta2 = numbers.find(item => item === 3);
console.log(rta2);

const rta3 = numbers.findIndex(item => item === 3);
console.log(rta3);

console.log("naN".repeat(10));