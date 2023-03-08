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
