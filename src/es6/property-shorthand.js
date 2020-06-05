function createPerson(name = 'Nicolas', lastName = 'Molina', age = 27) {
  return { name, lastName, age };
}

console.log(createPerson('Julian'));

const sum = (a,b) => a + b;

const person = {
  name: 'Nicolas',
  [`attr_${sum(2,2)}`]: 23
}

console.log(person.name);
console.log(person.attr_4);

const pet = {
  name: 'Fifi',
  eat() {
    console.log('eating');
  }
}

console.log(pet.name);
console.log(pet.eat());