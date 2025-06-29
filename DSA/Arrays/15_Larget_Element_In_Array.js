function largest(array) {
  let large = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > large) {
      large = array[i];
    }
  }
  console.log(large);
  return large;
}
largest([10, 20, 4]);
largest([10, 324, 45, 90, 9808]);
