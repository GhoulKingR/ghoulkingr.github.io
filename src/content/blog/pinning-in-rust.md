---
title: "Pinning in Rust"
publishDate: 'Nov 09 2023'
isFeatured: true
tags:
  - Guide
  - Rust
---

Pinning is a very confusing topic I encountered while programming in Rust. I tried hard to learn it, but the guides, articles, and videos I’ve seen are hard to understand. They usually involve having to know another complex concept in Rust, and that just made me go back and forth between other articles, videos, and guides on those other concepts.

In this article, I’ll filter out all those other concepts and focus solely on pinning. After reading this article, you’ll learn to apply it in your code and understand its use in other codes.

## First, what is pinning?

Pinning is an essential feature in Rust. It is the process of locking the position of an object in memory. Pinning prevents your code from moving an object while it is using the object.

Pinning is a vital feature when you're working with code that points to other objects. Because objects tend to change their position in memory. And those changes cause any reference to the previous position to become null.

Objects changing memory location affects data structures like linked lists and a lot of asynchronous processes. The null references cause unpredictable behaviors.

## How do you pin an object?

Pinning an object is simple. Rust provides a `Pin` struct for pinning objects. The struct is a part of Rust’s standard library; you can access it via `std::pin::Pin`.

Take a look at this example:

```rust
struct MyStruct {
    value: u32
}

fn main() {
    let my_struct = MyStruct{ value: 10 };
    println!("{}", my_struct.value);
}
```

This example contains a struct, `MyStruct`, that the `main` function uses in the following way:
1. Creating an instance of `MyStruct` as `my_struct`.
2. Printing `my_struct.value` to the terminal.


To pin `my_struct`, you need to do a few things:
1. Add a `_pin` field to `MyStruct` for storing a `PhantomPinned` object.
2. Pass `my_struct` to `Box::pin` to pin `my_struct`.

```rust
use std::marker::PhantomPinned;

struct MyStruct {
    value: u32,
    _pin: PhantomPinned,
}

fn main() {
    let my_struct = MyStruct {
        value: 10,
        _pin: PhantomPinned,
    };

    let pinned_struct = Box::pin(my_struct);

    println!("{}", pinned_struct.value);
}
```

I haven’t discussed `Box`, so let’s look into it. `Box` lets you manually allocate memory in the heap storage.

Rust has two types of memory that it uses for storing values in your code: stack and heap memory. If Rust can determine the size of an object at compile time it stores that object in the stack memory. If it can't determine the size of the object it stores the data in the heap memory.

That behavior is there because stack memory is rigid but very fast. While heap memory is flexible and extensive, but slow compared to stack memory.

With `Box::pin()` you can store an object in the heap memory and pin it in place.

This list contains a few more things you need to know about pinned objects.
* Modifying a pinned object
* The `_pin` field
* The risks of using pinned objects

Let’s take a look at all of these in detail!

### Modifying pinned objects

One of the things you’ll get stuck in immediately after pinning an object is trying to modify data on it. It can be frustrating, but there’s no need to worry. There’s a way to do it, but it involves some rule-breaking processes. So you have to do it in an `unsafe` block.

Let’s revisit the last example we had in the previous section. To follow along, I’ll paste it below:

```rust
use std::marker::PhantomPinned;

struct MyStruct {
    value: u32,
    _pin: PhantomPinned,
}

fn main() {
    let my_struct = MyStruct {
        value: 10,
        _pin: PhantomPinned,
    };

    let pinned_struct = Box::pin(my_struct);

    println!("{}", pinned_struct.value);
}
```

Let’s say we want to change the value of `my_struct.value` to 32. If we just try `my_struct.value = 32`, the compiler will generate an error message telling you that it's against the rules to change the value.

To change the value of `my_struct.value`, there are a few steps that you must follow:
1. First, collect a mutable reference to the pinned object with `Pin::as_mut(&mut my_struct)`.
2. Then, use that mutable reference to reference the object stored in the pin with `Pin::get_unchecked_mut(mut_ref)`.
3. Finally, use the reference to the object to modify the object however you like.


Any modifications you make will now reflect in the pinned object.

Let’s see how the code looks after following these steps.

```rust
use std::pin::Pin;

struct MyStruct {
    value: u32,
    _pin: PhantomPinned,
}

fn main() {
    let mut my_struct: Pin<Box<MyStruct>> = Box::pin(MyStruct {
        value: 10,
        _pin: PhantomPinned,
    });

    println!("{}", my_struct.value);

    unsafe {
        let mut_ref: Pin<&mut MyStruct> = Pin::as_mut(&mut my_struct);
        let mut_pinned: &mut MyStruct = Pin::get_unchecked_mut(mut_ref);
        mut_pinned.value = 32;
    }
    println!("{}", my_struct.value);
}
```

If you run the code, it displays the value of `my_struct.value` in the terminal before and after modifying it.

### The `_pin` field

If you noticed, you had to add a `_pin` field to the struct in the first modifications to the code. Now, you may be asking yourself what the field is and what it does. That’s what we’ll cover in this section.

`_pin` is a field you place in the struct you want to pin. It tells the compiler that the struct should be pinned. When you apply the `Box::pin()` method to a struct without the `_pin` field, the method call may be successful, but it won’t pin the object in the memory. You can test this with this code:

```rust
use std::pin::Pin;

struct MyStruct {
    value: u32,
}

fn main() {
    let mut my_struct: Pin<Box<MyStruct>> = Box::pin(MyStruct {
        value: 10,
    });

    println!("{}", my_struct.value);

    my_struct.value = 32;   // without `_pin`, this works without any issue
    println!("{}", my_struct.value);
}
```

When you apply the `_pin` field to the struct and initialize it with `PhantomPinned`, the line 14 (`my_struct.value = 32;`) becomes invalid.

```rust
use std::pin::Pin;

struct MyStruct {
    value: u32,
    _pin: PhantomPinned,
}

fn main() {
    let mut my_struct: Pin<Box<MyStruct>> = Box::pin(MyStruct {
        value: 10,
        _pin: PhantomPinned,
    });

    println!("{}", my_struct.value);

    my_struct.value = 32;   // This will cause a compilation error
    println!("{}", my_struct.value);
}
```

If you look at the `_pin` field, you may also be asking why you need to initialize it with `PhantomPinned`. The answer is simple: `PhantomPinned` is a type Rust uses to enforce the pinning rules on an object. You should always apply `PhantomPinned` to the `_pin` field of a struct when you want to pin it. `PhantomPinned` doesn’t hold any value in memory and does nothing other than enforce pinning rules on the struct you apply it on.

### What do you risk by using pinned objects?

One of the biggest problems with pinned objects is safety. Don’t get me wrong, pinning objects before using them in specific applications promotes safety. Now you might be wondering: I just said that their problem is with safety; what going on? The safety issue with pinned objects lies in using them.

You may have noticed that when modifying the pinned object, `my_struct`, we had to wrap the processes in an `unsafe` block. Surrounding the expressions with `unsafe` had a reason. As it turns out, you should be careful when tampering with a pinned object. If you’re not, you can risk causing undefined behavior and other problems to essential parts of your code.

Our example was simple, so there wasn’t much to risk. But you still need to wrap it in an `unsafe` block, even as it is.

## Conclusion: why pin an object, then?

Now that you’ve gone through all that, the ultimate question remains. Why bother with pinning objects at all? This question is essential because pinning objects will hold no value without answering them.

To answer these questions, I have compiled a short list that states each of the reasons:
* Pinning an object in Rust ensures that the object remains in a fixed location in memory (vital for asynchronous programming).
* Pinning can help prevent data races and other concurrency issues from arising when multiple processes access the same data.
* Pinning can also help improve performance by reducing the copying and moving of the code when working with asynchronous data.
* Pinning ensures that certain types of data are always available in memory, even if the computer swaps out other parts of the program.

