function solution(data) {
  const [childrenCount, greedyFactors, cookiesCount, cookiesSizes] = data;
  const greedyFactorCollection = greedyFactors.split(' ').map(item => parseInt(item, 10)).sort();
  const cookiesSizeCollection = cookiesSizes.split(' ').map(item => parseInt(item, 10)).sort();

  let result = 0;
  let cookieIndex = 0;

  greedyFactorCollection.forEach((item) => {
    if (item <= cookiesSizeCollection[cookieIndex]) {
      cookieIndex++;
      result++;
    }
  });

  return result;
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

// console.log(solution(('3\n' +
//   '2 1 3\n' +
//   '2\n' +
//   '1 1\n').split('\n')));