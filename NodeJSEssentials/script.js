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

// The FS Module

/*

All of the data on a computer is organized and accessed through a filesystem. When running 
JavaScript code on a browser, it’s important for a script to have only limited access to a user’s 
filesystem. This technique of isolating some applications from others is known as sandboxing. 
Sandboxing protects users from malicious programs and invasions of privacy.

In the back-end, however, less restricted interaction with the filesystem is essential. The Node 
fs core module is an API for interacting with the file system. It was modeled after the POSIX 
standard for interacting with the filesystem.

Each method available through the fs module has a synchronous version and an asynchronous version. 
One method available on the fs core module is the .readFile() method which reads data from a 
provided file:


*/

const fs = require('fs');

let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};

fs.readFile('./file.txt', 'utf-8', readDataCallback);

/*

Let’s walk through the example above:

We required in the fs core module.

We define an error-first callback function which expects an error to be passed as the first argument 
and data as the second. If the error is present, the function will print Something went wrong: 
${err}, otherwise, it will print Provided file contained: ${data}.

We invoked the .readFile() method with three arguments:

The first argument is a string that contains a path to the file file.txt.

The second argument is a string specifying the file’s character encoding 
(usually ‘utf-8’ for text files).

The third argument is the callback function to be invoked when the asynchronous task of 
reading from the file system is complete. Node will pass the contents of file.txt into the 
provided callback as its second argument.


*/

const fs = require('fs');

let secretWord = null;

let readDataCallback2 = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};

//fs.readFile('./fileOne.txt', 'utf-8', readDataCallback);
//fs.readFile('./anotherFile.txt', 'utf-8', readDataCallback);
fs.readFile('./finalFile.txt', 'utf-8', readDataCallback2);

secretWord = 'cheeseburgerpizzabagels';

// Readable Streams

/*

In the previous exercise, we practiced reading the contents of entire files into our JavaScript 
programs. In more realistic scenarios, data isn’t processed all at once but rather sequentially, 
piece by piece, in what is known as a stream. Streaming data is often preferable since you don’t 
need enough RAM to process all the data at once nor do you need to have all the data on hand to 
begin processing it.

One of the simplest uses of streams is reading and writing to files line-by-line. To read files 
line-by-line, we can use the .createInterface() method from the readline core module. 
.createInterface() returns an EventEmitter set up to emit 'line' events:


*/

const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('text.txt'),
});

myInterface.on('line', (fileLine) => {
  console.log(`The line read: ${fileLine}`);
});

/*

Let’s walk through the above code:

We require in the readline and fs core modules.

We assign to myInterface the returned value from invoking readline.createInterface() with an object 
containing our designated input.

We set our input to fs.createReadStream('text.txt') which will create a stream from the text.txt 
file.

Next we assign a listener callback to execute when line events are emitted. A 'line' event will be 
emitted after each line from the file is read.

Our listener callback will log to the console 'The line read: [fileLine]', where [fileLine] is the 
line just read.

Let’s practice making a readable stream.

*/

const readline = require('readline');
const fs = require('fs');

let settings = {
  input: fs.createReadStream('shoppingList.txt'),
};

const myInterface2 = readline.createInterface(settings);

const printData = (data) => {
  console.log(`Item: ${data}`);
};

myInterface2.on('line', printData);

// Writeable Streams

/*

In the previous exercise, we were reading data from a stream, but we can also write to streams! 
We can create a writeable stream to a file using the fs.createWriteStream() method:

*/

const fs = require('fs');

const fileStream = fs.createWriteStream('output.txt');

fileStream.write('This is the first line!');
fileStream.write('This is the second line!');
fileStream.end();

/*

In the code above, we set the output file as output.txt. Then we .write() lines to the file. 
Unlike a readable stream, which ends when it has no more data to read, a writable stream could 
remain open indefinitely. We can indicate the end of a writable stream with the .end() method.

Let’s combine our knowledge of readable and writable streams to create a program which reads from 
one text file and then writes to another.

*/

const readline = require('readline');
const fs = require('fs');

const myInterface3 = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt'),
});

const fileStream3 = fs.createWriteStream('shoppingResults.txt');

const transformData = (line) => {
  fileStream3.write(`They were out of: ${line}\n`);
  fileStream3.end();
};

myInterface3.on('line', transformData);

// Timer Module

/*

There are times when we want some of our code to be executed at a specified point in time. This is 
what the timers module is used for. Like the Buffer module, it is not necessary to use the require() 
import statement as the methods of the timer module are global.

You may already be familiar with some timer functions such as, setTimeout() and setInterval(). 
Timer functions in Node.js behave similarly to how they work in front-end JavaScript programs, but 
the difference is that they are added to the Node.js event loop. This means that the timer functions 
are scheduled and put into a queue. This queue is processed at every iteration of the event loop. 
If a timer function is executed outside of a module, the behavior will be random (non-deterministic).

The setImmediate() function is often compared with the setTimeout() function. When setImmediate() 
is called, it executes the specified callback function after the current (poll phase) is completed.
The method accepts two parameters: the callback function (required) and arguments for the callback 
function (optional). If you instantiate multiple setImmediate() functions, they will be queued for 
execution in the order that they were created.

*/

setImmediate(() => {
  console.log('Hello! My name is Codey.');
});

setImmediate(() => {
  console.log('I got called right away!');
});
