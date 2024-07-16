---
title: "Rust structs — Unit, Field, and Tuple structs"
excerpt: Rust Structs are very useful tools for building data structures. Learn their basics, types, mutability, and how to create implementations for structs.
publishDate: 'Feb 25 2023'
tags:
  - Rust
---

Structs are one of the most valuable features of Rust. Rust structs give programmers the ability to model data structures efficiently. In this article, we’ll go through their basics and see how we can improve our codes with them.

## Prerequisites

Before you fully understand this article, it will be nice to have the following.
* Basic understanding of the Rust programming language
* A Rust compiler installed on your system


## What are Structs in Rust?

Rust structs are a method of building data structures in the programming language. Data Structures are the necessary foundation for efficient algorithms and programs.

Your code will take up less memory and runtime with suitable data structures. These are useful when creating systems that serve millions of users simultaneously.

Rust structures come with several benefits. These benefits include:
* Modeling complex data structures.
* Abstracting objects.
* Binding functions and methods to structs.
* Binding related methods and data.


Using structs the right way can improve your program’s readability and performance. A well-created and utilized struct helps understand how data and functions interact in a program.

In the next section, we will take you through the types of structs in Rust.

## Types

There are three fundamental types of Rust structs. In this section, we will look at the types.

### Field Structs

The following is an example of a field struct:

```typescript
struct Person {
 name: String,
 age: u8,
}
```

In this struct, we define each field with its name and type. The `Person` struct has `name` and `age` as its fields. Fields define the properties of an object.

To use the struct, you should initialize it first. In initializing the struct, you create an object out of it. The following is an example of initializing the `Person` struct above:

```typescript
let person = Person {
 name: "John".to_string(),
 age: 23,
};
```

The `person` object is initialized with “John” as name and “23” as age. To reference a field, use the dot (“.”) operator, as shown below:

```typescript
println!("Name: {}\nAge: {}", person.name, person.age);
```

You can take a look at the following:

```typescript
struct Person {
name: String,
age: u8,
}

fn main() {
let person = Person {
  name: "John".to_string(),
  age: 23,
};

println!("Name: {}\nAge: {}", person.name, person.age);
}
```

The code is a working example that you can run on your system. When you run the code, it gives the following output:

```typescript
Name: John
Age: 23
```

### Tuple Structs

Tuple structs hold data in the form of a tuple. The benefit of tuples includes not having to come up with names for each field. You only need to provide a datatype during the definition:

```typescript
struct Person (String, u8);
```

Initializing it is slightly different from initializing a field struct:

```typescript
let person = Person ("John".to_string(), 23);
```

The example below shows you how to reference each of the tuple’s elements:

```typescript
println!("Name: {}\nAge: {}", person.0, person.1);
```

Run the working example below to see its output:

```typescript
struct Person (String, u8);

fn main() {
 let person = Person ("John".to_string(), 23);
 println!("Name: {}\nAge: {}", person.0, person.1);
}
```

### Unit Structs

Unlike field and tuple structs, unit structs do not hold any data.

Regardless of its ability to hold data, you can use it for grouping functions and methods. In this article’s [Impl keyword](#heading=h.etr5swx5f4sw) section, you’ll learn how to bind methods to structs.

You declare them like the following:

```typescript
struct MyUnitStruct;
```

And initialize them like the next:

```typescript
let unit_struct = Unit;
```

## Struct Mutability

The mutability of objects is an essential concept in the Rust programming language. For example, Rust’s memory management mechanism debates that modifiable variables be separated from non-modifiable variables.

Mutable structs work the same way as mutable variables. Specify that the variable is mutable with the mut keyword:

```typescript
let mut person = Person {
 name: "John".to_string(),
 age: 23,
};
```

Without the mut keyword, you can’t perform operations like the one below:

```typescript
person.age = 24;
```

Take a look at the working example below:

```typescript
struct User {
 name: String,
 is_active: bool,
}

fn main() {
 let mut user = User {
   name: "John".to_string(),
   is_active: false,
 };

 check_active(&user);
 user.is_active = true;
 check_active(&user);
}

fn check_active(user: &User) {
 if user.is_active {
   println!("{} is active", user.name);
 } else {
   println!("{} is not active", user.name);
 }
}
```

## The Impl keyword

The `impl` keyword is short for “Implementation”. `impl` is used to define an implementation for Rust structs.

An implementation includes initialization functions, instance methods, and static methods. Essentially, `impl` allows you to bind methods to a structure.

Let’s take a look at the example below:

```typescript
struct Person {
name: String,
age: u8,
}
```

You can implement the below for the `Person` struct:

```typescript
impl Person {
 fn new(name: String, age: u8) -> Person {  // initialization function
   Person {
     name: name,
     age: age,
   }
 }

 fn display(&self) {  // instance method
   println!("Name: {}\nAge: {}", self.name, self.age);
 }
}
```

In the above, the initialization function, new, creates an instance of the struct. An initialization function is a static method. To call the `new` function, use the `::` operator:

```typescript
let person = Person::new("John".to_string(), 23);
```

The instance method, display, can only be called from an instance. To call the method, use the `.` operator:

```typescript
person.display();
Check out the working example below:
struct Person {
 name: String,
 age: u8,
}

impl Person {
 fn new(name: String, age: u8) -> Person {
   return Person {
     name: name,
     age: age,
   };
 }

 fn display(&self) {
   println!("Name: {}\nAge: {}", self.name, self.age);
 }
}

fn main() {
 let person = Person::new("John".to_string(), 23);
 person.display();
}
```

## Conclusion

In this tutorial, we walked through creating data structures with struct and adding functionality to them.

I hope this article gave you a necessary understanding of how rust structs work and how you can use them to improve your code quality.

Thanks for reading!
