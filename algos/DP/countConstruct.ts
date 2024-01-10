/**
 * @param target
 * @param wordBank {string[]}
 * @returns Function that returns if number of ways target string can be made by adding
 * values from arr array.
 */
function countConstruct(
  target: string,
  wordBank: string[],
  memo: { [key: string]: number } = {}
): number {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let ways = 0;
  for (const word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      const countWays = countConstruct(suffix, wordBank, memo);
      ways += countWays;
    }
  }
  memo[target] = ways;
  return ways;
}

/**
 * m = target.length
 * n = wordBank.length
 *
 * Brute Force:
 * Time = O(n^m * m)
 * Space = O(m^2)
 *
 * Memoized Soln:
 * Time = O(n*m^(2))
 * Space = O(m^2)
 */

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]) // false
);
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]) // true
);
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "eee",
    "eeeee",
    "eeee",
    "eeeeee",
    "eeeeeee",
    "eeeeeeeeee",
  ]) // false
);
