class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for (let i = 0; i < nums.length - 1; i++) {
            for (let j = 0; j < nums.length - 1; j++) {
                if (i != (j + 1)) {
                    if ((nums[i] + nums[j + 1]) == target) {
                        return [i, j + 1];

                    }
                }
            }
        }
    }
}
