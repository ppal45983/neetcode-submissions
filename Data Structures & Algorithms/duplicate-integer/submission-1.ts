class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
    
    let set = new Set(nums);
    let narr = [...set];
    
    return narr.length !== nums.length ? true : false;

    }
    
}
