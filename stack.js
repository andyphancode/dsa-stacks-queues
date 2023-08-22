/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);
    
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
    } else {
      let currentNode = this.first;
      newNode.next = currentNode;
      this.first = newNode;
      this.size++;
    } 
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) {
      throw new Error("Stack is empty");
    } else if (this.size === 1) {
      let currentNode = this.first;
      this.first=null;
      this.last=null;
      this.size--;
      return currentNode.val;
    } else {
      let currentNode = this.first;
      this.first = this.first.next;
      this.size--;
      return currentNode.val;
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if(this.size === 0){
      throw new Error("Stack is empty");
    } else {
      let currentNode = this.first;
      return currentNode.val;
    }
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack;
