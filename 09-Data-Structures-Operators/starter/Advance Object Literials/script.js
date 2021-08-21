let hobbies = ['Programming', 'Coding'];
let person = {
  firstName: 'Ravikumar',
  lastName: 'Makwana',
  hobbies,
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
  [hobbies[0]]: 'Programming Hobbies',
  [hobbies[1]]: 'Coding Hobbies',
};

console.log(person);
console.log(person.hobbies);
console.log(person.getFullName());

// Optional Chaining ?.
// person.person1?.address?.HouseNo => if person1 is null then, not check for address

console.log('Values : ');
for (let value of Object.values(person)) console.log(value);
console.log('Keys : ');
for (let key of Object.keys(person)) console.log(key);
console.log('Entries : ');
for (let entry of Object.entries(person)) console.log(entry);
