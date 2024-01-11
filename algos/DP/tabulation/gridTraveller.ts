/**
 * @param row
 * @param col
 * @param memo Storing computed values from the call stack
 * @returns No of ways you can reach from top to bottom in a (row x col) grid.
 */
function gridTravel(m: number, n: number): number {
  const table = Array(m + 1)
    .fill([])
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;
  for (let row = 0; row <= m; row++) {
    for (let col = 0; col <= n; col++) {
      const element = table[row][col];
      if (row + 1 <= m) table[row + 1][col] += element;
      if (col + 1 <= n) table[row][col + 1] += element;
    }
  }
  return table[m][n];
}

console.log(gridTravel(3, 3));
console.log(gridTravel(2, 3));
console.log(gridTravel(3, 2));
console.log(gridTravel(18, 18));
