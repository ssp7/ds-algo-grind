/**
 * @param row 
 * @param col 
 * @param memo Storing computed values from the call stack
 * @returns No of ways you can reach from top to bottom in a (row x col) grid.
 */
function gridTravel(
  row: number,
  col: number,
  memo: { [key: string]: number } = {}
): number {
  const key = `${row},${col}`;

  if (key in memo) return memo[key];
  if ([row, col].includes(0)) return 0;
  if (row === 1 && col === 1) return 1;

  memo[key] = gridTravel(row - 1, col, memo) + gridTravel(row, col - 1, memo);
  memo[`${col}_${row}`] = memo[key];

  return memo[key];
}

console.log(gridTravel(1, 1));
console.log(gridTravel(2, 3));
console.log(gridTravel(3, 2));
console.log(gridTravel(3, 3));
console.log(gridTravel(18, 18));
