class Node {
 constructor(value = null, next = null) {
   this.value = value;
   this.next = next;
 }
}

class ListQueue {
  constructor() {
    this.queueSize = 0;
    this.queue = new Node();
    this.head = this.queue;
    this.last = this.queue;
  }

  get() {
    if (this.queueSize <= 0) {
      return 'error';
    }

    const headValue = this.head.value;
    this.head = this.head.next;
    this.queueSize -= 1;

    return headValue;
  }

  put(value) {
    if (this.queueSize === 0 && !this.queue.value) {
      this.queue.value = value;
    } else {
      this.last.next = new Node(value);
      this.last = this.last.next;
    }

    this.queueSize += 1;
  }

  size() {
    return this.queueSize;
  }
}


function solution(data) {
  const [commandsCount, ...commands] = data;
  const listQueue = new ListQueue();
  let result = '';

  commands.forEach((command) => {
    if (command.includes('get')) {
      const pushResult = listQueue.get();

      if (pushResult !== undefined) {
        result += pushResult + '\n';
      }
    }

    if (command.includes('put')) {
      listQueue.put(command.split(' ')[1]);
    }

    if (command.includes('size')) {
      result += listQueue.size() + '\n';
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

/*console.log(solution('9\n' +
  'get\n' +
  'size\n' +
  'put 74\n' +
  'get\n' +
  'size\n' +
  'put 90\n' +
  'size\n' +
  'size\n' +
  'size\n'))
 */