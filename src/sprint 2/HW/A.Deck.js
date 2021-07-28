// 52183933
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
    this.head = size - 1;
    this.max_n = size;
  }

  pop_front() {
    if (this._isEmptyQueue()) {
      return this._getErrorText();
    }
    let headIndex = this.head + 1;

    const value = this.queue[headIndex];
    this.queue[headIndex] = undefined;
    this.head = headIndex;
    this.size -= 1;

    return value;
  }

  pop_back() {
    if (this._isEmptyQueue()) {
      return this._getErrorText();
    }

    let tailIndex = this.tail - 1;

    const value = this.queue[tailIndex];
    this.queue[tailIndex] = undefined;
    this.tail = tailIndex;
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
    return this.size >= this.max_n;
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

var readline = require('readline');
var io_interface = readline.createInterface({input: process.stdin});

let output_numbers = [];
io_interface.on('line', function (line) {
  output_numbers.push(line);
})

io_interface.on('close', function () {
  process.stdout.write(solution(output_numbers));
})


/*console.log(solution(('334\n' +
  '65\n' +
  'push_front 505\n' +
  'pop_back\n').split('\n')));*/


// [0,0,20,-201,959,102]
