function max(a) {
  let max = Math.max(a[0], a[1]);
  let sMax = Math.min(a[0], a[1]);
  

  for (let i = 2; i < a.length; i++) {
    if (a[i] > max) {
      sMax = max;
      max = a[i];
    } else if (a[i] > sMax && max != a[i]) {
      sMax = a[i];
    }
  }
  return sMax;
}
console.log(max([12, 35, 1, 10, 34, 1]));
