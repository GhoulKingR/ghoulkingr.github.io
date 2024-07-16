---
title: "Tips and Tricks for Debugging in JavaScript"
publishDate: 'May 24 2023'
tags:
  - Productivity
  - Article
---

Running into errors in a project is very common. Dealing with them can get challenging. As a JavaScript developer, I’ve compiled some tips and tricks that can help with tackling errors, which I’ll show in this article.

To name all the tips and tricks I’m covering in this article, here’s a list:
* Use `console.log()` statements.
* Use a code editor with debugging tools.
* Break your code into smaller pieces.
* Check for syntax errors.
* Use a linter.

Without further ado, let’s get started!


## Use `console.log()` statements.

This, is one of the easiest ways I found to help with debugging. There are different ways you can use them. I, for one, use them in the following ways:



* Tracking variable changes.
* Monitoring a program’s success and progress.
* Monitoring variable changes.
* Understanding how a function operates.
* Testing functions, statements, and expressions.

Here’s an example:


```Js
let globalVariable = 0;

function main() {
 console.log("Global var:", globalVariable); // Confirming that it's 0
  for (let i = 0; i < 2000; i++) {
   globalVariable += i; // Try guessing the number at the end
 }

 console.log("Global var:", globalVariable);  // Checking it now

 // I don't know what global variable is, but I know I'll need it for the
 // `isEven` function
 if (isEven(globalVariable)) {
   console.log("Hello, world");
 }
}

function isEven(num) {
 return num % 2 == 0;
}

main();
```


In the example, you may not need to display the value of `globalVariable` to the console. But it helps to ensure that `isEven` works the way it’s supposed to.


## Use a code editor with debugging tools

Probably the most important tip in this article. Using a debugger whenever you run into an error is going to save a lot of your time. A debugger provides these helpful tools to make debugging easy:
* Break points.
* Line-by-line program analysis.
* Controlled program execution.
* Variable tracking.

To top it off, debuggers allow you to capture exceptions, and walk your way back from them. You can see every step your program took that made it run into the errror.

My advice, It’s worth the extra time learning how your debugger works, and the extra work setting it up. It will save you a lot of time, effort, and frustration in the long run.


## Break your code into smaller pieces

Breaking your code into smaller functions, or objects, helps a lot to make debugging easier. Smaller functions and objects are easier to test than larger ones. It can also help to avoid errors by developing your project using test driven development techniques.

Once you run into an error, you can test each individual function to narrow down the source of the error. It’s not as significant as the other tips in this article, but it will help in the long run too.


## Check for syntax errors

Syntax errors are one of the most common errors to occur in a program. All programming languages follow a rule. The rule makes the interpreter know exactly what you want it to do.

When you break those rules, the interpreter raises a syntax error. The interpreter uses the error to tell you that something is wrong, and points you to where the rule was broken.

Take the example below:


```js
function main() {
 console.log("Hello, world";
}

main();
```


When you run this program, you’ll get this output in the terminal:


```
/path/to/project/main.js:3
  console.log("Hello, world";
              ^^^^^^^^^^^^^^

SyntaxError: missing ) after argument list
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1176:20)
    at Module._compile (node:internal/modules/cjs/loader:1218:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.14.1
```


If you follow the information that the interpreter gives us, you will know that there is an error in line 3 of main.js. The error tells us that the line is missing a `)` after the argument list of `console.log("Hello, world";`


## Use a code linter

It’s already activated by default in major IDEs. A linter is a software that helps you to track potential errors, while you are coding. You will notice it displaying a red zig-zag (or dotted) line under where it thinks an error may occur in your program.

You may not need to follow any process to set it up. But pay attention to what it’s saying whenever you are coding. It’ll help you discover details that you may have missed.


## Ask for help

Errors can become more complicated the more you read into them. A complex error requires someone that’s already experienced in it, and knows the solution to it. If you don’t know the solution, the best thing you can do is to ask for help.

There are several platforms, like StackOverflow, that are dedicated to helping developers find solutions to problems they encounter while programming.


## Conclusion

Errors happen, and you’ve learned about the tips I have to help you handle them. I hope this article has helped by making your debugging process easier. Thanks for reading, and happy coding!
