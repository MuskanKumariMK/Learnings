// let array = [];
// array.push(10);
// array.push(20);
// array.push(30);
// array.push(40);
// array.push("Muskan");
// array.push(false);
// console.log(array);
// console.log(typeof array); // Object WHy object
// console.log(array[3]);
// array[0] = 10;
// array[1] = 20;
// array[2] = 30;
// array[3] = 40;
// array[6] = 60;
// let array = new Array(5);
// array[0] = 10;
// array[1] = 20;
// array[2] = 30;
// array[3] = 40;
// array[4] = 50;
// array.push(10);
// array.push(20);
// array.push(30);
// array.push(40);
let prompt = require("prompt-sync")();

// for (let i = 0; i < array.length; i++) {
//   array[i] = Number(prompt("Enter the number : "));
// }
//? Sum
// let sum = 0;for (let i = 0; i < array.length; i++) {
//   array[i] = Number(prompt("Enter the number : "));
//   sum += array[i];
// }
// console.log("Sum", sum);
//? Max
// let array = [10, 20, 30, 40, 50, 70, 100, 150, 50];
// let max = array[0];
// for (let i = 0; i < array.length; i++) {
//   if (max <= array[i]) {
//     max = array[i];
//   }
// }
// console.log("max ; ", max);
//? Second Max
let array = [10, 20, 30, 40, 50, 70, 100, 150, 50];
// let array = [10, 20, 30, 40, 50, 40, 40, 150, 150, 100, 100];
let max = Math.max(array[0], array[1]); // 20
let sMax = Math.min(array[0], array[1]); // 10
for (let i = 2; i < array.length; i++) {
  //30 > 10
  //At last point // 150 > 100
  if (array[i] > max) {
    // sMax = 10
    //At last point // sMax = 100
    sMax = max;
    // max = 30
    //At last point // max = 150
    max = array[i];
  } else if (array[i] > sMax && max != array[i]) {
    console.log("sMax :", sMax);
    sMax = array[i];
  }
}
console.log("Second Max : ", sMax);

//? Reverse array

// let array = [10, 20, 30, 40, 50];
// 10 -> 0
// 20 -> 1
// 30 -> 2
// 40 -> 3
// 50 -> 4
//* Temporary approach
// let temp = new Array(array.length);
// let j = 0;
// for (let i = array.length - 1; i >= 0; i--) {
//   temp[j] = array[i];
//   j++;
// }
// console.log(temp);

//* 2 Point algorithm Approach
// let left = 0;
// let right = array.length - 1;
// //? 0 < 4 (true)
// //* 1 < 3(true)
// //! 2< 2 (false)
// while (left < right) {
//   //? array[0] , array[4] = array[4] , array[0]
//   //* array[1] , array[3] = array[3] , array[1]
//   [array[left], array[right]] = [array[right], array[left]];
//   //?  left = 1
//   //*  left = 2
//   left++;
//   //?  right = 3
//   / *  right = 2
//   right--;
// }
// console.log(array);
//? Move all zero in left side and  1 on right side
// let array = [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1];
// let i = 0,
//   j = 0;
// while (i < array.length) {
//   if (array[i] == 0) {
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//     j++;
//   }
//   i++;
// }
//? Move all negative in left side and  positive on right side
// let array = [10, -2, 6, 3, -8, 2, -10, 9, 6, 3, 7, 0];
// let i = 0,
//   j = 0;
// while (i < array.length) {
//   let x = Math.sign(array[i]);
//   if (x == -1) {
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//     j++;
//   }

//   i++;
// }
console.log(array);
