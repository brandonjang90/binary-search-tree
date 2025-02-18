class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    if(!this.root){
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while(true){
      if(val < current.val){
        if(!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else{
        if (!current.right){
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let newNode = new Node(val);
    
    if(!this.root){
      this.root = newNode;
      return this;
    }

    const recursive = (node) => {
      if(val < node.val){
        if(!node.left){
          node.left = newNode;
          return;
        }
        recursive(node.left);
      } else {
      if(!node.right){
        node.right = newNode;
        } else{
        recursive(node.right);
        }
      }
    }
    recursive(this.root);
    return this;
  }


  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if(!this.root) return undefined;

    let current = this.root;

    while(current){
      if(val === current.val){
        return current;
      } else if(val < current.val){
        current = current.left;
      }else{
        current = current.right;
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    const search = (node) => { 
      if(!node) return undefined;
      if (val === node.val) return node;
      return val < node.val ? search(node.left) : search(node.right);
    }
    return search(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
      const visitedNodes = []
      const traverse = (node) => {
        if (!node) return;

        visitedNodes.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }
      traverse(this.root);
      return visitedNodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const visitedNodes = []
      traverse = (node) => {
        if(!node) return;

        traverse(node.left);
        visitedNodes.push(node.val)
        traverse(node.right);
      }
      traverse(this.root);
      return visitedNodes;
  }  

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let result = [];

    const traverse = (node) => {
      if (!node) return;
      traverse(node.left);
      traverse(node.right);
      result.push(node.val);
    }

    traverse(this.root);
    return result;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let result = [];
    let queue = [];

    if(this.root){
      queue.push(this.root);
    }

    while(queue.length){
      let node = queue.shift();
      result.push(node.val);

      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    return result;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
