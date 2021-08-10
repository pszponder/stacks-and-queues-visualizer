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
  - When the stack is initialized, `top` can be set as `undefined` (or -1) as there is no data in the stack upon initialization
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
  - Following LIFO, newer data is pushed on top of older data
- `pop`
  - This is the stack's delete method
  - Information is "popped" off (removed) of the stack
  - Following LIFO, newer data is popped off first
- `peek`
  - This method allows us to see which piece of data is on top of the stack
  - The method returns the value of the `top` property
  - If we know which data is on top of the stack, we also know which piece of data will be removed from the stack next when the `pop` method is called
- `isEmpty`
  - This method returns true if the stack is empty (there isn't any information stored in the stack) and returns false otherwise
  - We need to know when the stack is empty so that we don't try to pop off additional information from the stack
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
    - Resets `top` to be `undefined` (or -1)
    - Resets `size` to be 0

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
  - The `data` property is what actually holds all the pieces of data that the queue collects
  - `data` can be modeled as an array or using a linked list
  - If using an array to model the queue, `data` is an empty list when the queue is initialized
- `head`
  - This property either contains the value or a pointer to the value of the piece of data that is at the front of the queue
  - This data represents the oldest data inserted into the queue
  - When the queue is initialized, `head` can be set to 'undefined' (or -1) as there is no data in the queue upon initialization
- `tail`
  - This property either contains the value or a pointer to the value of the piece of data that is at the back of the queue
  - This data represents the newest data inserted into the queue
  - When the queue is initialized, `tail` can be set to `undefined` (or -1) as there is no data in the queue upon initialization
- `maxSize`
  - As with anything in computer science, memory is not unlimited
  - There are limits to how much memory a queue is allocated which directly affects how much data the queue can hold at one point
  - `maxSize` represents to maximum number of elements a particular queue can hold
- `size`
  - The `size` property holds the current number of elements (pieces of data) in the queue
  - When the queue is initialized, the `size` is 0

### Common Methods of a Queue:

- `enqueue`
  - This is the queue's insert method
  - Information is inserted into the stack at the "tail" (back) end of the queue
  - Following FIFO, newer data is pushed behind older data
- `dequeue`
  - This is the queue's delete method
  - Information is removed from the queue at the "head" (front) of the queue
  - Following FIFO, older data is removed first
- `getFront`
  - Unlike the peek method of the stack, queues have 2 methods to look at both ends of the queue for the first and last piece of information entered into the stack.
  - `getFront` is traditionally a pointer to the "head" (the front) of the queue
  - When this method is called, the value at the front of the queue is returned
  - Data at the front of the queue is the oldest data and will be next to be removed using the `dequeue` method.
- `getLast`
  - Unlike the peek method of the stack, queues have 2 methods to look at both ends of the queue for the first and last piece of information entered into the stack.
  - `getLast` is traditionally a pointer to the "tail" (the back) of the queue
  - When this method is called, the value at the back of the queue is returned
  - Data at the back of the queue is the newest data and is added by the `enqueue` method
  - This data needs to wait for all of the data in front of it before it can get dequeued
- `isEmpty`
  - This method returns true if the queue is empty (there isn't any information stored in the queue) and returns false otherwise
  - We need to know when the queue is empty so that we don't try to dequeue any additional information from the queue
    - If we do try to remove information from an empty queue, we should get a "queue underflow" error
- `isFull`
  - This is the opposite of the `isEmpty` method
  - This method returns true if the queue is full (maxSize has been reached) and returns false otherwise
  - We need to know when the queue is full so that we don't try to push on additional to the queue
    - If we try to add additional information onto a queue that is full, we should get a "queue overflow" error
- `length`
  - This method should return the total number of elements / pieces of data in the queue
- `clear`
  - This function resets the properties of the queue as if it were re-initialized as an empty queue
    - Resets `data` to be empty
    - Resets `head` to be `undefined` (or -1)
    - Resets `tail` to be `undefined` (or -1)
    - Resets `size` to be 0

### Where are Queues Used in the Real World?

- Call centers use queue systems to hold people calling them in order
- download and upload of information from a client and a server

## Big-O Analysis of a Stacks and Queues:

Stacks and queues are really meant just for storing, adding and removing pieces of data in a LIFO or FIFO order.
With that in mind, let's consider the basic functionality of a stack / queue and the associated Big-O time complexity.

`pop` and `dequeue`: (insertion)

- O(1)
- NOTE: for `dequeue`, if the queue is implemented using an array, you could end up with O(n) if you are shifting the indexes of all of the items in front of the newest value to remove data

`push` and `enqueue`: (removal)

- O(1)
- NOTE: for `enqueue`, if the queue is implemented using an array, you could end up with O(n) if you are shifting the indexes of all of the items in front of the newest value to insert data

`peek` and `getLast` or `getFirst`: (retrieving value at the front (or top) or the end of the stack/queue)

- O(1)

The speed at which we can search and access values in the stack or queue is dependent on how the data structures are implemented:

- If the stack or queue are implemented with an array, searching and access is O(1) since arrays are indexed.
- If the stack or queue are implemented with a linked list, searching and access is O(n) since you would have to traverse through each node in the linked list to get to the desired element.
- **NOTE**: Stacks are not designed to be searched for data other than what is currently at the top of the stack.

## References:

- [Stack Data Structure - GeeksforGeeks](https://www.geeksforgeeks.org/stack-data-structure/?ref=ghm)
- [Stack Data Structure](https://www.programiz.com/dsa/stack)
- [Queue Data Structure - GeeksforGeeks](https://www.geeksforgeeks.org/queue-data-structure/?ref=ghm)
- [Queue Data Structure](https://www.programiz.com/dsa/queue)
