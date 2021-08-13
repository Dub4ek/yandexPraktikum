function solution(data) {
  const [values, houses]  = data;
  const [houseCount, amount] = values.split(' ').map(item => parseInt(item, 10));
  const collection = houses.split(' ').sort((a, b) => a - b);
  let count = 0;
  let currentAmount = 0;
  let index = 0;

  while (count <= houseCount && currentAmount <= amount) {
    currentAmount += parseInt(collection[index], 10);

    if (currentAmount <= amount) {
      count++;
      index++;
    } else {
      break;
    }
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
  console.log(solution(output_numbers));
  //process.stdout.write(solution(output_numbers));
})


//console.log(solution(('8 3\n' +
//  '9 2 8 4 6 5 3 10').split('\n')));

