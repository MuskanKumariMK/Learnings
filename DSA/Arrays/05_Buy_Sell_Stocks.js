// Maximize the profit
// purchase on past and sell in future
// max of elemnt - min of array

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let min = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];
    let profit = prices[i] - min;
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
};
console.log(maxProfit([2, 8, 9, 4, 2, 3]));
