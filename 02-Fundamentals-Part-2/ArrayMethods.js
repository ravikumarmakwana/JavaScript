let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(weekDays);

console.log("Number of days in week : " + weekDays.length);
console.log("First day of week : " + weekDays.at(0));
console.log("Third day of week : " + weekDays.at(3));
console.log("Last day of week : " + weekDays.at(weekDays.length - 1));
console.log("Friday is " + weekDays.indexOf("Friday") + " day of week");

let oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

let finalNumbers = oddNumbers.concat(evenNumbers);
console.log(finalNumbers);
console.log("Index of 7 is " + finalNumbers.indexOf(3));
console.log("Join with ',' : " + finalNumbers.join(", "));

console.log("Show only even number using continue only five numbers");
for (let index = 0; index < finalNumbers.length; index++) {

    if (Math.floor(finalNumbers[index] % 2) != 0) continue;
    console.log(finalNumbers[index]);
    if (finalNumbers[index] == 10) break;
}