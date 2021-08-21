// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

let arr = [1, 2, 3, 4, 5];
let [x, y, z, w] = arr;
console.log(x, y, z, w);

let a = 10;
let b = 20;
console.log('Before swap');
console.log(`a = ${a}, b = ${b}`);
// default value
[a = 0, b] = [b, a];
console.log('After swap');
console.log(`a = ${a}, b = ${b}`);

let person = {
  firstName: 'Ravikumar',
  lastName: 'Makwana',
  age: 18,
  hobbies: ['Programming', 'Coding'],
};

let { firstName, age } = person;
console.log('FirsrName : ' + firstName);
console.log('age : ' + age);

// custom variable names with default values
let { firstName: personFirstName = '', lastName: personLastName = '' } = person;
console.log('Person FirstName : ' + personFirstName);
console.log('Person LastName : ' + personLastName);

let n1 = 10;
let n2 = 30;
let newObj = { a: 100, b: 50, c: 40 };

console.log(`n1 = ${n1}, n2 = ${n2}`);
({ a: n1, b: n2 } = newObj);
console.log(`n1 = ${n1}, n2 = ${n2}`);

let outerObj = {
  innerObj: {
    innerObj_value1: 'Inner object value 1',
    innerObj_value2: 'Inner object value 1',
  },
};

let { innerObj: innerObjFirstValue } = outerObj;
console.log(innerObjFirstValue);

// Spread operator ... => unpack array
let arr1 = [4, 5, 6, 7];
let newArr = [1, 2, 3, ...arr1];
let newBiggerArr = [...newArr, 8, 9, 10];
console.log(newArr);
console.log(...newArr);
console.log(...newBiggerArr);
let myString = 'Ravikumar';
console.log(...myString);

function orderThreeItems(item1, item2, item3) {
  console.log(`Ordered Items ${item1}, ${item2} and ${item3}`);
}

let itemsArr = ['Redmi note 9 pro', 'OPPO 12', 'Vivo 166'];
orderThreeItems(...itemsArr);

//Rest is used for pack array
let [...packArray] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log('packArray : ' + packArray);
console.log(packArray);

function AddNumbers(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
}
console.log(AddNumbers(1));
console.log(AddNumbers(1, 2));
console.log(AddNumbers(1, 2, 3));
console.log(AddNumbers(1, 2, 3, 4));
console.log(AddNumbers(1, 2, 3, 4, 5));

let shortCircuitingOR = '' || 0 || null || 0 || 'hello' || 1 || null;
console.log(shortCircuitingOR);

let personAge = 18;
console.log('Age  : ' + (personAge || 0));

let shortCircuitingAND = 'Hello' && 1 && true && null && 10;
console.log('ShortCircuiting AND : ' + shortCircuitingAND);

// Nullish operator ?? works for null, undefine

console.log('Hello' ?? 'Default Value'); //Hello
console.log(null ?? 'Default Value'); //Default Value
console.log(null ?? null); //null
