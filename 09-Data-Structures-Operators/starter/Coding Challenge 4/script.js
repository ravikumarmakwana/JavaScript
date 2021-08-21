let textarea = document.querySelector('.user_inputs');
let submitBtn = document.querySelector('.submit');
let response = document.querySelector('.response');

submitBtn.addEventListener('click', function () {
  let words = textarea.value.split('\n');
  response.textContent = '';
  for (let [i, word] of words.entries()) {
    let parts = word.split('_');
    response.textContent +=
      parts[0].toLowerCase() +
      parts[1][0].toUpperCase() +
      parts[1].slice(1).toLowerCase() +
      '✅'.repeat(i + 1);
  }
});
