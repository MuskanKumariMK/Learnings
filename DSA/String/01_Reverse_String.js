let n = "muskan";
let reverse = "";
for (let i = n.length - 1; i >= 0; i--) {
  reverse = reverse + n.charAt(i);
}
// console.log(reverse);
let l = 0;
let arr = n.split("");
let r = n.length - 1;
while (l < r) {
  let temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
  l++;
  r--;
}
console.log(arr.join("")); // Output: "naksum"
