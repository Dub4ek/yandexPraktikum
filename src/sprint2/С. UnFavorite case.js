function solution (node) {
  let result = '';

  while(node != null) {
    result += node.value + '\n';
    node = node.next;
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