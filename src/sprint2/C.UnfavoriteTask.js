
// Comment it before submitting
/*class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}*/

function solution(node, idx) {
  let count = 0;
  let currentNode = node;
  let prevNode = null;

  while(count < idx) {
    prevNode = currentNode;
    currentNode = currentNode.next;
    count += 1;
  }

  if (prevNode !== null && currentNode) {
    prevNode.next = currentNode.next;

    return node;
  }

  return currentNode.next;
}

/* function test() {
   var node3 = new Node("node3");
   var node2 = new Node("node2", node3);
   var node1 = new Node("node1", node2);
   var node0 = new Node("node0", node1);
   var newHead = solution(node0, 0);
   console.log(newHead)
   // result is node0 -> node2 -> node3
 }

 test();*/
