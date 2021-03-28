const sum = (data) => {
  let [width, height, ...rest] = data;
  const currentWidth = parseInt(width, 10);
  const currentHeight = parseInt(height, 10);
  const elements = rest.slice(0, currentWidth).map(item => item.split(' ').map(item => parseInt(item, 10)));
  const [ x, y ] = [rest[rest.length - 2], rest[rest.length - 1]];
  const elementX = parseInt(x, 10);
  const elementY = parseInt(y, 10);
  const checkX = (x, max) => {
    return x >= 0 && x < max;
  };

  const result = [
    checkX(elementX + 1, currentWidth) ? elements[elementX + 1][elementY] : NaN,
    checkX(elementX - 1, currentWidth) ? elements[elementX - 1][elementY] : NaN,
    checkX(elementY + 1, currentHeight) ? elements[elementX][elementY + 1] : NaN,
    checkX(elementY - 1, currentHeight) ? elements[elementX][elementY - 1] : NaN,
  ];
  console.log(elementX, elementY)
  return result
  .filter(item => !Number.isNaN(item))
  .sort((a, b) => a - b)
  .join(' ');
};

var readline = require('readline');
var io_interface = readline.createInterface({input: process.stdin});

let output_numbers = [];
io_interface.on('line', function (line) {
  output_numbers.push(line);
})

io_interface.on('close', function () {
  process.stdout.write(sum(output_numbers));
})