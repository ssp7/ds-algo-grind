/**
 * @param target
 * @param nums
 * @returns Function that returns values from nums that target sum can be reached by adding
 * values from nums array.
 */
function howSum(target: number, nums: number[]): number[] | null {
  const table: (number[] | null)[] = Array(target + 1).fill(null);
  table[0] = [];
  for (let idx = 0; idx <= target; idx++) {
    if (table[idx] !== null) {
      for (const num of nums) {
        table[idx + num] = [...(table[idx] as number[]), num];
      }
    }
  }
  return table[target];
}

/**
 * Time Complexity = O(n*(m^2))
 * Space Complexity = O(m^2)
 */

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
