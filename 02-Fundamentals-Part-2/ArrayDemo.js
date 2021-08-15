let days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

days.forEach(day => console.log(day));

console.log(days);

console.log("The size of days array : " + days.length);
console.log("The type of days array : " + typeof days);
console.log("Is days is instance of Array : " + days instanceof Array);
console.log("FirstDay of Week : " + days[0]);
console.log("LastDay of Week : " + days[days.length - 1]);

let numbers = [];
numbers.push(1);
numbers.push(2);
numbers.push(3);
console.log(numbers);
numbers.push(4);
numbers.push(5);
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.pop();
console.log(numbers);

let person = {
    firstName: "Ravikumar",
    lastName: "Makwana",
    age: 19,
    email: "Ravi.makwana@gmail.com",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    getSummary: function () {
        return `I am ${this.firstName} ${this.lastName}.\nI am ${this.age} years old.\nMy email address is ${this.email}`
    }
};

console.log(person);

console.log("FirstName : " + person.firstName);
console.log("FirstName : " + person["firstName"]);
console.log("LastName : " + person.lastName);
console.log("Age : " + person.age);

const propertyName = prompt("Please enter property name : ");

if (person[propertyName]) {
    console.log("Correct Property with value : " + person[propertyName]);
}
else {
    console.log("Incorrect Property");
}

console.log(person.getSummary());
console.log("FullName : " + person.fullName());