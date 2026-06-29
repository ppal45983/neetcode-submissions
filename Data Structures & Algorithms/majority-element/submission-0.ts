class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let x = new Set(nums); 
    let maxValve = 0;
    let max = 0;
    let val = [...x]; 
    if (val.length == 1) {
        max = val[0];
        return max;
    } else {
        val.forEach((v) => {
            let tempMax = nums.filter((c => c=== v)).length;    

            if (tempMax > max) {
                maxValve = v;
                max = tempMax;
            }  
        });    
        return maxValve;
    }
    }
}
