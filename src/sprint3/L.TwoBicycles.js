function solution(data) {
  const [count, priceTrend, bicyclePrice] = data;

  function findIndex(index) {
    let start = 0;
    const priceTrendCol = priceTrend.split(' ').map(item => parseInt(item, 10));
    let end = parseInt(count, 10) - 1;
    let pivot = Math.floor((start + end) / 2);
    let currentValue = priceTrendCol[pivot];
    const currentBicyclePrice = parseInt(bicyclePrice, 10) * index;
    let prevPivot = -1;

    while (end > start && pivot !== prevPivot) {
      if (currentValue === currentBicyclePrice) {
        break;
      }
      if (currentValue > currentBicyclePrice) {
        end = pivot;
      } else {
        start = pivot + 1;
      }

      prevPivot = pivot;
      pivot = Math.floor((start + end) / 2);

      if (pivot < parseInt(count, 10)) {
        currentValue = priceTrendCol[pivot];
      }
    }

    if (currentValue < currentBicyclePrice) {
      return -1;
    }

    return pivot + 1;
  }

  return `${findIndex(1)} ${findIndex(2)}`;

}

/*var readline = require('readline');
var io_interface = readline.createInterface({input: process.stdin});

let output_numbers = [];
io_interface.on('line', function (line) {
  output_numbers.push(line);
})

io_interface.on('close', function () {
  process.stdout.write(solution(output_numbers));
})*/



console.log(solution(('6\n' +
  '1 1 4 4 4 4\n' +
  '1').split('\n')));
