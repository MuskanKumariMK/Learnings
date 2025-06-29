let amount = 4893;

let note = 0;
if (amount >= 500) {
  note = Math.floor(amount / 500);
  amount = amount % 500;
  console.log("500: " + note);
}
if (amount >= 200) {
  note = Math.floor(amount / 200);
  amount = amount % 200;
  console.log("200: " + note);
}
if (amount >= 100) {
  note = Math.floor(amount / 100);
  amount = amount % 100;
  console.log("100: " + note);
}
if (amount >= 50) {
  note = Math.floor(amount / 50);
  amount = amount % 50;
  console.log("50: " + note);
}
if (amount >= 10) {
  note = Math.floor(amount / 10);
  amount = amount % 10;
  console.log("10: " + note);
}
if (amount >= 5) {
  note = Math.floor(amount / 5);
  amount = amount % 5;
  console.log("5: " + note);
}
if (amount >= 2) {
  note = Math.floor(amount / 2);
  amount = amount % 2;
  console.log("2: " + note);
}
if (amount === 1) {
  console.log("1: ", amount);
}
