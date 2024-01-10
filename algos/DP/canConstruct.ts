/**
 * @param target
 * @param wordBank {string[]}
 * @returns Function that returns if target string can be made by adding
 * values from arr array.
 */
function canConstruct(
  target: string,
  wordBank: string[],
  memo: { [key: string]: boolean } = {}
): boolean {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
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

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]) // false
);
console.log(
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]) // true
);
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "eee",
    "eeeee",
    "eeee",
    "eeeeee",
    "eeeeeee",
    "eeeeeeeeee",
  ]) // false
);
