/*

 //Comment it before submitting
 class CNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
*/



function solution(root) {
  if (!root) {
    return 0;
  }

  return Math.max(solution(root.left), solution(root.right)) + 1;
}

function test() {
  var node1 = new CNode(1, null, null);
  var node2 = new CNode(4, null, null);
  var node3 = new CNode(3, node1, node2);
  var node4 = new CNode(8, null, null);
  var node5 = new CNode(5, node3, node4);
  console.assert(solution(node5) === 3);
}

//test();