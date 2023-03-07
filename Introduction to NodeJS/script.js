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
