// Initialize Queue class
class Queue {
  // Declare private instance members using "#"
  #array;
  #head;
  #tail;
  #maxSize;
  #size;

  // Initialize constructor function for Queue class
  constructor() {
    this.#array = []; // Initialize empty array to store values for Queue class
    this.#head = -1; // Initialize head parameter (item added first in the queue), points to right most element in queue
    this.#tail = -1; // Initialize tail parameter (item added most recently to the queue), points to left most element in queue
    this.#maxSize = 10; // Initialize a max size of the queue (can't have more than maxSize elements in queue)
    this.#size = 0; // Initialize size of queue, it is 0 initially since it is empty
  }

  // Initialize enqueue instance method
  // This function will insert a new value into the queue
  // enqueue takes in one or more arguments
  // returns the queue object
  // NOTE: In this implementation, the queue will be grown from left to right
  // So elements in the queue will be inserted on the left side of the queue and removed on the right side of the queue
  enqueue(...args) {
    // Iterate through each argument and insert it onto the queue
    for (const element of args) {
      // Check if queue is full
      // if it has, throw a queue overflow error
      if (this.isFull()) {
        throw new Error(
          "Queue Overflow: Cannot enqueue more values onto queue."
        );
      }

      // Insert element into the queue
      this.#array.unshift(element);

      // Increment the value of size
      this.#size++;

      // Update values of head and tail parameters
      if (this.#size === 1) {
        // If one element in the queue, both head and tail point to the same element
        this.#tail = element;
        this.#head = element;
      } else {
        // If more than one element in the queue, only update the tail with newly added value
        this.#tail = element;
      }
    }
    return this;
  }

  // Initialize dequeue instance method
  // This function will remove the value at the head of the queue
  // returns the queue object
  dequeue() {
    // Check if queue is empty
    // If it is, throw a queue underflow error
    if (this.isEmpty()) {
      throw new Error("Queue Underflow: Cannot dequeue more values from queue");
    }

    // Remove element from queue (this will be at the head)
    this.#array.pop();

    // Decrement size parameter
    this.#size--;

    // Update value of head and tail parameters appropriately
    if (this.#size === 0) {
      // If size is 0 (empty queue), reset head and tail parameters
      this.#head = -1;
      this.#tail = -1;
    } else if (this.#size === 1) {
      // If size is 1, make sure head and tail point to same element in queue
      this.#head = this.#tail;
    } else {
      // Otherwise, update the head parameter only
      this.#head = this.#array[this.#size - 1];
    }

    return this;
  }

  // Initialize getFront instance method
  // This method returns the value at the front of the queue (the head)
  getFront() {
    return this.#head;
  }

  // Initialize getBack instance method
  // This method returns the value at the back of the queue (the tail)
  getBack() {
    return this.#tail;
  }

  // Initialize isEmpty instance method
  // Returns true if the queue is empty, returns false otherwise
  isEmpty() {
    if (this.#size === 0) return true;
    return false;
  }

  // Initialize isFull instance method
  // Returns true if the queue is full, returns false otherwise
  isFull() {
    if (this.#size === this.#maxSize) return true;
    return false;
  }

  // Initialize length instance method
  // Returns the length of the queue
  length() {
    return this.#size;
  }

  // Initialize print instance method
  // print is a utility function which prints the properties of the queue instance
  print() {
    console.log("Queue:", this.#array);
    console.log("Head:", this.#head);
    console.log("Tail:", this.#tail);
    console.log("Size:", this.#size);
    console.log("maxSize:", this.#maxSize);
  }

  // Initialize clear instance method which resets the queue
  clear() {
    this.#array = [];
    this.#size = 0;
    this.#head = -1;
    this.#tail = -1;
  }
}

// Testing
const q = new Queue();
q.print();
console.log(q.length());
console.log(q.isFull());
console.log(q.isEmpty());
q.enqueue("first").enqueue("second").enqueue("third");
q.print();
q.enqueue(4, 5, 6, 7, 8, 9, 10);
q.print();
// q.enqueue("hi"); // Throws error
q.dequeue();
q.print();
q.dequeue().dequeue().dequeue();
q.print();
console.log(q.getFront());
console.log(q.getBack());
q.clear();
q.print();
