class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
    
    let n = nums.length;
    let set = new Set(nums);
    let narr = [...set];
    
    return narr.length !== n ? true : false;

    }
    
}
