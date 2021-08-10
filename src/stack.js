// Initialize Stack class
class Stack {
  // Declare private instance members using "#"
  #array;
  #top;
  #maxSize;
  #size;

  // Initialize constructor function for Stack class
  constructor() {
    this.#array = []; // Initialize empty array to store values for Stack class
    this.#top = -1; // Initialize top parameter which is the last value added to the stack
    this.#maxSize = 10; // Initialize a max size of the stack (can't have more than maxSize elements in stack)
    this.#size = 0; // Initialize size of stack, it is 0 initially since it is empty
  }

  // Initialize the push instance method
  // This function will insert a new value on the top of the stack
  // push takes in one or more arguments
  // returns the stack object
  push(...args) {
    // Iterate through each argument and insert it onto the stack
    for (const element of args) {
      // Check if stack is full
      // if it has, throw a stack overflow error
      if (this.isFull()) {
        throw new Error("Stack Overflow: Cannot push more values onto stack.");
      }

      // Insert element into the stack
      this.#array.push(element);

      // Update value of top parameter
      this.#top = element;

      // Increment the value of size
      this.#size++;
    }
    return this;
  }

  // Initialize the pop instance method
  // This function will remove the value at the top of the stack
  // returns the stack object
  pop() {
    // Check if stack is empty
    // if it is, throw a stack underflow error
    if (this.isEmpty()) {
      throw new Error(
        "Stack Underflow: Cannot remove additional values from stack"
      );
    }

    // Remove the top most element in the stack
    this.#array.pop();

    // Update the value of size
    this.#size--;

    // Update the value of top parameter
    if (this.#size === 0) {
      // If no elements in the stack, reset top to -1
      this.#top = -1;
    } else {
      // Otherwise, update top to represent the current value at the top of the stack
      this.#top = this.#array[this.#size - 1];
    }

    return this;
  }

  // Initialize the peek instance method
  // This function will return the value at the top of the stack
  peek() {
    return this.#top;
  }

  // Initialize the length instance method
  // returns the number of values in the stack
  length() {
    return this.#size;
  }

  // Initialize the isEmpty instance method
  // returns true if there aren't any elements in the stack
  // returns false otherwise
  isEmpty() {
    if (this.#size === 0) return true;
    return false;
  }

  // Initialize the isFull instance method
  // return true of size of stack is equal to maxSize
  // return false otherwise
  isFull() {
    if (this.#size === this.#maxSize) return true;
    return false;
  }

  // Initialize the print instance method
  // print is a utility function which prints the properties of the stack instance
  print() {
    console.log("Stack:", this.#array);
    console.log("Top:", this.#top);
    console.log("Size:", this.#size);
    console.log("maxSize:", this.#maxSize);
  }

  // Add a clear instance method which resets the stack;
  clear() {
    this.#array = [];
    this.#size = 0;
    this.#top = -1;
  }
}
