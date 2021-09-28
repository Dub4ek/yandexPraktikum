class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  add(value) {
    let index = this.heap.length;
    this.heap[index] = value;
    this.siftUp(index);
  }

  siftUp(idx) {
    let currentIdx = idx;

    while (currentIdx > 1 && this.heap[currentIdx] > this.heap[currentIdx / 2]) {
      let temp = this.heap[currentIdx];
      this.heap[currentIdx] = this.heap[currentIdx / 2]
      this.heap[currentIdx / 2] = temp;
      currentIdx /= 2;
    }

    return currentIdx;
  }

  pop() {
    let result = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.length -= 1;
    this.siftDown(1);

    return result;
  }

  siftDown(index) {
    let n = this.heap.length;
    let left = 2 * index;
    let right = left + 1;

    while(left < n) {
      if (this.heap[index] > this.heap[left] && (right === n || this.heap[index] > this.heap[right])) {
        break;
      }

      if (right == n || this.heap[left] > this.heap[right]) {
        this._swap(index, left, this.heap);
        index = left;
      } else {
        this._swap(index, right, this.heap);
        index = right;
      }

      left = 2 * index;
      right = left + 1;
    }

    return index;
  }

  _swap(index1, index2, collection) {
    let temp = collection[index1];
    collection[index1] = collection[index2];
    collection[index2] = temp;
  }
}


function solution(n, open = 0, close = 0) {

}

var readline = require('readline');
var io_interface = readline.createInterface({input: process.stdin});

let output_numbers = [];
io_interface.on('line', function (line) {
  output_numbers.push(line);
})

io_interface.on('close', function () {
  console.log(solution(output_numbers[0]));
  //process.stdout.write(solution(output_numbers));
})

//console.log(solution(('15').split('\n')));