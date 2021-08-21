let weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

for (const day of weekDays) console.log(day);

for (const day of weekDays.entries()) console.log(day[0], day[1]);

for (const [i, day] of weekDays.entries()) console.log(i, day);
