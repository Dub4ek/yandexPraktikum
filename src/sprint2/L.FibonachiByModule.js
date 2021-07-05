function solution(data) {
  const [n, k] = data.toString().split(' ');
  const memo = {};

  function fibonachi(value) {
    let currentValue = parseInt(value, 10);
    let arr = [1, 1];

   for (let i = 2; i < currentValue + 1; i++) {
      arr.push(arr[i  - 2] % Math.pow(10, parseInt(k, 10)) + arr[i - 1] % Math.pow(10, parseInt(k, 10)));
     arr[i - 2] = undefined;
    }

    return arr[currentValue] % Math.pow(10, parseInt(k, 10));
  }

  return fibonachi(n);
}

/* var readline = require('readline');
var io_interface = readline.createInterface({input: process.stdin});

let output_numbers = [];
io_interface.on('line', function (line) {
  output_numbers.push(line);
})

io_interface.on('close', function () {
  process.stdout.write(solution(output_numbers));
})
*/


let cnt, res;
process.stdin.on('data', data => {
  res = solution(data);
  process.stdout.write(res + '');
  process.exit();
});


//console.log(solution('506277 6'));