let timer;

let setUpTimer = function (counter) {
  timer = setInterval(function () {
    const minute = `${Math.trunc(counter / 60)}`.padStart(2, 0);
    const second = `${Math.trunc(counter % 60)}`.padStart(2, 0);
    console.log(`${minute}:${second}`);
    if (counter === 0) clearInterval(timer);
    counter--;
  }, 1000);
};

document.querySelector("body").addEventListener("click", function () {
  let count = 120;
  if (timer) clearInterval(timer);
  setUpTimer(10);
});
