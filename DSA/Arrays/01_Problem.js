let array = [1, 2, 3, 4, 5];
let n = 2;
//? Left rotation of Array by 1
// let copy = array[0];
// for (let i = 0; i < array.length - 1; i++) {
//   array[i] = array[i + 1];
// }
// array[array.length - 1] = copy;
// console.log(array);
//? Right rotation of Array by 1

// let copy = array[array.length - 1];
// for (let i = array.length - 1; i > 0; i--) {
//   array[i] = array[i -1]
// }
// array[0] = copy;
// console.log(array);

// for (i = 1; i <= 3; i++) {
//   console.log("Ezecution :", i);
//   for (j = 1; j <= 4; j++) {
//     console.log("hello");
//   }
//   //   console.log("hello");
// }

//? Left rotation of Array by 1
// n = n % array.length;
// let count = 0;
// for (let j = 0; j < n; j++) {
//   count++;
//   let copy = array[0];
//   for (let i = 0; i < array.length - 1; i++) {
//     array[i] = array[i + 1];
//   }
//   array[array.length - 1] = copy;
// }
// console.log(count);
// console.log(array);
//* Time reduce

// let temp = new Array(array.length);
// n = n % array.length;
// for (let i = 0; i < array.length; i++) {
//   temp[i] = array[(i + n) % array.length];
// }
// console.log(temp);
//? Right Rotatiom
//? Left Rotatiom

// Block Swap Reverse Algorithm
function reverse(i, j) {
  while (i < j) {
    //* example : 0 and n - 1 where n = 2
    //* 0 < 1
    //! example i = n = 2 and j = 4
    //! 2 < 4
    // add  temporyary array to store the element of the position i
    //* temp =  1 because array[0] = 1
    //! temp = 3  because array[2] = 3
    let temp = array[i];
    // Element at position i swap by the element at position j
    //* array[i] = 2 because array[j] = 2
    //* array[i] = 3  because array[j] = 5
    array[i] = array[j];
    // Element at position j swap by the element at position i which was originally store in the temp
    // array[j] = 1 because temp = 1
    array[j] = temp;
    i++; // increase i
    j--; // decrease j
  }
  return array;
}
reverse(0, n - 1); // output [2,1,3,4,5]
reverse(n, array.length - 1); // [2, 1, 5, 4, 3];

reverse(0, array.length - 1); //[3, 4, 5, 1, 2];

console.log(array);
