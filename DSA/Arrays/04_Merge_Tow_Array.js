let array1 = [2, 5, 6];
let array2 = [1, 2, 5, 6, 9];
let merge = new Array(array1.length + array2.length);
let i = 0;
j = 0;
k = 0;
while (i < array1.length && j < array2.length) {
  if (array1[i] < array2[j]) {
    merge[k++] = array1[i++];
  } else {
    merge[k++] = array2[j++];
  }
}
while (j < array2.length) {
  merge[k++] = array2[j++];
}
while (i < array1.length) {
  merge[k++] = array1[i++];
}
console.log(merge);
