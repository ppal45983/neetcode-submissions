class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
            let result = [];
    let i = 0;
    while (arr.length - 1 !== i) {
        let maxArr = arr.slice(i + 1, arr.length);
        let max = Math.max(...maxArr);
        result.push(max);
        i++;
    }
    result.push(-1);
    return result;

    }
}
