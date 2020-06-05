const obj = {
  foo (a, b) {
    return a + b
  },
  [ "baz" + "12" ]: 42
};
console.log(obj.foo(1,2));
console.log(obj.baz12);

function* demo () {
  yield "1";
  yield "2";
  yield "3";
}


var demo = demo();
console.log(demo.next().value);
console.log(demo.next().value);
console.log(demo.next().value);

function* range (start, end, step) {
  while (start < end) {
    yield start
    start += step
  }
}

for (let i of range(0, 10, 1)) {
  console.log(i) // 0, 2, 4, 6, 8
}

const obj2 = {
  name: 'Nicolas',
  lastName: 'Molina',
  age: 27
}
const { name, ...obj3 } = obj2;
console.log(name);
console.log(obj3);

let emailRegex = /([-.\w]+)@([\w-]+\.)+([\w-]+)/g;
const rta = emailRegex.exec('nicolas@mail.com');
console.log(rta);

let emailRegexg = /(?<a>[-.\w]+)@(?<b>[\w-]+\.)+(?<d>[\w-]+)/g;
const rta2 = emailRegexg.exec('nicolas@mail.com');
console.log(rta2.groups.a);
console.log(rta2.groups.b);
console.log(rta2.groups.d);

