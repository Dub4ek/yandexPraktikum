
function solution(value) {
  const currentValue = parseInt(value, 10);
  const prefixCollection = [];

  function validateBrackets(str) {
    const stack = [];
    let error = false;

    for(let i = 0; i < str.length; i++) {
      const item = str[i];

      if (item === '(') {
        stack.push(item);
      } else if (item === ')' && stack.length > 0) {
        stack.pop();
      } else {
        error = true;
        break;
      }
    }

    return stack.length === 0 && !error;
  }


  function gen(n, prefix) {
    if (n === 0) {
      if (validateBrackets(prefix)) {
        prefixCollection.push(prefix);
      }
    } else {
      gen(n - 1, prefix + ')');
      gen(n - 1, prefix + '(');
    }
  }

  gen(2 * currentValue, '');
  return prefixCollection.reverse().join('\n');
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



//console.log(solution(('2').split('\n')));
