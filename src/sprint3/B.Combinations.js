
function solution(value) {
  const [currentValue] = value;
  const symbols = {
    2:'abc',
    3:'def',
    4:'ghi',
    5:'jkl',
    6:'mno',
    7:'pqrs',
    8:'tuv',
    9:'wxyz'
  };

  function gen(a, b) {
    const variants = [];

    if (a.length === 0) {
      return b;
    }

    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        variants.push(a[i] + b[j]);
      }
    }

    return variants;
  }

  let result = [];

  for (let i = 0; i < currentValue.length; i++) {
    result = gen(result, symbols[currentValue[i]].split(''));
  }

  return result.join(' ');
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

//console.log(solution(('923').split('\n')));
