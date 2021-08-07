// https://www.hackerrank.com/challenges/connected-cell-in-a-grid/problem

function solution(arr) {
  let m = arr.length;
  let n = arr[0].length;

  function findPath(i, j) {
    if (i >= m || j >= n || i < 0 || j < 0 || arr[i][j] <= 0) {
      return 0;
    }

    let count = 1;
    arr[i][j] = -1;

    count = count + findPath(i + 1, j)
    count = count + findPath(i, j + 1)
    count = count + findPath(i - 1, j)
    count = count + findPath(i, j - 1)
    count = count + findPath(i + 1, j + 1)
    count = count + findPath(i - 1, j - 1)
    count = count + findPath(i + 1, j - 1)
    count = count + findPath(i - 1, j + 1)

    return count;
  }

  let maxVal = -1;
  let value = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      value = findPath(i, j)

      if (value > maxVal) {
        maxVal = value;
      }
    }
  }

  return maxVal;
}

console.log(solution([[0, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 1, 0, 1, 0], [0, 1, 0, 1, 1], [0, 1, 1, 1, 0]]))