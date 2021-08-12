//52321499
/**
 * ПРИНЦИП РАБОТЫ
 * Строим хеш таблицу для целых чисел использую метод цепочек для работы с коллизиями.
 *
 * ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ
 * За счет использования связного списка то доступ до элемента будет происходить за O(n). Индекс в таблице вычисляется по модулю числа 2^32 и из-за максимального значения числа 10:6 - мы можем предположить, что число корзин будет не более 2^32.
 *
 * ВРЕМЕННАЯ СЛОЖНОСТЬ
 * Доступ до элементов осуществляешься за время поиска элемента в связном списке, поэтому O(n). Операции удаления и вставки так же за время O(n) из-за манипуляций со списком
 */

class Node {
   constructor(value = null, next = null) {
     this.value = value;
     this.next = next;
   }
}

class HashTable {
  constructor() {
    this.arr = new Array(Math.pow(10, 6));
    this.m = Math.pow(2, 32);
    this.hashConst = 2654435769;
  }

  put(key, value) {
    const hashKey = this._calcKey(key);

    if (!this.arr[hashKey]) {
      this.arr[hashKey] = new Node({key, value});
    } else {
      const head = this.arr[hashKey];

      const newHead = this._insertKey(head, key, value);
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
    const bucket = (key % this.m) * this.hashConst % Math.pow(2, 32);

    return bucket;
  }

  _insertKey(head, key, value) {
    let currentNode = head;
    let newHead = head;

    while(currentNode) {
      if (currentNode.value.key === key) {
        currentNode.value.value = value;
        break;
      }

      currentNode = currentNode.next;
    }

    if (!currentNode) {
      newHead = new Node({key, value}, head);
    }

    return newHead;
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
  const currentCommands = commands.slice(0, parseInt(count));

  currentCommands.forEach((command) => {
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


/*console.log(solution(('10\n' +
  'get 1\n' +
  'put 1 10\n' +
  'put 2 4\n' +
  'get 1\n' +
  'get 2\n' +
  'delete 2\n' +
  'get 2\n' +
  'put 1 5\n' +
  'get 1\n' +
  'delete 2\n').split('\n')));*/

