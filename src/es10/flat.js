const numbers = [[1,2,3,4], [1,2,3,[1,2,3,4]], [1,2,3,4], [1,2,3,4]];
console.log(numbers);
console.log(numbers.flat());
console.log(numbers.flat(2));

const numbers2 = [1,2,3,4]
.flatMap(item => [item, item * 2]);

console.log(numbers2);

try {
  // good code
} catch {
  // bad code
  console.log(error);
}

console.log("        Hola      ".trim());
console.log("        Hola      ".trimStart());
console.log("        Hola      ".trimEnd());

console.log("        Hola      ".trim().length);
console.log("        Hola      ".trimStart().length);
console.log("        Hola      ".trimEnd().length);