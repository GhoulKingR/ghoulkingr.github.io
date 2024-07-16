---
title: "Calling C++ functions from your Rust code"
publishDate: 'Jun 10 2023'
tags:
  - Rust
---

C++ provides an `extern` keyword allowing you to specify functions other programming languages, including Rust, can interact with.

Calling this function requires you to provide parts you want other languages to interact with in your C++ code, compile it, and link it to your Rust project. And, In this article, I’ll go into the details of doing it.

# Why would you want to do this?

You can import from one language to another for several reasons. These reasons may include the following:
* Efficiency: Functions written in one language may be more efficient than if you write them in the other language.
* Readability: Sometimes, reading and writing functions in one language are more manageable than in the other.
* Availability of support: One of the languages may have the necessary libraries you need to carry out a task that the other may not have.


The list goes on, but let’s look at the next section for now and learn how to import and bind C++ functions in Rust.

# Calling C++ functions from your Rust code

In this section, I’ll show you how to run C++ functions from your Rust code.

To start, you need to prepare your C++ file. Let’s imagine you have a `main.cpp` file in your `src/`, and it contains this code in it:

```cpp
// src/main.cpp
extern "C" {
  bool UniqueFunction(int a, int b) {
    return true;
  }
}
```

To prepare this C++ code, follow these steps:

1. Create a `build.rs` file in `src/`.
2. Copy the code below into `build.rs`:
```Rust
// src/build.rs
fn main() {
  cc::Build::new()
    .cpp(true)
    .file("src/main.cpp")
    .compile("main.a");
}
```
3. Add a pointer to `build.rs` in `Cargo.toml` under `[packages]`
```toml
[package]
# ...
build = "src/build.rs"
```

`build.rs` uses the `cc` library, so install it by adding the package name under `[build-dependencies]` in `Cargo.toml`.

```toml
[build-dependencies]
cc = "1.0"
```

Now you can easily call `UniqueFunction` from your Rust code like below:

```Rust
// src/main.rs
extern "C" {
  fn UniqueFunction(a: i32, b: i32) -> bool;
}

fn main() {
  unsafe {
    println!("Value: {}", UniqueFunction(23, 4));
  }
}
```

# Can you call Rust functions from C++?

A short answer to this question is “Not easily.”To get C++ to call your Rust function is always different. Calling Rust functions from C++ varies depending on how you are calling the function and what your function does.

I’m not covering that in this article, but I’ll give you resources that may help.
* [Rust/C++ interop — Firefox Source Docs documentation](https://firefox-source-docs.mozilla.org/writing-rust-code/cpp-interop.html)
* [A little C with your Rust - The Embedded Rust Book](https://docs.rust-embedded.org/book/interoperability/c-with-rust.html)
* [FFI - The Rustonomicon](https://doc.rust-lang.org/nomicon/ffi.html)

