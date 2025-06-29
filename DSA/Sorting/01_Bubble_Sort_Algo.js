//? pHase 1
// 10, 5 , 1 , 12 , 3
// 5 , 1 , 10 , 12, 3,
// 5 , 1 , 10 , 3, 12
//? Phase 2
// 1  ,5 ,10,  3, 12
// 1 , 5 , 3, 10, 12
//? Phase 3
// 1 , 3 , 5, 10, 12
//? Phase 4
// 1 , 3 , 5, 10, 1
// Bubble Sort Algorithm : It is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

// The bubble sort algorithm is a straightforward method for arranging elements in a list, either in ascending or descending order. It operates by repeatedly stepping through the list, comparing adjacent elements, and swapping them if they are in the incorrect order. This process is repeated until no more swaps are needed, indicating that the list is sorted.

let arr = [10, 5, 1, 12, 3];
let n = arr.length;
for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);
// time complexity: O(n^2)
// space complexity: O(1)