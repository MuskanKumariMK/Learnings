let arr = [20, 21, 45, 89, 89, 90];

function sort(nums) {
  n = nums.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        count++;
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  //   console.log(count);
  if (count == 0) {
    return "Yes";
  } else {
    return "No";
  }
  //   return nums;
}
// console.log(sort(arr));
let nums1 = [1, 3, 4, 6, 1, 3, 4, 57, 89, 1, 2];
// console.log(sort(nums1));
function isSort(nums) {
  n = nums.length;
  for (let i = 1; i < n; i++) {
    if (nums[i - 1] > nums[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(isSort(nums1));
// console.log(isSort(arr));
