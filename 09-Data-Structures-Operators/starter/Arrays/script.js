let arr1 = [1, 2, 3, 4, 5];

console.log(arr1.length);

arr1.push(6);
console.log(arr1);
arr1.pop();
console.log(arr1);

arr1.unshift(0);
console.log(arr1);
arr1.shift();
console.log(arr1);

console.log(arr1.join('*#*'));
console.log(arr1.toString());

function checkForEven(number) {
  return number % 2 == 0;
}

function lessThan10(number) {
  return number < 10;
}

console.log(arr1.some(checkForEven));
console.log(arr1.every(checkForEven));
console.log(arr1.every(lessThan10));

let ages = [10, 28, 18, 30, 29, 18, 16, 14, 10, 9, 10, 20];

function eligibleForVote(age) {
  return age >= 18;
}

let eligibleForVotes = ages.filter(eligibleForVote);
console.log(eligibleForVotes);

let array1 = [1, 3, 5, 7, 9];
let array2 = [2, 4, 6, 8];
let newArray = array1.concat(array2).sort();
console.log(newArray);

console.log(Array.isArray(newArray));

newArray.forEach(element => {
  console.log(element);
});

console.log(newArray.includes(1));
console.log(newArray.includes(1, 4));
console.log(newArray.includes(1, 0));

newArray.reverse();
console.log(newArray);

console.log(newArray.indexOf(1));
console.log(newArray.indexOf(3));
console.log(newArray.lastIndexOf(3));

console.log(newArray.keys());

newArray.reverse();
console.log(newArray);

//newArray.fill(100);
//newArray.fill(100, 5);
newArray.fill(100, 5, 7);
console.log(newArray);

//newArray.splice(5, 0, '5', '6');
newArray.splice(5, 2, '6', '7');
console.log(newArray);

// let newSliceArray = newArray.slice(4);
let newSliceArray = newArray.slice(4, 6);
console.log(newSliceArray);

console.log(newArray);
newArray.copyWithin(6, 1, 5);
console.log(newArray);

let numbers = [1, 3, 4, 2, 5, 1, 2, 4, 10, 40, 50];

function greaterThanOrEqualTo5(number) {
  return number >= 5;
}

console.log(numbers.find(greaterThanOrEqualTo5));
console.log(numbers.findIndex(greaterThanOrEqualTo5));

console.log(numbers.map(greaterThanOrEqualTo5));

function getSquare(number) {
  return number * number;
}
console.log(numbers.map(getSquare));
console.log(numbers.reduce(greaterThanOrEqualTo5));
