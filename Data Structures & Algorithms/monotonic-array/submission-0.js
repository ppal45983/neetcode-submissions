class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(strs) {
        let order = strs[0] <= strs[strs.length - 1] ? 'asc' : 'desc';
    let result = false;

        result = strs.every((v, i) => {
            let ind = i != strs.length - 1 ? i + 1 : i; 
            return order == 'desc' ? v >= strs[ind] : v <= strs[ind];
        });
    return result;
    }
}
