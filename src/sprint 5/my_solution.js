
/* class CNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}*/

function solution(root) {
  return DFS(root) !== -1;
}

function DFS(root) {
  if (!root) {
    return 0;
  }
  let leftTreeHeight = DFS(root.left);

  if (leftTreeHeight === -1) {
    return -1;
  }

  let rightTreeHeight = DFS(root.right);

  if (rightTreeHeight === -1) {
    return -1;
  }

  if (Math.abs(leftTreeHeight - rightTreeHeight) > 1) {
    return -1;
  }

  return Math.max(leftTreeHeight, rightTreeHeight) + 1;
}

function test() {
  var node1 = new CNode(1);
  var node2 = new CNode(-5);
  var node3 = new CNode(3);
  node3.left = node1;
  node3.right = node2;
  var node4 = new CNode(10);
  var node5 = new CNode(2);
  node5.left = node3;
  node5.right = node4;
  console.assert(solution(node5));
}

//test();