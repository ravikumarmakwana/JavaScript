//Hierarchical Inheritance
class Person {
  static numOfPersons = 0;

  #id;
  #phoneNumber;
  #emailAddress;

  constructor(firstName, lastName, birthDate, height, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.height = height;
    this.gender = gender;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  computeAge() {
    return new Date().getFullYear() - new Date(this.birthDate).getFullYear();
  }

  set id(id) {
    this.#id = id;
  }
  get id() {
    return this.#id;
  }

  set phoneNum(phoneNumber) {
    this.#phoneNumber = phoneNumber;
  }
  get phoneNum() {
    return this.#phoneNumber;
  }

  set email(emailAddress) {
    this.#emailAddress = emailAddress;
  }
  get email() {
    return this.#emailAddress;
  }

  static getNumberOfPersons() {
    return `Total Numbers : ${this.numOfPersons}`;
  }
}

class Student extends Person {
  static numOfSubjects = 0;

  static subjects = [];
  marks = {};

  constructor(
    firstName,
    lastName,
    birthDate,
    height,
    gender,
    division,
    standard
  ) {
    super(firstName, lastName, birthDate, height, gender);
    this.division = division;
    this.standard = standard;
  }

  static addSubject(subject) {
    this.subjects.push(subject);
  }
  static getSubject(index) {
    return this.subjects[index];
  }

  addMarks(subject, mark) {
    this.marks[subject] = mark;
  }
  getMarksFor(subject) {
    return this.marks[subject];
  }
}

class Staff extends Person {
  constructor(
    firstName,
    lastName,
    birthDate,
    height,
    gender,
    position,
    salary
  ) {
    super(firstName, lastName, birthDate, height, gender);
    this.position = position;
    this.salary = salary;
  }
}

let staff1 = new Staff(
  "Nivid",
  "Limbasiya",
  new Date("1980/04/18"),
  5.5,
  "male",
  "Professor",
  100000
);

console.log("Create new Staff");

staff1.id = 1;
staff1.phoneNum = "9726676687";
staff1.email = "Nivid@outlook.com";
console.log(staff1);
console.log(staff1.computeAge());
console.log(staff1.getFullName());

Student.numOfSubjects = 5;
Student.addSubject("Analysis and Design of Algorithms");
Student.addSubject("Big Data Analytics");
Student.addSubject("Artificial Intelligence");
Student.addSubject("Object Oriented Programming with Java");
Student.addSubject(".NET Technology");

console.log("Total Number of Subjects : " + 5);

console.log("Create new Student");
let student1 = new Student(
  "Ravikumar",
  "Makwana",
  new Date("2000/04/18"),
  5.6,
  "male",
  "G2",
  8
);
student1.id = 2;
student1.email = "Ravi.makwana@gmail.com";
student1.phoneNum = "6354508988";
console.log(student1);

student1.addMarks(Student.subjects[0], 100);
student1.addMarks(Student.subjects[1], 99);
student1.addMarks(Student.subjects[2], 100);
student1.addMarks(Student.subjects[3], 100);
student1.addMarks(Student.subjects[4], 99);

for (let subject of Student.subjects)
  console.log(
    `${student1.getFullName()} : ${subject} => ${student1.getMarksFor(subject)}`
  );

// Class A, B, C and D are multi-level Inheritance
class A {
  constructor() {
    console.log("Class A");
  }
}
class B extends A {
  constructor() {
    super();
    console.log("Class B");
  }
}
class C extends B {
  constructor() {
    super();
    console.log("Class C");
  }
}

class D extends C {
  constructor() {
    super();
    console.log("Class D");
  }
}

let d = new D();

//Single Inheritance
class AAA {
  constructor() {
    console.log("Class AAA");
  }
}

class BBB extends AAA {
  constructor() {
    super();
    console.log("Class BBB");
  }
}

let bbb = new BBB();
