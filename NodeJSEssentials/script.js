'use strict';

// Introduction

/*

We will continue learning Node.js in this lesson by going into depth, covering modules essential 
to back-end development with Node.js. We’ll cover core Node.js modules such as events, error, buffer, 
fs, and timer modules. We will also learn how to get user input and output and create readable and 
writable streams. These topics will not only help you get a deeper understanding of Node.js but 
will also build on the topics that have been covered thus far.

*/

// The Events Module

/*

Node is often described as having event-driven architecture. Let’s explore what that means.

In traditional imperative programming, we give the computer a series of instructions to execute in 
a pre-defined order. In contrast, when we write web applications, we often need to write logic to 
handle situations without knowing exactly when they’ll occur. For example, when programming a 
website, we might provide functionality for a click event without knowing when a user will trigger 
it. When Node was created, it applied this same concept of event-driven principles to the back-end 
environment.

Node provides an EventEmitter class which we can access by requiring in the events core module:

*/

// Require in the 'events' core module
let events = require('events');

// Create an instance of the EventEmitter class
let myEmitter = new events.EventEmitter();

let newUserListener = (data) => {
  console.log(`We have a new user: ${data}.`);
};

// Assign the newUserListener function as the listener callback for 'new user' events
myEmitter.on('new user', newUserListener);

// Emit a 'new user' event
myEmitter.emit('new user', 'Lily Pad'); //newUserListener will be invoked with 'Lily Pad'

// Here we require in the 'events' module and save a reference to it in an events variable
let events = require('events');

let listenerCallback = (data) => {
  console.log('Celebrate ' + data);
};

let myEmitter2 = new events.EventEmitter();

myEmitter2.on('celebration', listenerCallback);

myEmitter2.emit('celebration', 'celebrate');

// User Input/Output

/*

If you’ve worked with JavaScript before, you’re likely familiar with the concept of input/output even if you haven’t 
heard it called that. At its most abstract, output is any data or feedback that a computer provides (like to a human 
  user), while input is data provided to the computer. When we use console.log() we prompt the computer to output 
  information to the console. In the Node environment, the console is the terminal, and the console.log() method is a 
  “thin wrapper” on the .stdout.write() method of the process object. stdout stands for standard output.

In Node, we can also receive input from a user through the terminal using the stdin.on() method on the process object:

*/

process.stdin.on('data', (userInput) => {
  let input = userInput.toString();
  console.log(input);
});

/*

Here, we were able to use .on() because under the hood process.stdin is an instance of EventEmitter. When a user 
enters text into the terminal and hits enter, a 'data' event will be fired and our anonymous listener callback will 
be invoked. The userInput we receive is an instance of the Node Buffer class, so we convert it to a string before 
printing.

*/

// The Error Module

/*

The Node environment’s error module has all the standard JavaScript errors such as EvalError, SyntaxError, RangeError, 
ReferenceError, TypeError, and URIError as well as the JavaScript Error class for creating new error instances. Within 
our own code, we can generate errors and throw them, and, with synchronous code in Node, we can use error handling 
techniques such as try...catch statements. Note that the error module is within the global scope—there is no need to 
import the module with the require() statement.

Many asynchronous Node APIs use error-first callback functions—callback functions which have an error as the first 
expected argument and the data as the second argument. If the asynchronous task results in an error, it will be 
passed in as the first argument to the callback function. If no error was thrown, the first argument will be 
undefined.

*/

const errorFirstCallback = (err, data) => {
  if (err) {
    console.log(`There WAS an error: ${err}`);
  } else {
    // err was falsy
    console.log(`There was NO error. Event data: ${data}`);
  }
};

// The Buffer Module

/*

In Node.js, the Buffer module is used to handle binary data. The Buffer module is within the global 
scope, which means that Buffer objects can be accessed anywhere in the environment without importing 
the module with require().

A Buffer object represents a fixed amount of memory that can’t be resized. Buffer objects are 
similar to an array of integers where each element in the array represents a byte of data. The 
buffer object will have a range of integers from 0 to 255 inclusive.

The Buffer module provides a variety of methods to handle the binary data such as .alloc(), 
.toString(), .from(), and .concat().

The .alloc() method creates a new Buffer object with the size specified as the first parameter. 
.alloc() accepts three arguments:

Size: Required. The size of the buffer
Fill: Optional. A value to fill the buffer with. Default is 0.
Encoding: Optional. Default is UTF-8.

*/

const buffer = Buffer.alloc(5);
console.log(buffer); // Ouput: [0, 0, 0, 0, 0]

/*

The .toString() method translates the Buffer object into a human-readable string. It accepts three 
optional arguments:

Encoding: Default is UTF-8.
Start: The byte offset to begin translating in the Buffer object. Default is 0.
End: The byte offset to end translating in the Buffer object. Default is the length of the buffer. 
The start and end of the buffer are similar to the start and end of an array, where the first 
element is 0 and increments upwards.

*/

const buffer2 = Buffer.alloc(5, 'a');
console.log(buffer2.toString()); // Output: aaaaa

/*

The .from() method is provided to create a new Buffer object from the specified string, array, or 
buffer. The method accepts two arguments:

Object: Required. An object to fill the buffer with.
Encoding: Optional. Default is UTF-8.


*/

const buffer3 = Buffer.from('hello');
console.log(buffer3); // Output: [104, 101, 108, 108, 111]

/*

The .concat() method joins all buffer objects passed in an array into one Buffer object. .concat() 
comes in handy because a Buffer object can’t be resized. This method accepts two arguments:

Array: Required. An array containing Buffer objects.
Length: Optional. Specifies the length of the concatenated buffer.

*/

const buffer4 = Buffer.from('hello'); // Output: [104, 101, 108, 108, 111]
const buffer5 = Buffer.from('world'); // Output:[119, 111, 114, 108, 100]
const array = [buffer4, buffer5];
const bufferConcat = Buffer.concat(array);

console.log(bufferConcat); // Output: [104, 101, 108, 108, 111, 119, 111, 114, 108, 100]

// Allocate buffer of size 15 filled with 'b'
const bufferAlloc = Buffer.alloc(15, 'b');

// Create buffer1 with 'hello' and buffer2 with 'world'
const buffer8 = Buffer.from('hello');
const buffer9 = Buffer.from('world');

// Combine buffer1 and buffer2
const bufferArray = [buffer8, buffer9];
const bufferConcat2 = Buffer.concat(bufferArray);

// Translate buffer to string
const bufferString = bufferConcat2.toString();

// Uncomment the appropriate `console.log()` to ouput to console
console.log(bufferAlloc);
console.log('Buffer 8:', buffer8, 'Buffer 9:', buffer9);
console.log(bufferConcat);
console.log(bufferString);
