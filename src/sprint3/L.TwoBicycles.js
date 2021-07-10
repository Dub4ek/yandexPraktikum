function solution(data) {
  const [count, priceTrend, bicyclePrice] = data;
  let start = 0;
  const priceTrendCol = priceTrend.split(' ').map(item => parseInt(item, 10));
  let end = parseInt(count, 10);
  let pivot = Math.floor((start + end) / 2);
  let currentValue = priceTrendCol[pivot];
  const currentBicyclePrice = parseInt(bicyclePrice, 10);

  while (currentBicyclePrice !== currentValue) {
    if (end <= start) {
      return -1;
    }

    if (currentValue > currentBicyclePrice) {
      end = pivot;
    } else {
      start = pivot + 1;
    }

    pivot = Math.floor((start + end) / 2);
    currentValue = priceTrendCol[pivot];
  }

  return currentValue;

}

/* var readline = require('readline');
var io_interface = readline.createInterface({input: process.stdin});

let output_numbers = [];
io_interface.on('line', function (line) {
  output_numbers.push(line);
})

io_interface.on('close', function () {
  process.stdout.write(solution(output_numbers));
})
*/

console.log(solution(('6\n' +
  '1 2 4 4 6 8\n' +
  '3').split('\n')));