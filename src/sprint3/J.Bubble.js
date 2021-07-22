function solution(data) {
  const [count, array] = data;
  const collection = array.split(' ').map(item => parseInt(item, 10));
  const result = [];
  let valueChanged = false;

  for (let i = 0; i < collection.length - 1; i++) {
    valueChanged = false;

    for (let j = 0; j < collection.length; j++) {
      if (collection[j] > collection[j + 1] ) {
        let temp = collection[j];
        collection[j] = collection[j + 1];
        collection[j + 1] = temp;
        valueChanged = true;
      }
    }

    if (valueChanged) {
      result.push(collection.join(' '));
    }
  }

  if (result.length === 0) {
    result.push(array);
  }

  return result.join('\n');
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

/*console.log(solution(('2\n' +
  '4 5').split('\n')));*/
