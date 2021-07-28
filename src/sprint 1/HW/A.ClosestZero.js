// 52075539
const closestZero = (data) => {
  const [length, numbers] = data;
  const numCollection = numbers.split(' ');
  const zerosPosition = numCollection
  .map((item, i) => item == 0 ? i : -1)
  .filter(item => item >= 0);

  const getDistance = (col, curZeroIndex = 0) => {
    let zeroIndex = curZeroIndex;

    return (index) => {
      let closestZero1 = col[zeroIndex];
      let closestZero2 = col[zeroIndex + 1];

      const diffZero1 = Math.abs(closestZero1 - index);
      const diffZero2 = Math.abs(closestZero2 - index);

      if (index < closestZero1) {
        return diffZero1;
      } else if (index > closestZero1 || index < closestZero2){
        return diffZero1 > diffZero2 ? diffZero2 : diffZero1;
      }
    }
  };
  let getDistanceWithZeros = getDistance(zerosPosition);
  let zeroIndex = 0;

  return numCollection
  .map((item, i) => {
    if (item == 0) {
      getDistanceWithZeros = getDistance(zerosPosition, zeroIndex);
      zeroIndex += 1;
      return 0;
    }

    return getDistanceWithZeros(i);
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