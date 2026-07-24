class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        let result = nums.length;
        for (let i = 0; i < nums.sort()[nums.length - 1]; i++) {
            if (i != nums[i]) {
                return i;
            }
        }
        return result;
    }
}