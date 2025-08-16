let arr = [1, 5, 12, 95, 74, 12, 32, 2, 45, 74];
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch(arr, 12));
