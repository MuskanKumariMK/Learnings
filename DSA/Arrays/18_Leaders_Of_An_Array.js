//[ 16, 17, 4, 3, 5, 2]
// [17 5 2]
function leaders(array) {
  let n = array.length;

  let res = [];
  for (let i = 0; i < n; i++) {
    let k;
    for (k = i + 1; k < n; k++) {
      if (array[i] < array[k]) break;
    }
    if (k === n) {
      res.push(array[i]);
    }
  }
  return res;
}
const arr = [16, 17, 4, 3, 5, 2];
const result = leaders(arr);

console.log(result);
