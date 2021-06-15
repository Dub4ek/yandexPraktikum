
// Comment it before submitting
/*class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
} */

function solution(node, idx) {
  let currentNode = node;
  let prevNode = null;

  while(currentNode?.value != idx) {
    prevNode = currentNode;
    currentNode = currentNode?.next;
  }

  if (prevNode !== null) {
    prevNode.next = currentNode?.next;
  }

  console.log(node);
}

// function test() {
//   var node3 = new Node("node3");
//   var node2 = new Node("node2", node3);
//   var node1 = new Node("node1", node2);
//   var node0 = new Node("node0", node1);
//   var newHead = solution(node0, 1);
//   // result is node0 -> node2 -> node3
// }