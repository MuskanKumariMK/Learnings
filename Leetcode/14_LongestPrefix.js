/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return "";
  //   console.log(strs);
  // Sort the array of strings
  strs.sort();
  //   console.log(strs);
  let first = strs[0];
  let last = strs[strs.length - 1];
  console.log(first, last);
  // Compare the first and last strings character by character
  let i = 0;
  while (i < first.length && i < last.length && first[i] === last[i]) {
    i++;
  }
  // Return the common prefix
  return first.substring(0, i);

};
console.log(longestCommonPrefix(["fly", "flower", "flow", "flight"])); // Output: "fl"
