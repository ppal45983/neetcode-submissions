class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details: string[]): number {
            let count = 0;
    details.map(val => {
        let age = val.split('').slice(11).slice(0, 2).join('');
        if (Number(age) > 60) {
            count += 1;
        }
    });
    return count; 
    }
}
