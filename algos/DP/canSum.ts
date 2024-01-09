/**
 * @param target
 * @param nums
 * @returns Function that returns if target sum can be reached by adding
 * values from nums array. This function does not return values that adds up to the 
 * target.
 */
function canSum(
  target: number,
  nums: number[],
  memo: { [key: number]: boolean } = {}
): boolean {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of nums) {
    const remainder = target - num;
    if (canSum(remainder, nums, memo)) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
}

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
