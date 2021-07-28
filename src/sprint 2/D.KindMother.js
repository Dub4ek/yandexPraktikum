// Comment it before submitting
/*class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}*/

function solution(node, value) {
  let count = 0;
  let currentNode = node;

  while(currentNode && currentNode.value !== value) {
    currentNode = currentNode.next;
    count += 1;
  }

  if (!currentNode) {
    count = -1;
  }

  return count;
}

/*
function test() {
   var node3 = new Node("node3");
   var node2 = new Node("node2", node3);
   var node1 = new Node("node1", node2);
   var node0 = new Node("node0", node1);
   var newHead = solution(node0, "node2");
   console.log(newHead)
   // result is idx == 2
 }

 test();*/
