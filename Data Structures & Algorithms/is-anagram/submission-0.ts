class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let sArr = s.split('').sort().join('');
        let tArr = t.split('').sort().join('');
        return sArr === tArr ? true : false;
    }
}
