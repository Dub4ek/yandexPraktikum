class Stack {
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
  getTopElement() {
    return this.stack[this.stack.length - 1];
  }
}

class StackMaxEffective {
  constructor() {
    this.stack = [];
    this.maxValueCol = new Stack();
    this.maxValue = undefined;
  }

  push(value) {
    const currentValue = parseInt(value, 10);
    if (currentValue >= this.maxValue || this.maxValue === undefined) {
      this.maxValue = currentValue;
      this.maxValueCol.push(currentValue);
    }

    this.stack.push(currentValue);
  }

  pop() {
    if (this.stack.length === 0) {
      return 'error';
    }

    let value = this.stack.pop();

    if (value === this.maxValue) {
      this.maxValueCol.pop();
      this.maxValue = this.maxValueCol.getTopElement();
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



/*console.log(stackMaxEffective(('get_max\n' +
  'push -8\n' +
  'pop\n' +
  'pop\n' +
  'get_max\n' +
  'pop\n' +
  'pop\n' +
  'get_max\n' +
  'push -1\n' +
  'get_max\n' +
  'push -8\n' +
  'get_max\n' +
  'push 3\n' +
  'get_max\n' +
  'push 5\n' +
  'push -1\n' +
  'pop\n' +
  'push -4\n' +
  'pop\n' +
  'pop\n' +
  'get_max\n' +
  'push 2\n' +
  'pop\n' +
  'pop\n' +
  'push -6\n' +
  'pop\n' +
  'get_max\n' +
  'push 4\n' +
  'pop\n' +
  'pop\n' +
  'push -3\n' +
  'pop\n' +
  'pop\n' +
  'get_max\n' +
  'pop\n' +
  'pop\n' +
  'pop\n' +
  'get_max\n' +
  'push -2\n' +
  'get_max\n' +
  'push -3\n' +
  'push 5\n' +
  'get_max\n' +
  'push -3\n' +
  'push 1\n' +
  'push 5\n' +
  'pop\n' +
  'pop\n' +
  'pop\n' +
  'get_max\n' +
  'get_max\n').split('\n')));*/

