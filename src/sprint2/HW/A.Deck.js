// 52113104
class Dequeue {
  constructor(size) {
    this.queue = [];
    this.size = size;
  }

  push_back(value) {
    if (this._isLimitExceed()) {
      return this._getErrorText();
    }

    this.queue.push(value);
  }

  push_front(value) {
    if (this._isLimitExceed()) {
      return this._getErrorText();
    }

    this.queue.unshift(value);
  }

  pop_front() {
    if (this._isEmptyQueue()) {
      return this._getErrorText();
    }

    return this.queue.shift();
  }

  pop_back() {
    if (this._isEmptyQueue()) {
      return this._getErrorText();
    }

    return this.queue.pop();
  }

  _isLimitExceed() {
    return this.queue.length >= this.size;
  }

  _isEmptyQueue() {
    return this.queue.length === 0;
  }

  _getErrorText() {
    return 'error';
  }
}

function solution(values) {
  const [overallCount, operations_count, ...commands] = values;
  const dequeue = new Dequeue(parseInt(operations_count, 10));
  let result = '';

  commands.forEach((command) => {
    if (command.includes('push_back')) {
      const pushResult = dequeue.push_back(command.split(' ')[1]);

      if (pushResult) {
        result += pushResult + '\n';
      }
    }

    if (command.includes('push_front')) {
      const pushResult = dequeue.push_front(command.split(' ')[1]);

      if (pushResult) {
        result += pushResult + '\n';
      }
    }

    if (command.includes('pop_back')) {
      result += dequeue.pop_back() + '\n';
    }

    if (command.includes('pop_front')) {
      result += dequeue.pop_front() + '\n';
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


/*console.log(solution(('6\n' +
  '6\n' +
  'push_front -201\n' +
  'push_back 959\n' +
  'push_back 102\n' +
  'push_front 20\n' +
  'pop_front\n' +
  'pop_back\n').split('\n')));*/
