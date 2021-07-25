function solution(data) {
  const [values, houses]  = data;
  const [houseCount, amount] = values.split(' ').map(item => parseInt(item, 10));
  const collection = houses.split(' ').map(item => parseInt(item, 10)).sort();
  let count = 0;
  let currentAmount = collection[0];
  let index = 1;

  while (count <= houseCount && currentAmount <= amount) {
    count++;
    index++;
    currentAmount = collection[index];
  }

  return count;
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


//console.log(solution(('3 1000\n' +
//  '350 999 200').split('\n')));

