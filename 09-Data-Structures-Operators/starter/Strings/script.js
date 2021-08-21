let fullName = 'Ravikumar Makwana';

console.log(fullName[0]);
console.log('Ravikumar Makwana'[0]);

console.log(fullName.length);

console.log(fullName.indexOf('a'));
console.log(fullName.lastIndexOf('a'));
console.log(fullName.indexOf('kumar'));
console.log(fullName.indexOf('Kumar'));

console.log(fullName);
console.log(fullName.slice(10));
console.log(fullName.slice(4, 9));

console.log(
  fullName.slice(
    fullName.indexOf('kumar'),
    fullName.indexOf('kumar') + 'kumar'.length
  )
);

console.log(fullName.slice(0, -4));

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

let email1 = 'hello@ravi.net';
let email2 = '   HellO@Ravi.Net  ';

console.log(email1 === email2.trim().toLowerCase());

console.log(email1.replace('e', 'E')); // replace only first occurrence
console.log(email1.replace(/e/g, 'E')); // regex

console.log(email1.includes('llo'));

console.log(fullName);
console.log(fullName.startsWith('ravi'));
console.log(fullName.startsWith('Ravi'));
console.log(fullName.endsWith('Ravi'));
console.log(fullName.endsWith('Makwana'));

let parts = fullName.split(' ');
console.log(parts);

let [firstName, lastName] = fullName.split(' ');
console.log(firstName);
console.log(lastName);

let capitalize = function (text) {
  let parts = text.split(' ');
  for (let i = 0; i < parts.length; i++) {
    parts[i] = parts[i][0].toUpperCase() + parts[i].slice(1).toLowerCase();
  }
  return parts.join(' ');
};

console.log(capitalize('raviKumAR makwAna'));
console.log(capitalize('thIS iS my certiFICATE'));

let message = 'Hello I am';

console.log(message.padStart(25, '*'));
console.log(message.padEnd(25, '*'));

console.log('Hello '.repeat(5));

let getATMCardNumber = function (number) {
  return number.slice(-4).padStart(number.length, '*');
};
console.log(getATMCardNumber('12345678'));
console.log(getATMCardNumber('23232323232323232'));
console.log(getATMCardNumber('23232323232321234'));
console.log(getATMCardNumber('232323232323343434343421234'));
