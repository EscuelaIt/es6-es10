const emailRegex = /([-.\w]+)@([\w-]+\.)+([\w-]+)/g;
const rta = emailRegex.exec('nicolas@mail.com');
console.log(rta[1]);
console.log(rta[2]);
console.log(rta[3]);

const emailRegex2 = /(?<address>[-.\w]+)@(?<url>[\w-]+\.)+(?<domain>[\w-]+)/g;
const rta2 = emailRegex2.exec('nicolas@mail.com');
console.log(rta2.groups.address);
console.log(rta2.groups.url);
console.log(rta2.groups.domain);