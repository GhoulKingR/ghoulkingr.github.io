---
title: "Reading Console Inputs in JavaScript"
publishDate: 'Nov 09 2023'
tags:
  - Web
---

While programming with JavaScript, I ran into an issue you wouldn't expect to run into. JavaScript is a very powerful language, but have you ever really seen a JavaScript code that reads input from the console?

Reading console inputs in JavaScript doesn't happen the same way it happens in most programming languages. So I'll show you how to do it in this article.

To read inputs from the console, you'll need the `readline` library. This library is built into JavaScript. So there's no need for extra installations.

With that said, let's begin. There are two main ways of reading inputs and they both use different libraries. I'll cover using the `readline` library and using the `readline-sync` library.

## With `readline`

### Step 1: Import the `readline` library

```JS
const readline = require('readline');
```

### Step 2: Create an interface

```JS
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
```

In creating the interface, we set it to receive inputs from the standard input and push its output to the standard output. The standard input and output is the console.

### Step 3: Create a prompt

```JS
rl.question('What is your name? ', ans => {
  console.log('Your name is', ans);
  rl.close();
});
```

The function `rl.question` above, displays "What is your name? " in the terminal, and waits for the user to respond before passing the user's response to the callback function.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1699550900711/bab39d7c-ecc8-4639-9fbe-a84236c0b4aa.png align="center")

You need to close the interface using the `rl.close()` at the end of the input or else the entire program won’t quit.

## With `readline-sync`

`readline-sync` does the same thing as `readline` except that `readline-sync` allows you to read inputs synchronously.

To read console inputs with `readline-sync` follow these steps:

### Step 1: Install the library

```bash
npm i readline-sync
```

### Step 2: Import the `readline-sync` library

```js
const rl = require('readline-sync');
```

### Step 3: Create the prompt

```js
const name = rl.question('What is your name? ');
console.log('Your name is', name);
```

Unlike with `readline-sync`, you don't need to close the interface. This is because you're not creating one in the first place. The `rl.question` function above, blocks the thread while waiting for the user to respond, and returns the response.

## Bonus: Reading a key-press

By "reading a key-press" I mean that you're prompting your users to press a button without needing to press the **Enter** key. We can achieve this with both the `readline` and `readline-sync` library.

Let's look into how to read a key-press with both libraries.

### With `readline`

To read key presses with the `readline` library, follow these steps:

#### Step 1: Import the `readline` library

```javascript
const readline = require('readline');
```

#### Step 2: Prepare the standard input

```javascript
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
```

To prepare the standard input, we first set the `readline` library to emit key-press events to the standard input. Then we set the standard input to raw mode.

#### Step 3: Write your key-press event listener

```js
process.stdin.on('keypress', (character) => {
  console.log(character);
  if (character === "k") {
    process.stdin.destroy();
  }
});
```

You need to call `process.stdin.destroy` before your code terminates, or else your code will continue running without stopping. `process.stdin.destroy` tells the code to stop waiting for inputs from the standard input.

### With `readline-sync`

Reading a single key hit using the **readline-sync** module is very simple. So let's head straight to it

#### Step 1: Install the `readline-sync` library

```bash
npm i readline-sync
```

#### Step 2: Import the `readline-sync` library

```js
const rl = require('readline-sync');
```

#### Step 3: Read a key press with `rl.keyIn()`

```js
const key = rl.keyIn();
console.log(key);
```

## Conclusion

Console inputs are one of the most rarely talked about concepts in JavaScript. So it's common to find people that don't know how to handle them yet.

I discovered that not many people knew about it (even me) when I tried using JavaScript to solve a programming exercise.

Thanks for reading!
