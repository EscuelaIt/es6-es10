const defaultPerson = {
  name: 'Nicolas',
  lastName: 'Molina',
  age: 27
}

const newPerson = {
  ...defaultPerson,
  age: 28
}

console.log(defaultPerson);
console.log(newPerson);

const numbersA = [1,2,3,4];
const numbersB = [5,6,7,8];
const numbersC = [...numbersA, ...numbersB];
numbersC.push(111);

console.log(numbersA);
console.log(numbersB);
console.log(numbersC);

// delete newPerson.age;
// console.log(newPerson);

const { age, ...newPerson2 } = newPerson;
console.log(newPerson2, age);

const sum = (...params) => {
  return params.reduce((count, item) => count + item, 0);
}

const rta = sum(1,2,3,4);
console.log(rta);
