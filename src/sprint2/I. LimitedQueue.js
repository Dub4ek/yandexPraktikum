class MyQueueSized {
    constructor(maxSize) {
        this.queue = [];
        this.maxSize = maxSize;
    }

    push(value) {
        if (this._isLimitExceed()) {
            return this.queue.unshift(value);
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
        return this.size() <= this.maxSize;
    }
}

function solution(data) {
    const [commandCount, maxSize, ...commands] = data.split('\n');
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
            result += queue.push(command.split(' ')[1]) + '\n';
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



console.log(solution('8\n' +
  '2\n' +
  'peek\n' +
  'push 5\n' +
  'push 2\n' +
  'peek\n' +
  'size\n' +
  'size\n' +
  'push 1\n' +
  'size\n'));
