nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function (nums) {
//   nums.sort();
//   //   console.log(nums);
//   let newArr = [];
//   for (let char of nums) {
//     // console.log(char);
//     if (!newArr.includes(char)) {
//       newArr.push(char);
//     }
//   }
//   const result = newArr.length;
//   return result;
// };
// console.log(removeDuplicates(nums)); // Output: 5
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return nums.slice(0, i + 1);
};
console.log(removeDuplicates(nums)); // Output: 5
