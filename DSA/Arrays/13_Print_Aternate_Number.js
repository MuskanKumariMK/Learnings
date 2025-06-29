// Input: arr[] = [10, 20, 30, 40, 50]
// Output: 10 30 50
// Explanation: Print the first element (10), skip the second element (20), print the third element (30), skip the fourth element(40) and print the fifth element(50).

// Input: arr[] = [-5, 1, 4, 2, 12]
// Output: -5 4 12
var printAlter = function (nums) {
  let temp = [];
  for (let i = 0; i < nums.length; i += 2) {
    console.log(nums[i]);
    temp.push(nums[i]);
  }
  return temp;
};
console.log(printAlter([10, 20, 30, 40, 50]));
