class StackMax {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    if (this.stack.length === 0) {
      return 'error';
    }

    return this.stack.pop();
  }

  get_max() {
    if (this.stack.length === 0) {
      return 'None';
    }

    return Math.max.apply(this, this.stack);
  }
}

function bracketSequence([values]) {
  const collection = values.split('').filter(item => item !== '\n');
  const stackMax = new StackMax();
  const brackets = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  const requiredBrackets = Object.keys(brackets);
  let result = true;

  collection.forEach(item => {
    if (requiredBrackets.includes(item)) {
      stackMax.push(item);
    } else {
      const stackBracket = stackMax.pop();

      if (item !== brackets[stackBracket]) {
        result = false;
      }
    }

  });

  if (stackMax.pop() !== 'error') {
    result = false;
  }

  return result ? 'True' : 'False';
}

var readline = require('readline');
var io_interface = readline.createInterface({input: process.stdin});

let output_numbers = [];
io_interface.on('line', function (line) {
  output_numbers.push(line);
})

io_interface.on('close', function () {
  process.stdout.write(bracketSequence(output_numbers));
})