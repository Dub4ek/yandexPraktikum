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

    this.stack.pop();
  }

  get_max() {
    if (this.stack.length === 0) {
      return 'None';
    }

    return Math.max.apply(this, this.stack);
  }
}

function stackMax(values) {
  const [operations_count, ...commands] = values;
  const stackMax = new StackMax();
  let result = '';

  commands.forEach((command) => {
    if (command.includes('pop')) {
      const popResult = stackMax.pop();

      if (popResult !== undefined) {
        result += popResult + '\n';
      }
    }

    if (command.includes('push')) {
      stackMax.push(command.split(' ')[1]);
    }

    if (command.includes('get_max')) {
      result += stackMax.get_max() + '\n';
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
  process.stdout.write(stackMax(output_numbers));
})