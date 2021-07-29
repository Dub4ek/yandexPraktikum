function solution(data) {
  const [count, elements] = data;

  if (parseInt(count) === 0) {
    return 0;
  }

  const collection = elements.split(' ');
  const dict = {0: -1};
  let sum = 0;
  let maxLength = 0;

  collection.forEach((item, i) => {
    const currentItem = item == 0 ? -1 : 1;

    sum += currentItem;

    if (dict.hasOwnProperty(sum)) {
      let index = dict[sum];

      if (i - index > maxLength) {
        maxLength = i - index;
      }
    }

    if (!dict.hasOwnProperty(sum)) {
      dict[sum] = i;
    }
  });

  return maxLength;
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


/*console.log(solution(('71\n' +
  '1 0 1 0 0 1 1 1 1 1 1 0 0 0 0 1 1 1 1 1 1 1 0 0 1 1 1 0 1 0 0 1 1 0 0 1 1 1 1 0 0 0 0 1 1 0 0 0 0 0 0 0 1 1 1 0 0 1 1 1 0 0 1 0 1 1 1 1 1 0 1\n').split('\n')));*/
