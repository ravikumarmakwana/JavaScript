document.querySelector(".submit").addEventListener("click", function () {
  let text = "";

  let firstName = document.querySelector(".firstName").value;
  let lastName = document.querySelector(".lastName").value;
  let age = Number(document.querySelector(".age").value);

  text =
    "First name is " +
    firstName +
    ", Last name is " +
    lastName +
    ", age is " +
    age;

  document.querySelector(".response").textContent = text;
});
