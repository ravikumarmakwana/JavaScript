'use strict';

const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.CommonPropertyValue = 'Normal Person';

let person1 = new Person('Ravi', 'Makwana');
let person2 = new Person('Hem', 'Bhagat');

console.log(person1);
console.log(person2);

console.log(person1.getFullName());
console.log(person2.getFullName());

console.log(Person.prototype);

console.log(person1.CommonPropertyValue);
console.log(person1.CommonPropertyValue);

console.log(person1.__proto__);
console.log(person1.__proto__.__proto__);
console.log(person1.__proto__.__proto__.__proto__);

const Car = function (carName, speed) {
  this.carName = carName;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.carName} has ${this.speed} km/h`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.carName} has ${this.speed} km/h`);
};

let car1 = new Car('BMW', 120);
let car2 = new Car('Mercedes', 95);

console.log(`${car1.carName} has Initial ${car1.speed} km/h speed`);
car1.accelerate();
car1.accelerate();
car1.break();
car1.accelerate();
car1.accelerate();
console.log(`${car1.carName} has final ${car1.speed} km/h speed`);
console.log(`${car2.carName} has Initial ${car2.speed} km/h speed`);
car2.accelerate();
car2.accelerate();
car2.break();
car2.accelerate();
car2.accelerate();
console.log(`${car2.carName} has final ${car2.speed} km/h speed`);

const PersonProto = {
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  init(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

let personProto = Object.create(PersonProto);
personProto.init('Ravi', 'Makwana');
console.log(personProto.getFullName());

class PersonCL {
  firstName;
  lastName;
  birthDate;
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  greet() {
    return `Welcome, ${this.firstName}`;
  }

  get fName() {
    return this.firstName;
  }
  set fName(firstName) {
    this.firstName = firstName;
  }
  get lName() {
    return this.lastName;
  }
  set lName(lastName) {
    this.lastName = lastName;
  }
  get age() {
    let currentYear = new Date().getFullYear();
    let birthYear = new Date(this.birthDate).getFullYear();
    return currentYear - birthYear;
  }
  set birthdDate(birthDate) {
    this.birthDate = birthDate;
  }
  static welcome() {
    return `🎁🎁 I am Static Method 🎁🎁`;
  }
}

class StudentCL extends PersonCL {
  division;
  standard;

  constructor(firstName, lastName, division, standard) {
    super(firstName, lastName);
    this.division = division;
    this.standard = standard;
  }

  get division() {
    return `${this.division} Okay`;
  }

  getFullName() {
    return `As Student My full-name is ${this.firstName} ${this.lastName}`;
  }
}

let person1CL = new PersonCL('Ravikumar', 'Makwana');
console.log(person1CL.getFullName());
console.log(person1CL.greet());
person1CL.fName = 'Ravi';
person1CL.lName = 'Simple Makwana';
console.log(person1CL.fName);
console.log(person1CL.lName);

console.log(PersonCL.welcome());

console.log(person1CL);
person1CL.birthDate = Date.parse('2000-04-18');
console.log(person1CL);
console.log(person1CL.age);

let student1CL = new StudentCL('Alice', 'Bob', 'G2', 3);
student1CL.birthDate = new Date();
console.log(student1CL);
console.log(student1CL.age);

console.log(student1CL instanceof PersonCL);
console.log(student1CL instanceof StudentCL);

console.log(student1CL.getFullName());

class Account {
  //Public fields
  locale = navigator.language;

  //Private fields
  #pin;
  #movements = [];

  //Static fields
  static totalAccount = 1;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // alert(`Thanks for creating account ${this.owner}`);
  }

  //Public methods OR public interfaces
  deposit(amount) {
    this.#movements.push(amount);
    return this;
  }
  withdraw(amount) {
    this.deposit(-amount);
    return this;
  }
  //Protected method
  _approvedLoan(amount) {
    return true;
  }
  requestLoan(amount) {
    return this._approvedLoan(amount);
  }
  static getTotalAccounts() {
    console.log(`Total Accounts : ${this.totalAccount}`);
  }
}

let account1 = new Account('Ravi', 10000, 1111);
console.log(account1);
account1.deposit(100);
account1.deposit(400);
account1.withdraw(100);
console.log(account1);
console.log(account1.requestLoan(100));

console.log(Account.getTotalAccounts());
Account.totalAccount = 10;
console.log(Account.getTotalAccounts());
