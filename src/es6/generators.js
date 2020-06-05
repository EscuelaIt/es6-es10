function* demo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const generator = demo();
console.log('con manual');
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);

console.log('con for');
for (let value of generator) {
  console.log(value);
}

function* range (start, end, step) {
  while (start < end) {
    yield start
    start += step
  }
}


const generator2 = range(10, 20, 2);
for (let value of generator2) {
  console.log(value);
}