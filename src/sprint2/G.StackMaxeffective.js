class StackMaxEffective {
  constructor() {
    this.stack = [];
    this.maxValueCol = [];
    this.maxValue = undefined;
  }

  push(value) {
    if (value > this.maxValue || this.maxValue === undefined) {
      this.maxValue = value;
      this.maxValueCol.push(value);
    }

    this.stack.push(value);
  }

  pop() {
    if (this.stack.length === 0) {
      return 'error';
    }

    let value = this.stack.pop();

    if (value === this.maxValue) {
      this.maxValueCol.pop();
      this.maxValue = this.maxValueCol[this.maxValueCol.length - 1];
    }
  }

  get_max() {
    if (this.stack.length === 0) {
      return 'None';
    }

    return this.maxValue;
  }
}

function stackMaxEffective(values) {
  const [operations_count, ...commands] = values;
  const stackMax = new StackMaxEffective();
  let result = [];

  commands.forEach((command) => {
    if (command.includes('pop')) {
      const popResult = stackMax.pop();

      if (popResult !== undefined) {
        result.push(popResult);
      }
    }

    if (command.includes('push')) {
      stackMax.push(command.split(' ')[1]);
    }

    if (command.includes('get_max')) {
      result.push(stackMax.get_max());
    }
  });

  return result.join('\n');
}

var readline = require('readline');
var io_interface = readline.createInterface({input: process.stdin});

let output_numbers = [];
io_interface.on('line', function (line) {
  output_numbers.push(line);
})

io_interface.on('close', function () {
  process.stdout.write(stackMaxEffective(output_numbers));
})

console.log(stackMaxEffective(('10\n' +
  'get_max\n' +
  'push -6\n' +
  'pop\n' +
  'pop\n' +
  'get_max\n' +
  'push 2\n' +
  'get_max\n' +
  'pop\n' +
  'push -2\n' +
  'push -6\n').split('\n')));