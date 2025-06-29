function max(a) {
  let max = Math.max(a[0], a[1], a[2]);
  let sMax = Math.min(
    Math.max(a[0], a[1]),
    Math.max(a[1], a[2]),
    Math.max(a[0], a[2])
  );
  let tMax = Math.min(a[0], a[1], a[2]);
  console.log("Max", max);
  console.log("Second Max", sMax);
  console.log("Third Max: ", tMax);
  for (let i = 3; i < a.length; i++) {
    if (a[i] > max) {
      tMax = sMax;
      sMax = max;
      max = a[i];
    } else if (a[i] > sMax && a[i] != max) {
      tMax = sMax;
      sMax = a[i];
    } else if (a[i] > tMax && a[i] != sMax && a[i] != max) {
      tMax = a[i];
    }
  }
  let res = [];
  res.push(max);
  res.push(sMax);
  res.push(tMax);
  return res;
}
console.log(max([12, 35, 1, 10, 34, 1]));
