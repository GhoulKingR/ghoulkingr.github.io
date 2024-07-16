---
title: "Overview of asynchronous functions in JavaScript"
publishDate: 'Nov 10 2023'
tags:
  - Web
---

In this article, I'll explain what asynchronous functions are, the types there are in JavaScript, and I'll also give example.

So let's get to it!

## What is an asynchronous function?

An asynchronous function is a type of function that doesn't block the thread that it's running on while it's doing its task.

To put it in context, when a normal function is running, the thread waits for the function to finish running before moving on with what it has to do. In asynchronous functions the thread doesn't wait for the function to finish running before moving on.

To get the results from an asynchronous function, or to know when it's finished with its task, you need to use event-driven programming. You'll see how this works in the next section.

## Types of asynchronous functions

In JavaScript, there are two main types of asynchronous functions: Ones that use callbacks, and ones that use promises.

### Ones that use Callbacks

Callbacks are functions that you pass to other functions as arguments. Take a look at this example:

```javascript
setTimeout(function () {
  console.log("Hello!");
}, 5000);
```

The first argument in the `setTimeout` function is a callback. `setTimeout` is a built in asynchronous function for executing a callback function after a specific period.

Some asynchronous functions allow you to get their results through callbacks too. For example the `fs.readFile` method from the `fs` library:

```javascript
const fs = require("fs");

fs.readFile("./package.json", function (err, buffer) {
  if (!err) {
    const content = buffer.toString();
    console.log(content);
  }
});
```

The `fs.readFile` method reads the file specified in its first argument. When the method is done with reading the file, it runs the callback specified in its second argument, passes the results from reading the file and any potential errors it might've ran into while reading the file.

### Ones that use Promises

Promises are objects that asynchronous functions can use to signify that it will complete its task eventually. The function does this by returning the Promise object.

If an asynchronous function chooses to return a promise, you won't have access to it's the results of the function directly or immediately. But with the promise object, you can create an event listener that the promise object will trigger when the function is done with it's task.

To create an event listener, use the `.then` method of the promise object. Take a look at the `fs.readFile` promise version:

```javascript
const fs = require("fs/promises");

const promise = fs.readFile("./package.json");

promise.then(function (buffer) {
  const content = buffer.toString();
  console.log(content);
});
```

Instead of returning the contents of *package.json* directly, `fs.readFile` returns a promise. With it's `.then` method, an event listener was set up.

The function you pass into the `.then` method is a callback function.

## Conclusion

In this article, I just went over the basics of asynchronous functions in JavaScript.

There are lots of different and new concepts to still learn about asynchronous functions. So I hope this article gives you a solid beginning.

Thanks for reading!
