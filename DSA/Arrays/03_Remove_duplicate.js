let array = [0, 1, 1, 1, 2, 3, 3, 5, 5, 6, 6, 7, 7, 8];
// answer = [0,1,2,3,5,6,7]

// function removeDuplicate(array) {
//   let i = 0;
//   while (i < array.length - 1) {
//     if (array[i] == array[i + 1]) {
//       array.splice(i, 1);
//     } else {
//       i++;
//     }
//   }
//   console.log(i);
//   return array;
// }
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let i = 1;
  for (let j = 0; j <= nums.length - 1; j++) {
    if (nums[j] !== nums[i]) {
      nums[i] = nums[j];
      i++;
    }
  }
  console.log(nums);
  return i ;
};

// console.log(typeof removeDuplicate(array));
// console.log(removeDuplicates(array));
console.log(removeDuplicates([1, 1, 1, 2]));
