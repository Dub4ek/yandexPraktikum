 /*
 //Comment it before submitting
 class CNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
*/

function solution(root) {
  let maxValue = findMaxValue(root, 0);

  function findMaxValue(node, maxValue) {
    if (node) {
      maxValue = maxValue < node.value ? node.value : maxValue;
      maxValue = findMaxValue(node.left, maxValue);
      maxValue = findMaxValue(node.right, maxValue);
    }

    return maxValue;
  }

  return maxValue;
}

function test() {
  var node1 = new CNode(1);
  var node2 = new CNode(-5);
  var node3 = new CNode(3);
  node3.left = node1;
  node3.right = node2;
  var node4 = new CNode(2);
  node4.left = node3;
  console.assert(solution(node4) === 3);
}

//test();