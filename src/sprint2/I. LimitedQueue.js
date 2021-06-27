class MyQueueSized {
    constructor(maxSize) {
        this.queue = [];
        this.maxSize = maxSize;
    }

    push(value) {
        if (this._isLimitExceed()) {
            this.queue.push(value);
        } else {
            return 'error';
        }
    }

    pop() {
        if (this.queue.length === 0) {
            return 'None';
        }

        return this.queue.shift();
    }

    peek() {
        if (this.queue.length === 0) {
            return 'None';
        }

        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    _isLimitExceed() {
        return this.size() < this.maxSize;
    }
}

function solution(data) {
    const [commandCount, maxSize, ...commands] = data;
    const queue = new MyQueueSized(maxSize);
    let result = '';

    commands.forEach((command) => {
        if (command.includes('pop')) {
            const popResult = queue.pop();

            if (popResult !== undefined) {
                result += popResult + '\n';
            }
        }

        if (command.includes('push')) {
            const pushResult = queue.push(command.split(' ')[1]);

            if (pushResult !== undefined) {
                result += pushResult + '\n';
            }
        }

        if (command.includes('peek')) {
            result += queue.peek() + '\n';
        }

        if (command.includes('size')) {
            result += queue.size() + '\n';
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


/*console.log(solution('10\n' +
  '1\n' +
  'push 1\n' +
  'size\n' +
  'push 3\n' +
  'size\n' +
  'push 1\n' +
  'pop\n' +
  'push 1\n' +
  'pop\n' +
  'push 3\n' +
  'push 3\n'));
*/