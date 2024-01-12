/**
 * @param target
 * @param nums
 * @returns Function that returns if target sum can be reached by adding
 * values from nums array. This function does not return values that adds up to the
 * target.
 */
function canSum(target: number, nums: number[]): boolean {
  const table = Array(target + 1).fill(false);
  table[0] = true;
  for (let idx = 0; idx <= target; idx++) {
    if (table[idx] === true) {
      for (let num of nums) {
        table[idx + num] = true;
      }
    }
  }
  return table[target];
}

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false
