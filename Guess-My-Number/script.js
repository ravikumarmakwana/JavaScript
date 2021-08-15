let guessNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector(".score").textContent = "Total Life : " + score;

document.querySelector(".submit").addEventListener("click", function () {
  let number = Number(document.querySelector(".input-number").value);

  if (!number)
    document.querySelector(".error-message").textContent =
      "Please enter the value";
  else {
    score--;
    document.querySelector(".score").textContent = "Remaining Life : " + score;

    if (score > 0 && number > guessNumber)
      document.querySelector(".error-message").textContent = "Too High !";
    else if (score > 0 && number < guessNumber)
      document.querySelector(".error-message").textContent = "Too Low !";
    else if (score > 0 && number === guessNumber) success_function(++score);
    else failer_function();
  }
});

function success_function(score) {
  document.querySelector(".rewords").textContent = "Success";

  if (score > 15) document.querySelector(".stars").textContent = "⭐⭐⭐";
  else if (score <= 15 && score > 10)
    document.querySelector(".stars").textContent = "⭐⭐";
  else if (score <= 10 && score > 5)
    document.querySelector(".stars").textContent = "⭐";

  document.querySelector(".score").textContent = "Your score : " + score;
}

function failer_function() {
  document.querySelector(".rewords").textContent = "You Lose the game!";
  document.querySelector(".score").textContent = "Your score : 0";
  document.querySelector(".stars").textContent = "";
}

document.querySelector(".playagain").addEventListener("click", function () {
  score = 20;
  guessNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".rewords").textContent = "";
  document.querySelector(".stars").textContent = "";
  document.querySelector(".score").textContent = "Total Life : " + score;
});
