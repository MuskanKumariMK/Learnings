// var trap = function (height) {
//   let leftMax = height[0];
//   let left = new Array(height.length);
//   let rightMax = height[height.length - 1];
//   console.log(rightMax);
//   let right = new Array(height.length);
//   let ans = 0;
//   for (let i = 0; i < height.length; i++) {
//     if (height[i] > leftMax) {
//       leftMax = height[i];
//     }
//     left[i] = leftMax;

//     if (height[height.length - i - 1] > rightMax) {
//       rightMax = height[i];
//     }
//     right[i] = rightMax;
//     // console.log(ans);
//     ans += Math.min(left[i], right[i]) - height[i];
//   }
//   //   console.log("Left", left);
//   //   console.log("Right", right);

//   return ans;
// };

///Github
var trap = function (height) {
  let n = height.length;
  let left = new Array(n);
  let right = new Array(n);
  let ans = 0;

  left[0] = height[0];
  for (let i = 1; i < n; i++) {
    left[i] = Math.max(left[i - 1], height[i]);
  }

  right[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], height[i]);
  }

  for (let i = 0; i < n; i++) {
    ans += Math.min(left[i], right[i]) - height[i];
  }

  return ans;
};
// console.log(trap([4, 2, 0, 3, 2, 5]));
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// var trap = function (height) {
//   let left = new Array(height.length);
//   let right = new Array(height.length);
//   let maxLeft = height[0];
//   let maxRight = height[];
// };
