'use strict';

// Introduction To Node.JS

/*

For a long time, the browser was the only place JavaScript code could be executed. 
Web developers had to use a different programming language on the front-end than the back-end. 
It also meant that, even as JavaScript evolved into a more robust and powerful language, 
it remained a front-end only language.

Though multiple attempts to create off-browser JavaScript environments have been attempted, 
Node.js, invented by Ryan Dahl in 2009, found unprecedented popularity and is currently being 
used by numerous top-tier companies including Netflix, Uber, Paypal, and eBay. Node.js is a 
JavaScript runtime, or an environment that allows us to execute JavaScript code outside of the 
browser. A “runtime” converts code written in a high-level, human-readable, programming language 
and compiles it down to code the computer can execute.

Though Node was created with the goal of building web servers and web applications in JavaScript, 
it can also be used for creating command-line applications or desktop applications. In this lesson,
we’ll explore some features of Node so you start to feel comfortable with running JavaScript in the 
Node environment and gain some familiarity with features unique to Node. For more advanced 
development, Node can be combined with any number of robust frameworks like the Express.js 
framework for creating effective web application back-ends.

There’s more to learn about Node than we could ever fit in one lesson. We’ll try to point to great 
resources like MDN and the Node.js documentation. Take your time exploring and use the documentation.

*/

// The Node REPL

/*

REPL is an abbreviation for read–eval–print loop. It’s a program that loops, or repeatedly cycles, 
through three different states: a read state where the program reads input from a user, the eval 
state where the program evaluates the user’s input, and the print state where the program prints 
out its evaluation to a console. Then it loops through these states again.

When you install Node, it comes with a built-in JavaScript REPL. You can access the REPL by typing 
the command node (with nothing after it) into the terminal and hitting enter. A > character will 
show up in the terminal, indicating the REPL is running and prompting your input. The Node REPL 
will evaluate your input line by line.

By default, you indicate the input is ready for eval when you hit enter. If you’d like to type 
multiple lines and then have them evaluated at once, you can type .editor while in the REPL. 
Once in “editor” mode, you can type control + d when you’re ready for the input to be evaluated. 
Each session of the REPL has a single shared memory; you can access any variables or functions 
you define until you exit the REPL.

A REPL can be extremely useful for performing calculations, learning a language, and developing 
code. It’s a place where you can explore language features and try things out while receiving 
immediate feedback. Figuring out how to do this outside of the browser or a website can be really 
empowering.

The Node environment contains a number of Node-specific global elements in addition to those built 
into the JavaScript language. Every Node-specific global property sits inside the the Node global 
object. This object contains a number of useful properties and methods that are available anywhere 
in the Node environment.

Let’s try out the Node REPL. This will be a good way for you to explore the Node global object!

*/

// Running a Program with Node

/*

Node was designed with server-side web development in mind and has a lot of thoughtful functionality 
towards that end. At its most simple, however, it provides the ability to run JavaScript programs 
on our own computers instead of just in the browser’s console or embedded in HTML.

In this lesson, we’ll explore some of the functionality and properties specific to the Node 
environment, but first, let’s see how we run a program.

We’ll need to create a file with a .js extension. We’ll call ours myProgram.js. Next, we’ll open 
that file with a text editor and add our code:

*/

/*

Inside myProgram.js
console.log('Hello World');

*/

/*

Our code is complete! Now, we want to execute it. We’ll open our terminal and navigate to the 
directory that contains myProgram.js. Finally, we’ll type the command node myProgram.js into our 
terminal.

*/

/*

$ node myProgram.js

*/

/*

The results of our program will print to the terminal.
Hello World


*/

let noun1 = 'Apartment';
let adjective = 'Silly';
let noun2 = 'Promotion';
let verb = 'Run';
let noun3 = 'Programming';

console.log(
  `The world's first ${noun1} was a very ${adjective} ${noun2} who loved to ${verb} while eating ${noun3} for every meal.`
);

// Core Modules

/*

Core Modules
Modularity is a software design technique where one program has distinct parts, each providing a 
single piece of the overall functionality. These separate modules come together to build a cohesive 
whole. Modularity is essential for creating scalable programs which incorporate libraries and 
frameworks and separate the program’s concerns into manageable chunks. Essentially, a module is a 
collection of code located in a file. Instead of having an entire program located in a single file, 
code is organized into separate files based on the concerns they address. These files can then be 
included in other files by using the require() function.

To save developers from reinventing the wheel each time, Node.js has several built-in modules to 
perform common tasks efficiently. These are known as the core modules. The core modules are defined 
within Node.js’s source code and are located in the lib/ folder. Core modules can be required by 
passing a string with the name of the module into the require() function:

*/

// Require in the 'events' core module:
const events = require('events');

/*

The example above shows how the events module is required into a file and stored in an events 
variable. Understanding the specifics of this module isn’t necessary at this point, but the events 
module is a Node.js core module that provides key functions for working with, well… events. You’ll 
learn more about it in a later lesson.

Some core modules are actually used inside other core modules. For instance, the util module can be 
used in the console module to format messages. We’ll cover these two modules in this lesson, as 
well as two other commonly used core modules: process and os.

Node.js has several core modules, far too many to cover in this lesson. We’ll learn how to get the 
full list and then dive deeper into the aforementioned modules throughout the next few exercises.

*/

/*

$node

require('module').builtinModules


*/

// The Console Module

/*

One of the most commonly used Node.js core modules is the console module. In Node.js, the terminal 
is used to send and receive text feedback to and from a program, often for debugging purposes. This 
may sound familiar to how we use the console in the web browser. That’s because in Node.js, the 
built-in console module exports a global console object that gives the terminal similar 
functionality. The console object provides many of the same familiar methods such as:

.log() — to print messages to the terminal.
.assert() — to print a message to the terminal if the value is falsy.
.table() — to print out a table in the terminal from an object or array.

Since console is a global module, its methods can be accessed from anywhere, and the require() 
function is not necessary.

*/

const petsArray = ['dog', 'cat', 'bird', 'monkey'];

// Add console methods below!
console.log(petsArray);

console.table(petsArray);

console.assert(petsArray.length > 5);

// The Process Module

/*

n computer science, a process is the instance of a computer program that is being executed. You can 
open Task Manager if you’re on a Windows machine or Activity Monitor from a Mac to see information 
about the various processes running on your computer right now. Node has a global process object 
with useful methods and information about the current process.

The process.env property is an object which stores and controls information about the environment 
in which the process is currently running. For example, the process.env object contains a PWD 
property which holds a string with the directory in which the current process is located. It can 
be useful to have some if/else logic in a program depending on the current environment— a web 
application in a development phase might perform different tasks than when it’s live to users. We 
could store this information on the process.env. One convention is to add a property to process.env 
with the key NODE_ENV and a value of either production or development.

*/

if (process.env.NODE_ENV === 'development') {
  console.log('Testing! Testing! Does everything work?');
}

/*

The process.memoryUsage() returns information on the CPU demands of the current process. It returns 
a property that looks similar to this:

*/

/*

{ rss: 26247168,
  heapTotal: 5767168,
  heapUsed: 3573032,
  external: 8772 }

*/

/*
  
Heap can mean different things in different contexts: a heap can refer to a specific data structure, 
but it can also refer to a block of computer memory. The process.memoryUsage().heapUsed method will 
return a number representing how many bytes of memory the current process is using.

The process.argv property holds an array of command line values provided when the current process 
was initiated. The first element in the array is the absolute path to Node, which ran the process. 
The second element in the array is the path to the file that’s running. The following elements will 
be any command line arguments provided when the process was initiated. Command line arguments are 
separated from one another with spaces.
  

We’ve only covered a few of the properties of the process object, so make sure to check out the 
documentation on the process object to learn more about it and explore some of its other methods 
and properties.

Let’s get some practice using the process object!


  */

let initialMemory = process.memoryUsage().heapUsed;
let word = process.argv[2];

console.log(`Your word is ${word}`);

// Create a new array
let wordArray = [];

// Loop 1000 times, pushing into the array each time
for (let i = 0; i < 1000; i++) {
  wordArray.push(`${word} count: ${i}`);
}

console.log(
  `Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${
    process.memoryUsage().heapUsed
  }. \nAfter using the loop to add elements to the array, the process is using ${
    process.memoryUsage().heapUsed - initialMemory
  } more bytes of memory.`
);

// The OS Module

/*

When developing or debugging an app, it can be helpful to have information about the computer, 
operating system, and network on which the program is running. Before Node, this information could 
not be retrieved using JavaScript due to the language being confined to the browser. However, 
Node.js is a JavaScript runtime, which means it can execute code outside of the browser, and we’re 
able to get access to much of this information through the os core module.

Unlike process and console, the os module is not global and needs to be included into the file in
order to gain access to its methods. You can include the os module into your file by typing:

*/

//const os = require('os');

/*

With the os module saved to the os variable, you can call methods like:

os.type() — to return the computer’s operating system.
os.arch() — to return the operating system CPU architecture.
os.networkInterfaces() — to return information about the network interfaces of the computer, 
such as IP and MAC address.
os.homedir() — to return the current user’s home directory.
os.hostname() — to return the hostname of the operating system.
os.uptime() — to return the system uptime, in seconds.
Let’s take a look at an example:

*/

const os = require('os');

const local = {
  'Home Directory': os.homedir(),
  'Operating System': os.type(),
  'Last Reboot': os.uptime(),
};

console.log(local);

/*

In the above example code, we first require the os module and store it in a variable, os. Below 
that, we have an object, local, that will hold some information about the user’s computer: the name 
of the home directory, the type of operating system, and the time since the computer was last 
rebooted.

*/

/*

{
  'Home Directory': '/Users/luca',
  'Operating System': 'Darwin',
  'Time since reboot': 86997
}

*/

/*

When we run the program, the local object stores all the requested information:

the user’s home directory — '/Users/luca',
the operating system — 'Darwin' (Darwin is the underlying operating system of macOS.),
and the time since the computer was last rebooted — 86997 seconds.
Feel free to try running some of the os module methods on your own computer to get more information 
about the hardware, OS, and network you’re on!

Note that in the exercises below, the os module will return information from the learning 
environment hosted by Codecademy, and not your local computer.

*/

const os = require('os');

const server = {
  type: os.type(),
  architecture: os.arch(),
  uptime: os.uptime(),
};

console.log(server);

// The Util Module

/*

Developers sometimes classify outlier functions used to maintain code and debug certain aspects of 
a program’s functionality as utility functions. Utility functions don’t necessarily create new 
functionality in a program, but you can think of them as internal tools used to maintain and debug 
your code. The Node.js util core module contains methods specifically designed for these purposes. 
The util module can be required into the file using:

*/

const util = require('util');

/*

Once required, you have access to many useful objects and methods within the util module. One important object is 
types, which provides methods for runtime type checking in Node.

*/

const util = require('util');

const today = new Date();
const earthDay = 'April 22, 2022';

console.log(util.types.isDate(today));
console.log(util.types.isDate(earthDay));

/*


In the above example, we first require in the util module. Next, we declare two variables: today stores today’s date 
as an instance of the Date object, and earthDay stores the date of Earth Day as a string. We then log the results of 
type checking each variable using util.types.isDate(). The types.isDate() method checks for Date objects and returns 
a boolean value, giving us:

true
false

*/

/*

Since today is a Date object, it returns true, and since earthDay is a string, it returns false!

Another important util method is .promisify(), which turns callback functions into promises. As you know, 
asynchronous programming is essential to Node.js. In the beginning, this asynchrony was achieved using error-first 
callback functions, which are still very prevalent in the Node ecosystem today. But since promises are often preferred 
over callbacks and especially nested callbacks, Node offers a way to turn these into promises. Let’s take a look:

*/

function getUser(id, callback) {
  return setTimeout(() => {
    if (id === 5) {
      callback(null, { nickname: 'Teddy' });
    } else {
      callback(new Error('User not found'));
    }
  }, 1000);
}

function callback(error, user) {
  if (error) {
    console.error(error.message);
    process.exit(1);
  }

  console.log(`User found! Their nickname is: ${user.nickname}`);
}

getUser(1, callback); // -> `User not found`
getUser(5, callback); // -> `User found! Their nickname is: Teddy`

/*

Here we have a function that queries a database for a specified user ID. getUser methods are very common in back-end 
applications, and most will also support error-first callbacks. Since a database query typically takes longer to run 
than other operations, we simulate the query with a setTimeout() method that executes a callback function after 1000 
milliseconds (or 1 second). If the user with the specified ID is found, the callback function is executed with null 
passed in as the argument for the error parameter, and an object containing the returned user information is passed 
in as an argument for the user parameter. If the user is not found, the callback function is executed, passing in a 
new Error as the argument for the error parameter. A second argument for user is not necessary since the function will 
end in the case of an error.

This way of handling this function may seem a bit convoluted these days, but with .promisify(), we can easily change 
it into a modern, cleaner, and more maintainable version of itself:

*/

const getUserPromise = util.promisify(getUser);

getUserPromise(id)
  .then((user) => {
    console.log(`User found! Their nickname is: ${user.nickname}`);
  })
  .catch((error) => {
    console.log('User not found', error);
  });

getUser(1); // -> `User not found`
getUser(5); // -> `User found! Their nickname is: Teddy`

/*

We declare a getUserPromise variable that stores the getUser method turned into a promise using the .promisify() 
method. With that in place, we’re able to use getUserPromise with .then() and .catch() methods (or we could also use 
  the async...await syntax here) to resolve the promise returned or catch any errors.

Now, this is an extremely simplified example, but it’s helpful to recognize how to use this important tool when you 
start working with more complex callback functions.

*/

// Require in trails module from trails.js
const trails = require('./trails.js');
// Require util module here!
const util = require('util');

// Simulate database call to search trails module for specified trail
const getTrailDistance = (trail, callback) => {
  return setTimeout(() => {
    if (trails.hasOwnProperty(trail)) {
      const foundTrail = trails[trail];
      callback(null, foundTrail);
    } else {
      callback(new Error('Trail not found!'));
    }
  }, 1000);
};

// Callback function to send an error in the case of an error, or to handle trail data if a trail was found successfully.
function callback(error, trailData) {
  if (error) {
    console.error(error.message);
    process.exit(1);
  } else {
    const mi = trailData.miles;
    const nickname = trailData.nickname;
    console.log(`The ${nickname} is ${mi} miles long!`);
  }
}

getTrailDistance('North Country', callback);

// Promisfy below!
const getTrailDistancePromise = util.promisify(getTrailDistance);

getTrailDistancePromise('North Country')
  .then((foundTrail) => {
    const nickname = foundTrail.nickname;
    const mi = foundTrail.miles;
    console.log(`The ${nickname} is ${mi} miles long!`);
  })
  .catch((error) => {
    console.log('Trail not found!', error);
  });
