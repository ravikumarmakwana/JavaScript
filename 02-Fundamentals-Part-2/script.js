"use strict";

function FactorialInLine(number) {
  return number > 0 ? number * Factorial(number - 1) : 1;
}

function Factorial(number) {
  if (number > 0) return number * Factorial(number - 1);
  else return 1;
}

console.log("Factorial of 5 = " + Factorial(5) + "😍😍😍😍😍😍😍");
console.log("Factorial of 5 = " + FactorialInLine(5));
console.log("Factorial of 10 = " + Factorial(10));
console.log("Factorial of 10 = " + FactorialInLine(10));
console.log("Factorial of 3 = " + Factorial(3));
console.log("Factorial of 3 = " + FactorialInLine(3));
console.log("Factorial of 4 = " + Factorial(4));
console.log("Factorial of 4 = " + FactorialInLine(4));
console.log("Factorial of 6 = " + Factorial(6));
console.log("Factorial of 6 = " + FactorialInLine(6));

console.log("Factorial of 100 = " + FactorialInLine(100));
console.log("Factorial of 100 = " + Factorial(100));
console.log("😊😊😢❤❤🎂🎂✔✔💕💕😍");
console.log("😊😊😢❤❤🎂🎂✔✔💕💕😍");
console.log("😊😊😢❤❤🎂🎂✔✔💕💕😍");
console.log("😊😊😢❤❤🎂🎂✔✔💕💕😍");
