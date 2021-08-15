const IsAnagram = function (anagramNumber) {
  let number = anagramNumber;
  let reverseNumber = 0;

  while (number > 0) {
    let a = number % 10;
    reverseNumber = reverseNumber * 10 + a;
    number = Math.floor(number / 10);
  }
  if (reverseNumber == anagramNumber) return true;
  else return false;
};

function getReverseWorldString(text) {
  let parts = text.Splice(" ");
  console.log(parts);
}

alert(
  IsAnagram(prompt("Please enter the number."))
    ? "Your number is anagram."
    : "Your number is not anagram."
);

console.log(getReverseWorldString("Hello I am Ravi kumar"));
