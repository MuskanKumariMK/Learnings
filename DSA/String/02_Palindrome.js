let n = "Muskan";
// let reverse = "";
// for (let i = n.length - 1; i >= 0; i--) {
//   reverse = reverse + n.charAt(i);
// }
// if (n === reverse) {
//   console.log("Palindrome");
// }
// console.log(reverse);
let i = 0;

j = n.length - 1;
let isPalindrome = true;
while (i < j) {
  if (n.charAt(i) !== n.charAt(j)) {
    isPalindrome = false;
    break;
  }
  i++;
  j--;
}
if (isPalindrome) {
  console.log("Palindrome");
} else {
  console.log("Not a Palindrome");
}
