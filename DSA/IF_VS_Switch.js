let day = 2;
switch (day) {
  case 1:
    console.log("Moday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wenesay");
    break;
  default:
    console.log("Invalid day");
    break;
}
// Fall through example
let amount = 4893;
let note = 0;
// switch (true) {
//   case amount >= 500:
//     note = Math.floor(amount / 500);
//     amount = amount % 500;
//     console.log("500: " + note);
//   case amount >= 200:
//     note = Math.floor(amount / 200);
//     amount = amount % 200;
//     console.log("200: " + note);
//   case amount >= 100:
//     note = Math.floor(amount / 100);
//     amount = amount % 100;
//     console.log("100: " + note);
//   case amount >= 50:
//     note = Math.floor(amount / 50);
//     amount = amount % 50;
//     console.log("50: " + note);
//   case amount >= 10:
//     note = Math.floor(amount / 10);
//     amount = amount % 10;
//     console.log("10: " + note);
//   case amount >= 5:
//     note = Math.floor(amount / 5);
//     amount = amount % 5;
//     console.log("5: " + note);
//   case amount >= 2:
//     note = Math.floor(amount / 2);
//     amount = amount % 2;
//     console.log("2: " + note);
//   case amount === 1:
//     console.log("1: ", amount);
// }
// Note: The above switch statement will not work as expected because it lacks break statements.
// Each case will fall through to the next one, leading to incorrect results.
// To fix this, you should add break statements after each case to prevent fall-through behavior.
// Corrected version with break statements
switch (true) {
  case amount >= 500:
    note = Math.floor(amount / 500);
    amount = amount % 500;
    console.log("500: " + note);
    break;
  case amount >= 200:
    note = Math.floor(amount / 200);
    amount = amount % 200;
    console.log("200: " + note);
    break;
  case amount >= 100:
    note = Math.floor(amount / 100);
    amount = amount % 100;
    console.log("100: " + note);
    break;
  case amount >= 50:
    note = Math.floor(amount / 50);
    amount = amount % 50;
    console.log("50: " + note);
    break;
  case amount >= 10:
    note = Math.floor(amount / 10);
    amount = amount % 10;
    console.log("10: " + note);
    break;
  case amount >= 5:
    note = Math.floor(amount / 5);
    amount = amount % 5;
    console.log("5: " + note);
    break;
  case amount >= 2:
    note = Math.floor(amount / 2);
    amount = amount % 2;
    console.log("2: " + note);
    break;
  case amount === 1:
    console.log("1: ", amount);
}
// Note: The above switch statement will now work correctly with the added break statements.
// Example of using switch with a string
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("Apple is red.");
    break;
  case "banana":
    console.log("Banana is yellow.");
    break;
  case "grape":
    console.log("Grape is purple.");
    break;
  default:
    console.log("Unknown fruit.");
    break;
}
