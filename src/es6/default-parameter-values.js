function createPerson(name, lastName, age) {
  return {
    name: name || 'Nicolas',
    lastName: lastName || 'Molina',
    age: age || 27
  }
}

function createPerson2(name = 'Nicolas', lastName = 'Molina', age = 27) {
  return {
    name: name,
    lastName: lastName,
    age: age
  }
}

console.log(createPerson('Julian'))
console.log(createPerson2('Julian', 'Perez'))