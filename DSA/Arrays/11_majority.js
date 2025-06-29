var majorityElement = function (nums) {
  let ans = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count == 0) {
      ans = nums[i];
      count = 1;
    } else if (ans == nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  console.log(count);
  return ans;
};
// console.log(majorityElement([3, 2, 3]));
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([6, 5, 5]));
