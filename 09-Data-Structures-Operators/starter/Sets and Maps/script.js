//Sets
let mySet = new Set([1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 1, 3, 4, 3, 7, 8, 9, 0]);
console.log(mySet);
console.log(mySet.size);

console.log(mySet.add(10));
console.log(mySet.delete(10));
console.log(mySet);

console.log(mySet.has(1));
console.log(mySet.has(11));

mySet.clear();
console.log(mySet);

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);

mySet.forEach(element => {
  console.log(element);
});

console.log(Array.from(mySet));

//maps

let quiz = new Map([
  [
    'Question 1',
    [
      ['question', 'What is value of 10 + 20 =?'],
      [1, 10],
      [2, 20],
      [3, 30],
      ['correct', 3],
      [true, 'Correct Answer!'],
      [false, 'Wrong Answer!'],
    ],
  ],
  [
    'Question 2',
    [
      ['question', 'Is API is plate-form independent?'],
      [1, 'Yes'],
      [2, 'No'],
      [3, 'Depends on Language'],
      ['correct', 1],
      [true, 'Correct Answer!'],
      [false, 'Wrong Answer!'],
    ],
  ],
  [
    'Question 3',
    [
      ['question', 'JavaScript index start with ?'],
      [1, 1],
      [2, 0],
      [3, -1],
      ['correct', 2],
      [true, 'Correct Answer!'],
      [false, 'Wrong Answer!'],
    ],
  ],
]);

for (let questionNo of quiz.keys()) {
  let question = new Map(quiz.get(questionNo));

  let ans = Number(
    prompt(
      `${questionNo} : ${question.get('question')}
    \n 1 : ${question.get(1)}
    \n 2 : ${question.get(2)}
    \n 3 : ${question.get(3)}`
    )
  );
  alert(question.get(ans === question.get('correct')));
}
