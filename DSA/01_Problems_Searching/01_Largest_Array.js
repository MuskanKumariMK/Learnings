function largestArray(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    // console.log("Elements :", arr[i]);
    if (arr[i] > max) {
      max = arr[i];
      console.log("maximum is : ", max);
    }
  }
  return max;
}
let arr = [1, 5, 12, 95, 74, 12, 32, 2, 45, 74];
console.log(largestArray(arr));
