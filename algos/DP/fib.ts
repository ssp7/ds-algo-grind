function NthFib(n: number, memo: number[] = []) {
  if (n <= 2) {
    memo[n] = 1;
  } else if (!memo[n]) {
    memo[n] = NthFib(n - 1, memo) + NthFib(n - 2, memo);
  }
  return memo[n];
}

console.log(NthFib(6));