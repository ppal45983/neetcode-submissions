class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let sortedSet = new Set(nums.sort((a, b) => a - b));
        let arr = [...sortedSet];
        let count = 1;
        let result = nums.length ? 1 : 0;
        let val = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] == (val + 1)) {
                count = count + 1;
                val = arr[i];
                if (result < count) {
                    result = count;
                }
            } else {
                count = 1
                val = arr[i];
            }
        }
        return result;
    }
}