/**
 * @param target
 * @param wordBank {string[]}
 * @returns Function that returns number of ways target string can be made by adding
 * values from arr array.
 */
function allConstruct(
  target: string,
  wordBank: string[],
  memo: { [key: string]: string[][] } = {}
): string[][] {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  const numWays: string[][] = [];
  for (const word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      numWays.push(...targetWays);
    }
  }
  memo[target] = numWays;
  return numWays;
}

/**
 * m = target.length
 * n = wordBank.length
 *
 * Brute Force:
 * Time = O(n^m * m)
 * Space = O(m)
 *
 * Memoized Soln:
 * Time = O(n^m * m)
 * Space = O(m)
 */

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]) // false
);
console.log(
  allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]) // true
);
console.log(
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "eee",
    "eeeee",
    "eeee",
    "eeeeee",
    "eeeeeee",
    "eeeeeeeeee",
  ]) // false
);
