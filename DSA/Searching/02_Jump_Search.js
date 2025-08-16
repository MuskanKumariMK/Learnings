function jumpSearch(arr, target) {
  // Step 1: Get the length of the array
  let n = arr.length;
  console.log("The length of the arrayr is :", n);
  // Step 2: Calculate optimal jump size (square root of array length)
  let steps = Math.floor(Math.sqrt(n));
  console.log("Step size:", steps);
  // Step 3: Keep track of where the current block starts
  let prev = 0;
  console.log("Initial Minimum of steps & array length:", Math.min(steps, n));
  console.log("Value at that position:", arr[Math.min(steps, n) - 1]);
  /**
   * Step 4: Jump ahead in blocks until
   * the value at the block end is >= target OR we reach the end.
   */
  while (arr[Math.min(steps, n)] < target) {
    console.log(
      `Target (${target}) > ${arr[Math.min(steps, n) - 1]}, jumping ahead...`
    );
    // Move the "previous" pointer to the start of this new block
    prev = steps;
    // Increase the block end by step size
    steps += Math.floor(Math.sqrt(n));

    // If we moved beyond the array, stop searching
    if (prev >= n) {
      console.log("Reached end of array without finding target.");
      return -1;
    }

    console.log("New Minimum of steps & array length:", Math.min(steps, n));
    console.log("Value at new block end:", arr[Math.min(steps, n) - 1]);
  }

  console.log(
    `Searching linearly from index ${prev} to ${Math.min(steps, n) - 1}`
  );
  /**
   * Step 5: Perform linear search inside the identified block.
   * The block starts at 'prev' and ends at 'Math.min(steps, n) - 1'
   */
  while (arr[prev] < target) {
    console.log(`Checking index ${prev}, value: ${arr[prev]}`);
    prev++;

    // If we reached the end of this block, target is not present
    if (prev === Math.min(steps, n)) {
      console.log("Reached end of block without finding target.");
      return -1;
    }
  }
  /**
   * Step 6: Check if the target is found
   */
  if (arr[prev] === target) {
    console.log(`Found target ${target} at index ${prev}`);
    return prev;
  } // Step 7: If all fails, target is not in the array
  console.log(`Target ${target} not found.`);
  return -1;
}
let arr = [1, 3, 6, 9, 10, 31, 42, 62, 90, 100];
// console.log(jumpSearch(arr, 31));
arr = [1, 3, 6, 9, 10, 31, 42, 62, 90, 100, 121, 150, 160, 180, 210, 230];
console.log("Result Index:", jumpSearch(arr, 121));
