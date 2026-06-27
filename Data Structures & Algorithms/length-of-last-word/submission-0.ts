class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        let arrValues = s.split(' ').filter((word) => word.length > 0);
        let lastWord = arrValues[arrValues.length - 1];
        let val = lastWord.length;
        return val;
    }
}
