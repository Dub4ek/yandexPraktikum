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

function solution(data) {
  const [count, values, k] = data;
  const collection = values.split(' ').map(item => parseInt(item, 10));

  const mapId = collection.reduce((prev, cur) => {
    if (prev[cur]) {
      prev[cur] += 1;
    } else {
      prev[cur] = 1;
    }

    return prev;
  }, {});

  return Object.keys(mapId)
    .sort((a, b) => mapId[b] - mapId[a])
    .slice(0, k)
    .join(' ');

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


/*console.log(solution(('7\n' +
  '1 2 3 1 2 3 4\n' +
  '3\n').split('\n')));
*/
