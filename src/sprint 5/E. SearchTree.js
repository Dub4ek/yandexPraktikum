
 /*Comment it before submitting*/
 class CNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

 function solution(root) {
   const isValidBST = (
     root,
     min = Number.MIN_SAFE_INTEGER,
     max = Number.MAX_SAFE_INTEGER
   ) => {
     if (root == null) return true;
     if (root.value >= max || root.value <= min) return false;
     return (
       isValidBST(root.left, min, root.value) &&
       isValidBST(root.right, root.value, max)
     );
   };

   return isValidBST(root)
 }

function test() {
  var node1 = new CNode(1, null, null);
  var node2 = new CNode(4, null, null);
  var node3 = new CNode(3, node1, node2);
  var node4 = new CNode(8, null, null);
  var node5 = new CNode(5, node3, node4);
  console.log(solution(node5));
  node4.value = 5;
  console.log(solution(node5));
}

test();