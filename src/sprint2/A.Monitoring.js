const monitoring = (data) => {
  const [width, height, ...rest] = data;
  const collection = rest.map(item => item.split(' '));
  const result = [];

  for (let i = 0; i < height; i++) {
    result[i] = [];
    for (let j = 0; j < width; j++) {
      result[i][j] = collection[j][i];
    }
  }

  return result.map(item => item.join(' ')).join('\n');
};

var readline = require('readline');
var io_interface = readline.createInterface({input: process.stdin});

let output_numbers = [];
io_interface.on('line', function (line) {
  output_numbers.push(line);
})

io_interface.on('close', function () {
  process.stdout.write(monitoring(output_numbers));
})