let randomNumbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function GetRandomNumbers() {
  let number = "";
  for (let index = 1; index <= 6; index++)
    number += randomNumbers[Math.trunc(Math.random() * 20 + 1)] + "";
  return number;
}

document.querySelector(".change-color").addEventListener("click", function () {
  let color = "#" + GetRandomNumbers();
  console.log(color);
  document.querySelector("body").style.backgroundColor = color;
});

let size = 20;
document.querySelector(".heading").addEventListener("click", function () {
  document.querySelector(".heading").style.fontSize = size + "px";
  size++;
});
