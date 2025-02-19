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
    // If the tree is empty/null, set newNode as root node and return tree
    if(!this.root){
      this.root = newNode;
      return this;
    }
    // If the tree is not empty, iterate/traverse it
    let current = this.root;

    while(true){
      // If val is less than current node's value, move to left subtree
      if(val < current.val){
        // If there is no left subtree, insert new node and return tree
        if(!current.left) {
          current.left = newNode;
          return this;
        }
        // If there is a left subtree, move to the subtree and repeat loop
        current = current.left;
      } else{
        // If val is greater than current node's value, move to right subtree
        if (!current.right){
          // If there is no right subtree, insert new node and return tree
          current.right = newNode;
          return this;
        }
        // If there is a left subtree, move to the subtree and repeat loop
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    //inserNode function
    const insertNode = (node, val) => {
      let newNode = new Node(val);
      // If current node is null, return newNode 
      if (!node) return newNode;
      // If val is less than current node, check the left subtree. Continue this until null spot is found.
      if (val < node.val){
        node.left = insertNode(node.left, val);
      } 
      // If val is greater than current node, check the right subtree. Continue this until null spot is found.
      else if(val > node.val){
        node.right = insertNode(node.right, val);
      }
    // return current node after inserting the new node.
    return node;
    };
    // Start the insertion
    this.root = insertNode(this.root, val);
    //Return the tree
    return this;
  }


  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    // If tree has not root, retun undefined
    if(!this.root) return undefined;

    let current = this.root;
    //While current node is not null, iterate 
    while(current){
      // If current node's value matches the target value return current node
      if(val === current.val){
        return current;
      } 
      // If the val is less than the value of the current node, move to the left subtree
        else if(val < current.val){
        current = current.left;
      }
        // If the val is greater than the value of the current node, move to the right subtree
        else{
        current = current.right;
      }
    }
    // If val is not found, return undefined
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    const search = (node) => { 
      // If the node is empty, return undefined
      if(!node) return undefined;
      // If the current node mathes the target val, return node
      if (val === node.val) return node;
      // If the val is less than target val, search left subtree, else, search right subtree
      return val < node.val ? search(node.left) : search(node.right);
    }
    // Run the search function from the root
    return search(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
      const result = []
      const traverse = (node) => {
        // If node is null, stop
        if (!node) return;

        // Push current node to result array.
        result.push(node.val);
        // Traverse the left subtree and right subtree
        traverse(node.left);
        traverse(node.right);
    }
      // Run traverse function from the root
      traverse(this.root);

      return result;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const result = []
      const traverse = (node) => {
        // If node is null, stop
        if(!node) return;

        // Traverse the left subtree
        traverse(node.left);
        // Push current node to result array.
        result.push(node.val)
        // Traverse the right subtree
        traverse(node.right);
      }
      // Run traverse function from the root
      traverse(this.root);

      return result;
  }  

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let result = [];

    const traverse = (node) => {
      // If node is null, stop
      if (!node) return;
      // Traverse the left subtree
      traverse(node.left);
      // Traverse the right subtree
      traverse(node.right);
      // Push current node to result array.
      result.push(node.val);
    }
    // Run traverse function from the root
    traverse(this.root);
    return result;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let result = [];
    let queue = [];

    // If the tree has a root, add it to queue array
    if(this.root){
      queue.push(this.root);
    }
    //
    while(queue.length){
      // Remove first node from queue array and push it to result array
      let node = queue.shift();
      result.push(node.val);

      //If the current node has left subtree, add it to queue
      if(node.left) queue.push(node.left)
      //If the current node has right subtree, add it to queue
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
