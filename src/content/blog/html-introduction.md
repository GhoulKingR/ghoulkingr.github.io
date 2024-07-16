---
title: "Introduction to HTML"
publishDate: 'May 24 2023'
tags:
  - Intro
  - Web
---

HTML (Hypertext Markup Language) is the foundational language of the internet, providing a structure for web pages and the content within them. In this article, we will introduce the basics of HTML and how it is used to create and display content on the web.


## What is HTML?

HTML (Hypertext Markup Language) is a markup language used for building web pages. An html document describes how a web page is structured, and what each component of the means.

When you open a URL in your browser, it looks for an HTML request from the URL’s host. When the browser gets the HTML request, the browser renders the request’s content for you to see.

An HTML document contains several elements represented by tags. An element consists of the following:
* An opening tag, to denote the start of the element.
* A closing tag, to demo the end of the element.
* Optionally, contents in the tag, to describe the element’s contents.
* Optionally, one or more attributes, to provide more information about the element.

HTML is an essential building block of the modern web. You can use HTML with CSS and JavaScript to build more functional web pages.


## The history of HTML

HTML was first developed by Tim Berners-Lee, a British computer scientist, in the late 1980s. He wrote the first version of HTML (then called "HTML 2.0") in 1991, and it quickly became the standard markup language for the World Wide Web.

Since then, HTML has undergone numerous revisions and updates. The most recent version is HTML5, which was released in 2014 and is still the current version.

Some of the key developments in the history of HTML include:
* HTML 2.0: The first version of HTML, released in 1991
* HTML 3.2: A major update released in 1997, which added support for tables, applets, and text flow around images
* HTML 4.0: Another major update released in 1997, which added support for style sheets, object-oriented design, and multimedia
* XHTML: A reformulation of HTML as an XML (Extensible Markup Language) application, released in 2000
* HTML5: The current version of HTML, released in 2014, which adds support for new features such as audio and video playback, the canvas element for drawing, and improved support for mobile devices.

HTML has played a vital role in the development of the World Wide Web, and it continues to be an important technology for creating and displaying content on the web.


## Basic structure of an HTML document

All HTML document usually start with three basic elements:
* &lt;html>, the root element of any web page.
* &lt;head>, contains information about the web page.
* &lt;body>, contains the contents of the web page

&lt;html> wraps all the elements that make up the web page. The information contained in &lt;head> includes: the page’s stylesheet, metadata, scripts, title, and icon. The contents of &lt;body> is what the browser displays to its screen

Here is an example that shows the basic structure of an HTML document:


```
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    Page content goes here
  </body>
</html>
```


HTML also provides other types of elements that you can add to your web page, such as headings, paragraphs, lists, tables, and forms, to structure and format the content.


## HTML headings and paragraphs

HTML headings and paragraphs are used to structure and format the content of an HTML document.

Headings are defined with the &lt;h1>, &lt;h2>, &lt;h3>, &lt;h4>, &lt;h5>, and &lt;h6> elements, and they are used to indicate the hierarchy and importance of the content. The &lt;h1> element is used for the most important heading, while the &lt;h6> element is used for the least important.

Here is an example of how to use headings in an HTML document:

```
<h1>Heading Level 1</h1>
<h2>Heading Level 2</h2>
<h3>Heading Level 3</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6</h6>
```


Paragraphs are defined with the &lt;p> element, and they are used to contain blocks of text. Each paragraph should be wrapped in its own set of &lt;p> tags.

Here is an example of how to use paragraphs in an HTML document:


```
<p>This is a paragraph of text.</p>
<p>This is another paragraph of text.</p>
```


It's important to use headings and paragraphs appropriately to create a well-structured and easy-to-read document.


## HTML links and images

HTML links and images add interactivity and media to web pages. Links are created with the &lt;a> tag, and images are inserted with the &lt;img> tag.

Here is an example of a link in an HTML document:


```
<a href="http://www.example.com">Click here to visit example.com</a>
```


The contents of the link contains the text that the browser displays when it’s rendering the element. In the link above, the content of the link is “Click here to visit example.com”.

The &lt;a> tag uses a `href` attribute to specify the destination of the link. The destination of the link above is “http://www.example.com”.

Images are inserted into a web page with the &lt;img> tag, and here is an example:


```
<img src="image.jpg" alt="Description of the image">
```


The internal contents of the &lt;img> tag won’t be displayed in the browser, so the &lt;img> tag doesn’t require a closing tag.

The &lt;img> tag uses the src attribute to specify the location of the image to render. In the element above, the image being rendered is “image.jpg”.

The &lt;img> tag uses the text value of the alt attribute to provide a text alternative to render if an image can’t be rendered. If image.jpg isn’t available, a broken image icon and a “Description of the image” text will be rendered in its place.

It's important to use meaningful and descriptive text in the "alt" attribute, as this text will be displayed if the image is not available or if the user is using a screen reader.


## HTML lists

HTML lists are used to group related items and to create a structured layout for the content. There are two types of lists in HTML:
* Unordered lists, created with the &lt;ul> tag.
* Ordered lists, created with the &lt;ol> tag.

Here is an example of an unordered list:


```
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li``
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```


HTML lists are a useful way to structure and organize content, and they can be styled with CSS to create a variety of different appearances.


## HTML tables

Tables are important for organizing data that may be hard to understand if it isn’t organized. HTML tables are used for displaying data in tabular format.

To create a table you need four major tags:



* &lt;table>, the root table element
* &lt;tr>, represents a table row
* &lt;td>, represents a data cell
* &lt;th,  represents a header cell.

The following is an example of a simple table:


```
<table>
  <tr>
    <th>Heading 1</th>
    <th>Heading 2</th>
    <th>Heading 3</th>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
    <td>Row 1, Cell 3</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
    <td>Row 2, Cell 3</td>
  </tr>
</table>
```


You can control the appearance of a table with CSS. You can also use the "colspan" and "rowspan" attributes to merge cells vertically and horizontally, respectively.


## HTML forms

HTML forms are used to collect input from users, such as text, numbers, and files. Forms are created with the &lt;form> element, and the various input fields are created with form controls such as text inputs, buttons, checkboxes, and radio buttons.

Here is an example of a simple HTML form:


```
<form>
  <label for="name">Name:</label><br>
  <input type="text" id="name" name="name"><br>
  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email"><br>
  <input type="submit" value="Submit">
</form>
```


When the user submits the form, the input data is sent to the server, where it can be processed and stored. Forms are often used in conjunction with PHP or other server-side languages to handle the data submission and processing.

It's important to design your forms carefully, making sure to use appropriate form controls and to validate the input data to ensure that it is correct and complete.


## HTML style and layout

HTML style and layout refers to the way that content is styled and arranged on an HTML page. There are a few different ways to control the style and layout of an HTML document:



* The &lt;style> element can be used to define styles for specific elements or the entire document. Styles are defined using CSS (Cascading Style Sheets), which is a style sheet language that is used to control the appearance of web content.
* The &lt;div> element can be used to create a container for other elements and to control the layout of the page. The &lt;div> element is a block-level element, which means that it takes up the full width of its parent element and creates a new line after it.
* The &lt;span> element can be used to style inline elements within a block of text. The &lt;span> element is an inline element, which means that it does not create a new line and can be used inside other elements.

Here is an example of how to use the &lt;style> element to define a style for a specific element:


```
<style>
  p {
    color: red;
    font-size: 20px;
  }
</style>
```


And here is an example of how to use the &lt;div> element to create a container and control the layout of the page:


```
<div style="display: flex; justify-content: space-between;">
  <div style="width: 30%;">Sidebar</div>
  <div style="width: 70%;">Main content</div>
</div>
```
## Conclusion

In conclusion, HTML is an essential building block of the internet, allowing for the creation and display of web pages and their content. Understanding the basics of HTML, including its structure and various elements, is crucial for anyone looking to design and develop websites. Whether you are a beginner or have some experience with HTML, this article has provided a comprehensive introduction to the basics of this important markup language.
