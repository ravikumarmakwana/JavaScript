'use strict';

let guessNumber = Math.trunc(Math.random() * 20 + 1);
let 
console.log(guessNumber);

document.querySelector('.check').addEventListener('click', function () {
  let number = Number(document.querySelector('.guess').value);
  if (!number)
    document.querySelector('.message').textContent = 'Please enter the number';
  else if (number == guessNumber)
    document.querySelector('.message').textContent = 'Correct Number';
  else if (number > guessNumber)
    document.querySelector('.message').textContent = 'Too High';
  else document.querySelector('.message').textContent = 'Too Low';
});
