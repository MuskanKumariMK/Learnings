// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

const Utils = require("./Utils_OOPs");

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//? Example 1:

//* Input: nums = [2,7,11,15], target = 9
//! Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
//todo Example 2:

//* Input: nums = [3,2,4], target = 6
//! Output: [1,2]
//todo Example 3:

//* Input: nums = [3,3], target = 6
//! Output: [0,1]
//todo Example 4:
var twoSum = function (nums, target) {
  // number -> index
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      console.log([map.get(complement), i]);
      // return the pair of indices
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  // If no solution is found (though problem guarantees one solution)
  return [];
};

twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);

// # Intuition
// <!-- Describe your first thoughts on how to solve this problem. -->

// # Approach
// <!-- Describe your approach to solving the problem. -->
// We want to find two indices i and j such that:

// ```javascript
// nums[i] + nums[j] === target
// ```
// Create a Map (hash table) to store each number we've seen so far and its index.

// The key is the number, and the value is its index in the array.

// ```javascript
// const map = new Map();

// ```
// Loop through each number in the array.

// For the current number nums[i], calculate its complement, which is the number that needs to pair with nums[i] to reach the target.
// ```javascript
// for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     ...
// }

// ```
// Check if the complement already exists in the map.

// If yes, you've found the pair: return the index of the complement (from the map) and the current index i.

// ```javascript
// if (map.has(complement)) {
//     return [map.get(complement), i];
// }

// ```
// If the complement wasn't found, store the current number and its index in the map.

// This way, future iterations can check against it.
// ```javascript
// map.set(nums[i], i);

// ```
// # Complexity
// - Time complexity:
// <!-- Add your time complexity here, e.g. $$O(n)$$ -->

// - Space complexity:
// <!-- Add your space complexity here, e.g. $$O(n)$$ -->

// # Code
// ```javascript []
// var twoSum = function (nums, target) {
//     // number -> index
//     const map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (map.has(complement)) {
//       console.log([map.get(complement), i]);
//       // return the pair of indices
//       return [map.get(complement), i];
//     }
//     map.set(nums[i], i);
//   }

//   // If no solution is found (though problem guarantees one solution)
//   return [];
// };
// ```
Utils.isNumInArray([2, 7, 11, 15], 9);
console.log(Utils.area(5, 10, "rectangle"));