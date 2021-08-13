function solution(data) {
  const [childrenCount, greedyFactors, cookiesCount, cookiesSizes] = data;
  const greedyFactorCollection = greedyFactors.split(' ').map(item => parseInt(item, 10)).sort((a, b) => a - b);
  const cookiesSizeCollection = cookiesSizes.split(' ').map(item => parseInt(item, 10)).sort((a, b) => a - b);

  let result = 0;
  let i = 0;
  let j = 0;

  while(i < greedyFactorCollection.length && j < cookiesSizeCollection.length) {
    if (greedyFactorCollection[i] <= cookiesSizeCollection[j]) {
      i++;
      result++;
    }

    j++;
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
  console.log(solution(output_numbers));
  //process.stdout.write(solution(output_numbers));
})


/* console.log(solution(('59\n' +
   '55 77 61 99 28 98 17 80 63 86 5 19 76 97 58 6 97 53 90 29 40 37 7 39 17 64 75 92 78 31 8 81 56 14 59 1 79 22 21 56 64 11 83 75 8 22 63 2 44 15 76 78 4 29 11 52 97 28 8\n' +
   '44\n' +
   '44 38 13 11 53 58 46 50 86 6 53 48 80 11 69 6 5 83 92 14 94 78 41 1 2 4 43 12 13 38 43 54 3 86 45 93 48 82 24 58 39 100 7 72\n').split('\n')));*/
