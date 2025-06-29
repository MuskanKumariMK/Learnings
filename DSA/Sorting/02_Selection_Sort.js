let arr = [10, 5, 1, 12, 3];
let n = arr.length;
for (let i = 0; i < n - 1; i++) {
  let minIndx = i;
  for (let j = i + 1; j < n; j++) {
    if (arr[minIndx] > arr[j]) {
      minIndx = j;
    }
  }
  if (minIndx !== i) {
    let temp = arr[minIndx];
    arr[minIndx] = arr[i];
    arr[i] = temp;
  }
}
console.log(arr);
// time complexity: O(n^2)
// space complexity: O(1)
