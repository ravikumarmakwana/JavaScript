for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line);
}
for (let i = 5; i >= 1; i--) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line);
}
for (let i = 1; i <= 5; i++) {
  let line = "";
  let pattern = Math.floor(i % 2) == 0 ? 1 : 0;
  for (let j = 1; j <= i; j++) {
    pattern = pattern == 0 ? 1 : 0;
    line += pattern + " ";
  }
  console.log(line);
}
for (let i = 5; i >= 1; i--) {
  let line = "";
  let count = i;
  for (let j = 5; j >= i; j--) {
    line += count++ + " ";
  }
  console.log(line);
}
console.log("Hello");
