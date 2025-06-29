var maxSubArray = function (nums) {
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += sum;
    sum = Math.max(max, sum);
    if (sum < 0) sum = 0;
  }
  return sum;
};
