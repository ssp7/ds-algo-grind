/**
 * @param target
 * @param nums
 * @returns Function that returns best values (min no. of values) from nums that target sum can be reached by adding
 * values from nums array.
 */
function bestSum(
  target: number,
  nums: number[],
  memo: { [key: number]: number[] | null } = {}
): number[] | null {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  let shortestCombination: number[] | null = null;

  for (let num of nums) {
    const remainder = target - num;
    const combination = bestSum(remainder, nums, memo);
    if (combination !== null) {
      const fullCombination = [...combination, num];
      if (
        shortestCombination === null ||
        fullCombination.length < shortestCombination.length
      ) {
        shortestCombination = fullCombination;
      }
    }
  }

  memo[target] = shortestCombination;
  return shortestCombination;
}

/**
 * m = target
 * n = nums.length
 * 
 * Brute Force:
 * Time = O(n^m * m)
 * Space = O(m^2)
 * 
 * Memoized:
 * Time = O(n * (m^2))
 * Space = O(m^2)
 */

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [3, 5]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]
