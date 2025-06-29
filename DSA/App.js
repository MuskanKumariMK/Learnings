let b = 0.1 + 0.2; //b ≈ 0.30000000000000004
let a = b.toPrecision(1); // a = "0.3" (a string)
// console.log(typeof a); // "string"
a = Number(a); // Convert string to number
// console.log(a);
switch (a) {
  case 0.3:
    console.log("0.3");
    break;
  case 0.4:
    console.log("0.4");
    break;
  default:
    console.log("Invalid value");
    break;
}
