// Insertion Sort is a simple sorting algorithm that works similarly to how you sort playing cards in your hands:

// You take one element at a time and insert it into its correct position among the already sorted elements to its left.

let array = [12, 11, 13, 5, 6];
for (let i = 1; i < array.length; i++) {
  let key = array[i]; // element to be inserted //
  let j = i - 1;

  while (j >= 0 && array[j] > key) {
    array[j + 1] = array[j]; // shift element right
    j = j - 1;
  }
  array[j + 1] = key; // insert key in correct position
}
