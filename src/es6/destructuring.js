const pet = {
  name: 'Fifi',
  age: 10,
  eat() {
    console.log('eating');
  }
}

// const name = pet.name;
// const age = pet.age;
// console.log(name, age);

const {name, age} = pet;
console.log(name, age);

// const list = [1,2,3];
// const a = list[0];
// const c = list[2];
// console.log(a,c);

const list = [1,2,3];
const [a,b] = list;
console.log(a,b);