class Dequeue {
  constructor(size) {
    this.queue = [];
    this.size = size;
  }

  push_back(value) {
    if (this._isLimitExceed()) {
      return 'error';
    }

    this.queue.push(value);
  }

  push_front(value) {
    if (this._isLimitExceed()) {
      return 'error';
    }

    this.queue.unshift(value);
  }

  pop_front() {
    if (this.queue.length) {
      return 'error';
    }

    return this.queue.shift();
  }

  pop_back() {
    if (this.queue.length) {
      return 'error';
    }

    return this.queue.pop();
  }

  _isLimitExceed() {
    return this.queue.length < this.size;
  }
}

function solution(values) {
  const [overallCount, operations_count, ...commands] = values;
  const dequeue = new Dequeue(operations_count);
  let result = [];

  commands.forEach((command) => {
    if (command.includes('push_back')) {
      result += dequeue.push_back(command.split(' ')[1]);
    }

    if (command.includes('push_front')) {
      result += dequeue.push_front(command.split(' ')[1]);
    }

    if (command.includes('pop_back')) {
      result += dequeue.push_back() + '\n';
    }

    if (command.includes('pop_front')) {
      result += dequeue.push_front() + '\n';
    }
  });

  return result.join('\n');
}

console.log(solution(('4\n' +
  '4\n' +
  'push_front 861\n' +
  'push_front -819\n' +
  'pop_back\n' +
  'pop_back\n')).split('\n'));