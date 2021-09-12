function solution(n, open = 0, close = 0) {
  let result = 0;
  if (open + close === n * 2) {
    return 1;
  }
  if (open < n) {
    result += solution(n, open + 1, close);
  }
  if (open > close) {
    result += solution(n, open, close + 1);
  }
  return result;
}

var readline = require('readline');
var io_interface = readline.createInterface({input: process.stdin});

let output_numbers = [];
io_interface.on('line', function (line) {
  output_numbers.push(line);
})

io_interface.on('close', function () {
  console.log(solution(output_numbers[0]));
  //process.stdout.write(solution(output_numbers));
})

//console.log(solution(('15').split('\n')));