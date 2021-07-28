// 52113439

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
}

function solution(value) {
  const [data] = value.toString().split('\n');
  const operands = data.split(' ');
  const stack = new Stack();

  operands.forEach((item) => {
    const currentItem = parseInt(item, 10);

    if (!isNaN(currentItem)) {
      stack.push(currentItem);
    } else {
      const secondValue = stack.pop();
      const firstValue = stack.pop();

      if (item === '+') {
        stack.push(firstValue + secondValue);
      } else if (item === '-') {
        stack.push(firstValue - secondValue);
      } else if (item === '*') {
        stack.push(firstValue * secondValue);
      } else if (item === '/') {
        stack.push(Math.floor(firstValue/secondValue));
      }
    }
  });

  return stack.pop();
}

let cnt, res;
process.stdin.on('data', data => {
  res = solution(data);
  process.stdout.write(res + '');
  process.exit();
});
