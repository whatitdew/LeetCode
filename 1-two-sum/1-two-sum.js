/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    result = [];
    digit = new Map();
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (digit.has(difference)) {
            result[0] = i;
            result[1] = digit.get(difference);
            break;
        } else {
            digit.set(nums[i], i);
        }
    }
    return result;
};