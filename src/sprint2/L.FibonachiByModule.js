function solution(data) {
  const [n, k] = data.toString().split(' ');
  const memo = {};

  function fibonachi(value, memo) {
    if (memo[value]) {
      return memo[value];
    }

    if (value <= 1) {
      return 1;
    }

    return memo[value] = fibonachi(value - 2, memo) + fibonachi(value - 1, memo);
  }

  return fibonachi(n, memo) % Math.pow(10, parseInt(k, 10));
}

function sum(num1, num2) {

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

/*let cnt, res;
process.stdin.on('data', data => {
  res = solution(data);
  process.stdout.write(res + '');
  process.exit();
});*/

console.log(solution('10 1'));