'use strict';

let btnsShowModal = document.querySelectorAll('.show-modal');
let btnCloseModal = document.querySelector('.close-modal');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

function closeModel() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function openModel() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', openModel);

btnCloseModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keypress', function (event) {
  if (
    event.key === 'a' ||
    event.key === 'e' ||
    event.key === 'i' ||
    event.key === 'o' ||
    event.key === 'u'
  )
    alert('Vowel is pressed : ' + event.key);

  if (event.key === 'Enter' && !modal.classList.contains('hidden'))
    closeModel();
  console.log(event);
});
