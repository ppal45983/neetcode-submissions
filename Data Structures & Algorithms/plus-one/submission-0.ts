class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits: number[]): number[] {
        let result;
        result = Number(digits.join('')) + 1;
        result = result.toString().split("");
        console.log(result.toString().split(""));
        return result;
    }
}
