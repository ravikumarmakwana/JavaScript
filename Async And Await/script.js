// "use strict";

// let getRandomNumber = async function () {
//   console.log("Method");
//   let c = 1;
//   try {
//     setTimeout(function () {
//       c++;
//     }, 1000);
//     return c;
//   } catch (err) {
//     console.error(err);
//   }
// };

// console.log("First");
// (async function () {
//   let num = await getRandomNumber();
//   console.log(num);
// })();
// console.log("Second");

const func1 = async function () {
  console.log("Function 1");
};
const func2 = async function () {
  console.log("Function 2");
};
const func3 = async function () {
  console.log("Function 3");
};
const func4 = async function () {
  console.log("Function 4");
};
const func5 = async function () {
  console.log("Function 5");
};

const asyncFunction = async function () {
  await func1();
  await func2();
  await func3();
  await func4();
  await func5();
};
(async function () {
  await asyncFunction();
})();
