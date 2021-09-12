
// Comment it before submitting
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}


function insert(node, key) {
  if (!node) {
    return new Node(key);
  }

  let currentNode = node;
  let parent = null;

  while(currentNode) {
    parent = currentNode;

    if (key >= parent.value) {
      currentNode = parent.right;
    } else {
      currentNode = parent.left;
    }
  }

  if (key >= parent.value) {
    parent.rigth = new Node(key);
  } else {
    parent.left = new Node(key);
  }

  return node;
}

function test() {
  var node1 = new Node(7, null, null);
  var node2 = new Node(8, node1, null);
  var node3 = new Node(7, null, node2);
  var newHead = insert(node3, 6);
  console.assert(newHead === node3);
  console.assert(newHead.left.value === 6);
  console.log(newHead)
}

test();