/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  get(idx) {
    let current = this.first;
    let count = 0;

    while (current !== null && count !== idx) {
      count++;
      current = current.next
    }

    return current;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);
    
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
    } else if (this.size === 1) {
      let currentNode = this.first;
      currentNode.next = newNode;
      this.last = newNode;
      this.size++;
    } else {
      let currentNode = this.get(this.size-1);
      currentNode.next = newNode;
      this.last = newNode;
      this.size++;
    }


  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) {
      throw new Error("Queue is empty");
    } else if (this.size === 1) {
      let currentNode = this.first;
      this.first = null;
      this.last = null;
      this.size--;
      return currentNode.val;
    } else {
      let currentNode = this.first;
      this.first = currentNode.next;
      this.size--;
      return currentNode.val;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if(this.size === 0){
      throw new Error("Queue is empty");
    } else {
      let currentNode = this.first;
      return currentNode.val;
    }
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Queue;
