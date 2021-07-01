const longestWord = (data) => {
  const [length, sentence] = data;
  let max = -1;
  let maxIndex = -1;
  const lengthMap = sentence.trim().split(' ').filter(item => /[a-z]*/.test(item));

  if (parseInt(length, 10) === 0 || lengthMap.length === 0) {
    return ' \n0';
  }

  lengthMap.forEach((item, index) => {
    if (item.length > max) {
      max = item.length;
      maxIndex = index;
    }
  });
  return `${lengthMap[maxIndex]} \n${max}`;
};

var readline = require('readline');
var io_interface = readline.createInterface({input: process.stdin});

let output_numbers = [];
io_interface.on('line', function (line) {
  output_numbers.push(line);
})

io_interface.on('close', function () {
  process.stdout.write(longestWord(output_numbers));
})