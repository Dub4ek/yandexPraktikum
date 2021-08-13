function solution(data) {
  const [count, values] = data;
  const collection = values.split(' ').map(item => parseInt(item, 10)).sort((a,b) => b-a);

  if (collection.length < 3) {
    return 0;
  }

  let index = 0;
  let a = collection[index + 2];
  let b = collection[index + 1];
  let c = collection[index];

  while (c >= a + b) {
    index++;
    a = collection[index + 2];
    b = collection[index + 1];
    c = collection[index];
  }

  return a + b + c;
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


//console.log(solution(('6\n' +
//  '5 3 7 2 8 3').split('\n')));

