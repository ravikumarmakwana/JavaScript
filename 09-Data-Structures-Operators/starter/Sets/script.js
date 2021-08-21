// Sets
let mySet = new Set([
  1,
  1,
  1,
  1,
  1,
  2,
  3,
  4,
  5,
  1,
  2,
  3,
  2,
  3,
  2,
  3,
  3,
  'A',
  'a',
  'A',
  'A',
  'Ravi',
  'Makwana',
  'Ravi',
  'Makwana',
  'C',
  'Ravikumar',
  'Makwana',
]);
console.log(mySet);
console.log(new Set('Ravikumar'));
console.log(new Set('Ravikumar Makwana'));
console.log(mySet.has(1));
mySet.add(1);
mySet.add(1);
mySet.add(1);
mySet.add(1);
mySet.delete(1);
console.log(mySet);
mySet.forEach(element => {
  console.log(element);
});
mySet.add(1);
console.log(mySet);
console.log('Unique values : ' + mySet.size);
console.log("Unique alphabets in 'Ravikumar' : " + new Set('Ravikumar').size);
mySet.clear();
console.log(mySet);

//Maps
let myMap = new Map();
myMap.set('firstName', 'Ravikumar');
myMap.set('lastName', 'Makwana');
myMap.set(1, 1);
myMap.set(2, 2);
myMap.set('Age', 18);
myMap.set('Single', true);
myMap.set(true, 'True');
myMap.set(false, 'False');
console.log(myMap);
myMap.set('firstName', 'Ravi');
console.log(myMap);
console.log(myMap.get(true));
console.log(myMap.get('Single'));
console.log(myMap.get(2));
console.log(myMap.get(0));
console.log(myMap.get('lastName'));
myMap.delete(2);
console.log(myMap.size);
myMap.clear();
console.log(myMap);

let questions = ['Question 1', 'Question 2', 'Question 3'];
let answers = [
  [1, 2, 3],
  [4, 5, 6],
  [1, 5, 7],
];
console.log(questions);

console.log(questions);
console.log(answers);

let quiz = new Map();
quiz.set(questions, answers);
console.log(quiz);
let v = quiz.keys();
console.log(`${v} And Options : ${quiz.get(v[0])}`);

let quiz1 = new Map([
  ['Question', 'Which language is best for front-end developer?'],
  ['a', 'C#'],
  ['b', 'JavaScript'],
  ['c', 'Python'],
  ['Correct', 'b'],
  [true, 'Correct Answer!'],
  [false, 'Wrong Answer! Try Again'],
]);

let ans = prompt(
  quiz1.get('Question') +
    '\na : ' +
    quiz1.get('a') +
    '\nb : ' +
    quiz1.get('b') +
    '\nc : ' +
    quiz1.get('c')
);

alert(quiz1.get(ans === quiz1.get('Correct')));
