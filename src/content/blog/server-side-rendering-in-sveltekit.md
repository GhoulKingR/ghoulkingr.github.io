---
title: "Server side rendering in SvelteKit"
publishDate: 'Feb 25 2023'
isFeatured: true
tags:
  - Guide
  - Web
---

This article provides a guide on how to build a server-side rendered application, covers the key concepts and techniques needed to create one, and shows you how to set up the development environment. Server-side rendering happens when a server generates a fully processed HTML page any time a client sends a request.

Server-side rendering comes with benefits to the end users’ side. Some of its benefits include faster page loading, smaller request size, improved search engine optimization, and more secure interaction with the application.

By the end of this article, you will have the skills and knowledge needed to build your SSR applications using Sveltekit.

## Prerequisites

You’ll need to have the following installed in your system to follow along in this article:
* NodeJS
* Npm or any package manager


## Getting started

Before you build your application, you’ll need to initialize a project. I’ll show you how to set up a SvelteKit project in this section. To begin, run this command:

```bash
npm create svelte@latest ssr-webapp
```

Then when it asks you the following, give the responses beside:
* “Which Svelte app template?” - Skeleton project
* “Add type checking with TypeScript?” - No
* “Add ESLint for code linting?” - No
* “Add Prettier for code formatting?” - No
* “Add Playwright for browser testing?” - No
* “Add Vitest for unit testing?” - No


The command creates a new `ssr-webapp` folder. The folder contains files that you need to get started. To get the project working, run the following commands in your terminal:

```bash
cd ssr-webapp
npm install
```

Congratulations, you have successfully initialized your SvelteKit project. In the next section, you’ll use the project to build the application.

## Building the application

It’s time to build the application after the project is initialized. Building an SSR application with Sveltekit is relatively straightforward. And in this section, I’ll show you how to do it.

Follow these steps:

1. Rename `+page.js` in `src/routes` to `+page.server.js`.

2. Paste the code below into the `+page.server.js` file:


```javascript
let fakeDatabaseObject = {};

export async function load ({ request }) {
   let url = new URL(request.url);
   let name = url.searchParams.get('name');

   return {
       message: name ? fakeDatabaseObject[name] : ""
   }
}

export const actions = {
   async writemessage({request}) {
       let form = await request.formData();
       fakeDatabaseObject[ form.get('name') ] = form.get('message');
   }
}

export const ssr = true;
```

Finally, paste the code below into the `+page.svelte` file in `src/routes`:

```xml
<script>
   export let data;

   let message = data.message ? "Message: " + data.message : "";

   function clicked() {
       let name = document.getElementById("name").value;
       location.assign(`/?name=${name}`);
   }
</script>

<div>
   <h1>Write message</h1>
   <form action="?/writemessage" method="post">
       <input type="text" name="name" placeholder="Enter your name..."/><br/>
       <input type="text" name="message" placeholder="Enter your message..."/><br/>
       <button type="submit">submit</button>
   </form>

   <h1>Get message</h1>
   <input type="text" id="name" placeholder="Enter the name..."/><br/>
   <button on:click={clicked}>check message</button><br />

   { message }
</div>
```

Congratulations, you have built the application. You may be wondering how the application looks at this point. The following section shows you how to run the application.

## Running the application

Building the application isn’t enough to know how well the code runs. This section guides you through running the application on your system and building your project for production.

### Running the application

To run the application, all you need to do is run this command on your project’s root directory:

```bash
npm run dev
```

The command above starts up a development server. The development server provides features that let you see the application and see any changes you make in real-time. The web application is hosted in the localhost server: [http://localhost:5173](http://localhost:5173).

### Building the application

To build the application, follow these steps:
1. First, install the node adapter with this command:
```bash
npm install @sveltejs/adapter-node
```
2. Next, modify the */svelte.config.js* file to import the node adapter:
```typescript
// from `import adapter from '@sveltejs/adapter-auto';`
import adapter from '@sveltejs/adapter-node';
```
3. Finally, build the project with this command:
```bash
npm run build
```

At the end of the steps, you’ll see a *build* folder. If you run the *index.js* file inside the *build* folder, you’ll see the application running in the browser.

## Explaining the steps

After looking at the application, you may be curious about how the application works. In this section, we will walk through the steps to build the application. By the end of this section, you will understand how the application works.

### Step 1: Renaming `+page.js`

In SvelteKit, if you want to render `+page.svelte` from the server, you need to rename its `+page.js` to `+page.server.js`. Svelte executes all files that end in `.server.js` on the server.

The `+page.js` and `+page.server.js` files determine whether the `+page.svelte` is rendered at the server or the client. You can only have a `+page.js` or `+page.server.js` pointing to a `+page.svelte` at a time, not both.

### Step 2: Writing to `+page.server.js`

The `+page.server.js` file has three essential sections:
* The `load` function:
```typescript
export async function load ({ request }) { let url = new URL(request.url); let name = url.searchParams.get('name');

return { message: name ? fakeDatabaseObject\[name\] : "" } }
```
* The `actions` object:
```typescript
export const actions = {
   async writemessage({request}) {
       let form = await request.formData();
       fakeDatabaseObject[ form.get('name') ] = form.get('message');
   }
}
```
* The `ssr` export:
```typescript
export const ssr = true;
```

When a page is about to be loaded, SvelteKit runs the `load` function. The result of the `load` function will be rendered to `+page.svelte` on the server.

In the `load` function, the first line parses the URL. The second line extracts the `name` parameter from the URL. Using [http://localhost:5173/?name=Chigozie](http://localhost:5173/?name=Chigozie) as an example, `name`, in the `load` function’s line 2 will contain “Chigozie”. In the end, the function uses `name` to get a value stored in the `fakeDatabaseObject` object.

The `actions` object contains possible actions you can perform from `+page.svelte`. To run an action, you will send a post request. In the next step, I’ll show you how the application runs the action.

The `writemessage` action extracts the `name` and `message` values in the form data. Then it uses the value of `name` to store the value of `message` in `fakeDatabaseObject`.

The `ssr` export provides extra configuration to how Sveltekit should render `+page.svelte`.

### Step 3: Working on `+page.svelte`

In `+page.svelte` file, the first thing to look at is the view:

```xml
<div>
   <h1>Write message</h1>
   <form action="?/writemessage" method="post">
       <input type="text" name="name" placeholder="Enter your name..."/><br/>
       <input type="text" name="message" placeholder="Enter your message..."/><br/>
       <button type="submit">submit</button>
   </form>

   <h1>Get message</h1>
   <input type="text" id="name" placeholder="Enter the name..."/><br/>
   <button on:click={clicked}>check message</button><br />

   { message }
</div>
```

The 3rd to 7th line is a form that executes the `writemessage` action when you click **submit**. The form sends a post request that SvelteKit uses to call the action.

The 10th, 11th, and 13th lines are an input, a button, and a text section. To understand it take a look at the script:

```typescript
<script>
   export let data;

   let message = data.message ? "Message: " + data.message : "";

   function clicked() {
       let name = document.getElementById("name").value;
       location.assign(`/?name=${name}`);
   }
</script>
```

When you click the button, the `clicked()` function is executed. The function extracts the value in the input, then loads the web page with `name` included in its URL parameter.

## What makes it an SSR application?

What makes the page SSR is that Sveltekit replaces all instances of `data.message` with its value before sending the page to the browser.

If you compare it to the `+page.svelte` view, you’ll notice that `{ message }` was replaced with **Message: Hello**. This process happened before the server sent the page to the browser.

## Conclusion

Server-side rendering is a valuable technique for building web applications that allow for faster initial page load times, improved SEO, and the ability to run code on the server for enhanced security and scalability. This article provided a step-by-step guide on building a server-side rendered application using the Sveltekit framework, giving you the necessary skills and knowledge to create your own SSR applications. If you want to learn more about SSR applications in Sveltekit, check any of the following links:
* [Sveltekit Documentation - Introduction](https://kit.svelte.dev/docs/introduction)
* [Sveltekit Documentation - Routing](https://kit.svelte.dev/docs/routing)
* [Sveltekit Documentation - Form actions](https://kit.svelte.dev/docs/form-actions)
* [Sveltekit Documentation - Adapters](https://kit.svelte.dev/docs/adapters)
