let number1 = "10";
let number2 = "20";
let number3 = "30";

console.log(Number(number1) + Number(number2) + Number(number3));
console.log(number1 + number2 - number3 + number1);
// 1020 - 30 // 990 + '10' // 99010


console.log("10 == '10'", 10 == "10");
console.log("10 === '10'", 10 === "10");

console.log("'Hello' == new String('Hello')", 'Hello' == new String('Hello'));
console.log("'Hello' === new String('Hello')", 'Hello' === new String('Hello'));

let n1 = 10;
let n2 = 20;
let n3 = 30;
let n4 = 40;

console.log(Boolean(n1) || Boolean(0));
console.log(Boolean(n1) && !Boolean(0));

console.log(n1 <= 10 && n2 <= 20 && n3 > 10 && n4 > 10);

let day = "Monday";

switch (day) {
    case "Sunday": console.log("Sunday 😍");
        break;
    case "Monday": console.log("Monday");
        break;
    case "Tuesday": console.log("Tuesday");
        break;
    case "Wednesday": console.log("Wednesday");
        break;
    case "Thursday": console.log("Thursday");
        break;
    case "Friday": console.log("Friday");
        break;
    default: console.log("Saturday");
        break;
}

let age = 13;
console.log(age >= 18 ? "Eligible for Voting" : "Not Eligible for Voting");