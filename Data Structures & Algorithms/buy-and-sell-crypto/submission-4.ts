class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let min = prices[0];
    let max = 0;
    let result = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min && i != prices.length - 1) {
            result = max - min;
            min = prices[i];
            max = 0;
        } else if (max < prices[i]) {
            max = prices[i];
        }
    }

    return max > min ? result > max - min ? result : max - min : 0;
    }
}