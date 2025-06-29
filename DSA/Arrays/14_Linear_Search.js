var linearSearch = function (nums, x) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == x) {
      return i;
    }
  }
  return -1;
};
// console.log(linearSearch([10, 20, 30, 40, 50], 30));
console.log(linearSearch([1, 2, 3, 4], 3));
