function solution(data) {
  const [count, values, k] = data;
  const currentCount = parseInt(count, 10);
  const collection = values.split(' ').map(item => parseInt(item, 10));
  const squares = [];

  for (let i = 0; i < currentCount; i++) {
    for (let j = 0; j < currentCount; j++) {
      if (i !== j && collection[i] >= collection[j]) {
        squares.push(Math.abs(collection[i] - collection[j]));
      }
    }
  }

  return squares[k - 1];
}


var readline = require('readline');
var io_interface = readline.createInterface({input: process.stdin});

let output_numbers = [];
io_interface.on('line', function (line) {
  output_numbers.push(line);
})

io_interface.on('close', function () {
  process.stdout.write(solution(output_numbers));
})


/*console.log(solution(('3\n' +
  '1 3 5\n' +
  '3').split('\n')));
*/