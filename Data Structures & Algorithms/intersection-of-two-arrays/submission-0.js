class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        let result = [];
        let set1 = new Set(nums1);
        let set2 = new Set(nums2);
        let arr1 = [...set1];
        let arr2 = [...set2];
        arr1.forEach(val => {
            if (arr2.includes(val)) {
                result.push(val);
            }

        })
        return result;
    }
}
