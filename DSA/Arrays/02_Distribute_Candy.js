/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */

let numChild = 3;

var distributeCandies = function (n, limit) {
  let count = 0;
  for (let a = 0; a <= limit; a++) {
    for (let b = 0; b <= limit; b++) {
      let c = n - a - b; // n = a +b+ c
      if (0 <= c && c <= limit) {
        count++;
      }
    }
  }
  return count;
};
console.log(distributeCandies(5, 2));
console.log(distributeCandies(3, 3));
console.log(distributeCandies(10001, 20011));
