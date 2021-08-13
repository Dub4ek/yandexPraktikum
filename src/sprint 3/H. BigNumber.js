function solution(data) {
  const [count, values] = data;
  const collection = values.split(' ').map(item => parseInt(item, 10))

  function comparatorB(a, b) {
    const firstValue = parseInt(a.toString() + b.toString(), 10)
    const secondValue = parseInt(b.toString() + a.toString(), 10)

    return secondValue - firstValue;
  }

  return collection.sort(comparatorB).join('');
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
  '1 783 2\n').split('\n')));*/

