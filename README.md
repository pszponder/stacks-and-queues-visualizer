# PURPOSE:

The purpose of this web application is to help the user understand what stacks and queues are and how they work.

## HOW TO USE THE APPLICATION:

## WHAT ARE DATA STRUCTURES:

Data structures are different ways to store and organize data. There are many different data structures, each with their own advantages and disadvantages.

## WHAT ARE STACKS AND QUEUES:

Stacks and queues are linear data structures which control the order of data going in and out of the stack and queue.

Data can only be inserted and removed in a particular order from one or both ends depending on if you are working with stacks or queues.

- You cannot insert data into the middle of a stack or a queue.

Unlike arrays, data inside stacks and queues is not indexed.

Stacks and queues can be modelled using arrays as a simplification but they are actually more accurately modeled as linked lists.

The only difference between stacks and queues is that stacks follow LIFO while queues follow FIFO.

## STACKS:

Stacks follow LIFO (Last In First Out) order of data.

- The last element inserted into a stack is the first to be removed
- Elements in a stack are inserted and deleted from the same side of the stack (the top)

You can conceptualize a stack by thinking about a stack of plates

- Plates are piled up one on top of another
- When someone wants to remove a plate, they remove the top-most plate, which was the last plate to be placed onto the stack.

Below is a list of properties and methods that a stack can contain. Keep in mind that really, in order to be considered a stack, the data structure needs 3 things at its core:

- A way to store the data
- A way to add new data to the stack (in a LIFO manner)
- A way to remove the data from the stack (in a LIFO manner)

**NOTE:** Before going into the next section, while `push`, `pop` and `peek` are very common names for the insert and delete methods for stacks respectively, the other variables and methods may not have a proper naming criterion. I will explain their functionality and purpose.

### Common Properties of a Stack:

- `data`
  - The `data` property is what actually holds all the pieces of data that the stack collects
  - `data` can be modeled as an array or using a linked list
  - If using an array to model the stack, `data` is an empty list when the stack is initialized
- `top`
  - This property either contains the value or a pointer to the value of the piece of data that is at the top of the stack
  - This data represents the most recent item appended to the stack which hasn't been removed
  - When the stack is initialized, `top` can be declared as `undefined` as there is no data in the stack upon initialization
- `maxSize`
  - As with anything in computer science, memory is not unlimited
  - There are limits to how much memory a stack is allocated which directly affects how much data the stack can hold at one point
  - `maxSize` represents to maximum number of elements a particular stack can hold
- `size`
  - The `size` property holds the current number of elements (pieces of data) in the stack
  - When the stack is initialized, the `size` is 0

### Common Methods of a Stack:

- `push`
  - This is the stack's insert method
  - Information is "pushed" onto the stack using this method
  - Following LIFO, newer information is pushed on top of older information
- `pop`
  - This is the stack's delete method
  - Information is "popped" off (removed) of the stack
  - Following LIFO, newer information is popped off first
- `peek`
  - This method allows us to see which piece of data is on top of the stack
  - The method returns the value of the `top` property
  - If we know which data is on top of the stack, we also know which piece of data will be removed from the stack next when the `pop` method is called
- `isEmpty`
  - This method returns true if the stack is empty (there isn't any information stored in the stack) and returns false otherwise
  - We need to know when the stack is empty so that we don't try to pop off additional information to the stack
    - If we do try to remove information from an empty stack, we should get a "stack underflow" error
- `isFull`
  - This is the opposite of the `isEmpty` method
  - This method returns true if the stack is full (maxSize has been reached) and returns false otherwise
  - We need to know when the stack is full so that we don't try to push on additional to the stack
    - If we try to add additional information onto a stack that is full, we should get a "stack overflow" error
- `length`
  - This method should return the total number of elements / pieces of data in the stack
- `clear`
  - This function resets the properties of the stack as if it were re-initialized as an empty stack
    - Resets `data` to be empty
    - Resets `top` to be `undefined`
    - Resets `size` to be 0

### Big-O Analysis of a Stack:

Stacks are really meant just for storing, adding and removing pieces of data in a LIFO order.
With that in mind, let's consider the basic functionality of a stack and the associated Big-O time complexity.

`pop`: (insertion)

- O(1)

`push`: (removal)

- O(1)

`peek`: (retrieving value of top value on stack)

- O(1)

The speed at which we can search and access values in the stack is dependent on how the stack is implemented:

- If the stack is implemented with an array, searching and access is O(1) since arrays are indexed.
- If the stack is implemented with a linked list, searching and access is O(n) since you would have to traverse through each node in the linked list to get to the desired element.
- **NOTE**: Stacks are not designed to be searched for data other than what is currently at the top of the stack.

### Where are Stacks Used in the Real World?

Here are some real-world examples of stacks:

- Undo / Redo functionality
- The `call stack` (where function calls are stored as they are called and resolved)

## QUEUES:

Queues follow FIFO (First In First Out) order of data.

- The first element inserted into a queue is the first to be removed from the queue.
- Elements which are inserted into the queue are inserted from the back of the queue (tail)
- Elements which are removed from the queue are removed from the front of the queue (head)

Conceptualize a queue as a group of people waiting in line for a concert

- The first person in line will be the first person to enter and get seats.
- The last person in line has to wait for all the other people in front of them before they can be admitted.

Below is a list of properties and methods that a queue can contain. Keep in mind that really, in order to be considered a queue, the data structure needs 3 things at its core:

- A way to store the data
- A way to add new data to the stack (in a FIFO manner)
- A way to remove the data from the stack (in a FIFO manner)

**NOTE:** Before going into the next section, while enqueue and dequeue are very common names for the insert and delete methods for queues respectively, the other variables and methods may not have a proper naming criterion. I will explain their functionality and purpose.

### Common Properties of a Queue:

- `data`
- `head`
- `tail`
- `size`

### Common Methods of a Queue:

- `enqueue`
- `dequeue`
- `getFront`
- `getLast`
- `length`
- `isEmpty`
- `isFull`
- `clear`

### Big-O Analysis of a Queue:

### Where are Queues Used in the Real World?

## References:

- [Stack Data Structure - GeeksforGeeks](https://www.geeksforgeeks.org/stack-data-structure/?ref=ghm)
- [Queue Data Structure - GeeksforGeeks](https://www.geeksforgeeks.org/queue-data-structure/?ref=ghm)
