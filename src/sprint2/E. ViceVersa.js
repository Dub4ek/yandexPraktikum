// Comment it before submitting
/*class Node {
  constructor(value = null, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}*/

function solution(head) {
  let currentNode = head;
  let prevNode;

  while (currentNode) {
    const nextNode = currentNode.next;
    currentNode.next = currentNode.prev;
    currentNode.prev = currentNode.next;

    if (!nextNode) {
      prevNode = currentNode;
    }

    currentNode = nextNode;
  }

  return prevNode;
}


/*function test() {
   var node3 = new Node("node3");
   var node2 = new Node("node2", node3);
   var node1 = new Node("node1", node2);
   var node0 = new Node("node0", node1);

   node1.prev = node0;
   node2.prev = node1;
   node3.prev = node2;
   var newHead = solution(node0);
   console.log(printList(newHead))
   // result is idx == 2
 }

function printList(node) {
  let result = '';
  let currentNode = node;

  while(currentNode) {
    result += currentNode.value + '\n';
    currentNode = currentNode.next;
  }

  return result;
}

test();*/
