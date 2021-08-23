let labelTimer = document.querySelector(".timer");

const liveClock = function () {
  setInterval(function () {
    labelTimer.textContent = new Intl.DateTimeFormat("en-IN", {
      month: "short",
      day: "2-digit",
      hour12: true,
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "long",
    }).format(new Date());
  }, 1000);
};
liveClock();
