let getLowerCaseWord = function (text) {
  return text.replace(/ /g, "").toLowerCase();
};

let upperFirstWorld = function (text) {
  let [first, ...others] = text.split(" ");
  return first.toUpperCase() + getLowerCaseWord(others.join(""));
};

console.log(upperFirstWorld("Hello World I am Ravi"));
console.log(getLowerCaseWord("Hello World I am Ravi"));

let getPascalCase = function (text) {
  let words = text.split(" ");
  for (i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join("");
};

console.log(getPascalCase("hello World"));
console.log(getPascalCase("i Am RavI kuMAR makwANA"));
console.log(getPascalCase("tHis iS MY sTrinG"));

let great = (greatMessage) => (name) => `${greatMessage} ${name}`;
console.log(great("Welcome, Mr.")("Ravikumar Makwana!"));

let person1 = {
  name: "Ravi",
  age: 18,
  print: function () {
    console.log(`${this.name} ${this.age}`);
  },
};

let print = person1.print;

let person2 = {
  name: "Hem",
  age: 30,
};
let printForPerson2 = print.bind(person2);

let person3 = {
  name: "Rajan",
  age: 39,
};
let printForPerson3 = print.bind(person3);

console.log("Use call() methods");
print.call(person1);
print.call(person2);
print.call(person3);

console.log("Use bind() methods");
person1.print();
printForPerson2();
printForPerson3();

person3.AddAge = function () {
  this.age++;
  console.log(this);
};

document
  .querySelector("body")
  .addEventListener("click", person3.AddAge.bind(person3));

let strUpper = function () {
  return this.toUpperCase();
};

let str1 = "hello";
let str2 = "world";

console.log(strUpper.bind(str1)());
console.log(strUpper.bind(str2)());

(function () {
  console.log("Immediately invoked function expression");
})();

(() => console.log("Immediately invoked function expression"))();
