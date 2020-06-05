const name = 'Nicolas';
const lastName = 'Molina';

const template = 'Hola ' + name + ' ' +  lastName +  ' buenos días';
console.log(template);

const template2 = `Hola ${name} ${lastName} buenos días`;
console.log(template2);

const template4 = '<div>' +
  '<p> ' + name + ' </p>' +
  '<p> ' + lastName + ' </p>' +
'</div>';
console.log(template4);

const template5 = `<div>
  <p>${name}</p>
  <p>${lastName}</p>
</div>`;
console.log(template5);