function solution (node) {
  let result = '';
  let currentNode = node;

  while(currentNode != null) {
    result += currentNode.value + '\n';
    currentNode = currentNode.next;
  }

  return result;
};

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
};
const c = new Node('Test', );
const b = new Node('Testb', c);
const a = new Node('Head', b);


console.log(solution(a))