/**
 * @param target
 * @param nums
 * @returns Function that returns values from nums that target sum can be reached by adding
 * values from nums array.
 */
function howSum(
  target: number,
  nums: number[],
  memo: { [key: number]: number[] | null } = {}
): number[] | null {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of nums) {
    const remainder = target - num;
    const res = howSum(remainder, nums, memo);
    if (res !== null) {
      const completeRes = [...res, num];
      memo[target] = completeRes;
      return completeRes;
    }
  }
  memo[target] = null;
  return null;
}

/**
 * Brute Force Approach 
 * Time Complexity = O(n^(m) * m)
 * Space Complexity = O(m)
 * 
 * Memoized Soln Complexity
 * Time Complexity = O(n*(m^2))
 * Space Complexity = O(m^2)
 */

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
