class Node {
   constructor(value = null, next = null) {
     this.value = value;
     this.next = next;
   }
}

class HashTable {
  constructor() {
    this.arr = new Array(Math.pow(10, 5));
    this.m = Math.pow(2, 32);
  }

  put(key, value) {
    const hashKey = this._calcKey(key);

    if (!this.arr[hashKey]) {
      this.arr[hashKey] = new Node({key, value});
    } else {
      const head = this.arr[hashKey];
      const newHead = new Node({key, value}, head);

      this.arr[hashKey] = newHead;
    }

  }

  get(key) {
    const hashKey = this._calcKey(key);

    return this._getKey(this.arr[hashKey], key);
  }

  delete(key) {
    const hashKey = this._calcKey(key);
    const [result, head] = this._removeKey(this.arr[hashKey], key);

    this.arr[hashKey] = head;

    return result;
  }

  _calcKey(key) {
    const s = 2654435769;
    const bucket =  (key % this.m) * s % Math.pow(2, 32);

    return bucket;
  }

  _getKey(head, key) {
    let currentNode = head;
    let result = null;

    while (currentNode) {
      if (currentNode.value.key === key) {
        result = currentNode.value;
        break;
      }

      currentNode = currentNode.next;
    }

    return !result ? 'None' : result.value;
  }

  _removeKey(head, key) {
    let prevNode = null;
    let currentNode = head;
    let newHead = null;

    while (currentNode) {
      if (currentNode.value.key === key) {
        if (!prevNode) {
          newHead = currentNode.next;
          prevNode = currentNode;
          break;
        } else {
          prevNode.next = currentNode.next;
          newHead = head;
          break;
        }
      } else {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }

    if (!currentNode) {
      return ['None', newHead];
    }

    return [prevNode.value.value, newHead];
  }
}

function solution(data) {
  const [count, ...commands] = data;
  const hashTable = new HashTable();
  let result = [];

  commands.forEach((command) => {
    if (command.includes('get')) {
      result.push(hashTable.get(command.split(' ')[1]));
    }

    if (command.includes('put')) {
      const [order, key, value] = command.split(' ');

      hashTable.put(key, value);
    }

    if (command.includes('delete')) {
      result.push(hashTable.delete(command.split(' ')[1]));
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
  console.log(solution(output_numbers));
})


console.log(solution(('100\n' +
  'put 265 701\n' +
  'get 265\n' +
  'get 265\n' +
  'get 265\n' +
  'get 544\n' +
  'get 265\n' +
  'get 265\n' +
  'get 265\n' +
  'delete 265\n' +
  'get 972\n' +
  'put 812 364\n' +
  'delete 498\n' +
  'delete 812\n' +
  'put 653 670\n' +
  'put 354 707\n' +
  'delete 653\n' +
  'get 354\n' +
  'get 354\n' +
  'put 354 380\n' +
  'put 354 405\n' +
  'delete 591\n' +
  'get 354\n' +
  'put 718 134\n' +
  'delete 440\n' +
  'delete 354\n' +
  'get 230\n' +
  'put 718 163\n' +
  'put 718 907\n' +
  'put 718 532\n' +
  'get 718\n' +
  'get 718\n' +
  'get 718\n' +
  'get 718\n' +
  'get 718\n' +
  'get 718\n' +
  'delete 70\n' +
  'delete 718\n' +
  'put 845 660\n' +
  'get 539\n' +
  'get 318\n' +
  'put 845 578\n' +
  'delete 845\n' +
  'put 534 872\n' +
  'put 5 342\n' +
  'delete 508\n' +
  'get 685\n' +
  'delete 534\n' +
  'get 5\n' +
  'get 5\n' +
  'get 5\n' +
  'put 5 438\n' +
  'put 656 435\n' +
  'delete 324\n' +
  'get 5\n' +
  'get 614\n' +
  'get 656\n' +
  'delete 656\n' +
  'put 5 540\n' +
  'get 5\n' +
  'put 114 843\n' +
  'put 223 310\n' +
  'put 114 34\n' +
  'get 5\n' +
  'delete 114\n' +
  'get 223\n' +
  'get 223\n' +
  'get 330\n' +
  'get 5\n' +
  'get 934\n' +
  'put 490 72\n' +
  'get 223\n' +
  'get 735\n' +
  'delete 5\n' +
  'delete 587\n' +
  'get 223\n' +
  'get 628\n' +
  'delete 490\n' +
  'put 223 267\n' +
  'get 381\n' +
  'get 171\n' +
  'put 536 887\n' +
  'delete 341\n' +
  'put 637 940\n' +
  'get 112\n' +
  'delete 536\n' +
  'put 637 154\n' +
  'put 460 3\n' +
  'put 223 282\n' +
  'get 223\n' +
  'get 637\n' +
  'put 637 158\n' +
  'delete 460\n' +
  'delete 784\n' +
  'get 637\n' +
  'get 586\n' +
  'get 223\n' +
  'get 5\n' +
  'delete 223\n' +
  'get 637\n' +
  'get 637').split('\n')));

