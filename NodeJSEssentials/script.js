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
