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

class DequeueRingBuffer {
  constructor(size) {
    this.queue = new Array(2 * size);
    this.size = 0;
    this.tail = size;
    this.head = size;
    this.max_n = size;
  }

  pop_front() {
    if (this._isEmptyQueue()) {
      return this._getErrorText();
    }

    const value = this.queue[this.head + 1];
    this.queue[this.head + 1] = undefined;
    this.head = (this.head + 1);
    this.size -= 1;

    return value;
  }

  pop_back() {
    if (this._isEmptyQueue()) {
      return this._getErrorText();
    }

    const value = this.queue[this.tail - 1];
    this.queue[this.tail - 1] = undefined;
    this.tail = (this.tail - 1);
    this.size -= 1;

    return value;
  }

  push_front(value) {
    if (this._isLimitExceed()) {
      return this._getErrorText();
    }

    this.queue[this.head] = value;

    if (this.head === this.tail) {
      this.tail += 1;
    }

    this.head = (this.head - 1);
    this.size += 1;
  }

  push_back(value) {
    if (this._isLimitExceed()) {
      return this._getErrorText();
    }

    this.queue[this.tail] = value;
    this.tail = (this.tail + 1);
    this.size += 1;
  }

  _isLimitExceed() {
    return this.queue.length > this.max_n;
  }

  _isEmptyQueue() {
    return this.size === 0;
  }

  _getErrorText() {
    return 'error';
  }
}

function solution(values) {
  const [overallCount, operations_count, ...commands] = values;
  const dequeue = new DequeueRingBuffer(parseInt(operations_count, 10));
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
/*
var readline = require('readline');
var io_interface = readline.createInterface({input: process.stdin});

let output_numbers = [];
io_interface.on('line', function (line) {
  output_numbers.push(line);
})

io_interface.on('close', function () {
  process.stdout.write(solution(output_numbers));
})
*/
console.log(solution(('7\n' +
  '7\n' +
  'pop_front\n' +
  'pop_front\n' +
  'push_front 741\n' +
  'push_front 648\n' +
  'pop_front\n' +
  'pop_back\n' +
  'pop_front\n').split('\n')));

// [0,0,20,-201,959,102]
