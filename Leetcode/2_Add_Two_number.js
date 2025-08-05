// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [l1 = 2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  function reverseString(str) {
    let list = [];
    for (let char = str.length - 1; char >= 0; char--) {
      list.push(str[char]);
    }
    return list.join("");
  }
  let num1 = reverseString(l1.join(""));
  let num2 = reverseString(l2.join(""));
  let sum = parseInt(num1) + parseInt(num2);
  let result = reverseString(sum.toString());
  return result;
};
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])); // Output: [7,0,8]
