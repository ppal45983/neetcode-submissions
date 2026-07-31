class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums: number[]): number[] {
        nums.sort((a,b) => a-b);
        return nums;
    }
}
