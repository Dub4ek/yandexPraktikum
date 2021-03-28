// 50116186
const closestZero = (data) => {
  const [length, numbers] = data;
  const numCollection = numbers.split(' ');
  const zerosPosition = numCollection
  .map((item, i) => item == 0 ? i : NaN)
  .filter(item => !isNaN(item));
  const getDistance = (index, col) => {
    let minDistance = Number.MAX_SAFE_INTEGER;
    let previousValue = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < col.length; i++) {
      const item = col[i];
      let distance = Math.abs(index - item);

      if (distance < minDistance) {
        minDistance = distance;
      }

      if (previousValue < distance) {
        break;
      }

      previousValue = distance;
    }

    return minDistance;
  };


  return numCollection
  .map((item, i) => {
    if (item == 0) {
      return 0;
    } else {
      return getDistance(i, zerosPosition);
    }
  })
  .join(' ');
};

var readline = require('readline');
var io_interface = readline.createInterface({input: process.stdin});

let output_numbers = [];
io_interface.on('line', function (line) {
  output_numbers.push(line);
})

io_interface.on('close', function () {
  process.stdout.write(closestZero(output_numbers));
})