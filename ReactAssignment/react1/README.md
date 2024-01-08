Instructions
Problem
Documentation
Write the answers in an .md or .txt file
submit the github repo link to it
Read from documentation, and notes / google to answer in your own words?
What is React?
Who made React?
What is Babel?
How does Babel convert html code in React into valid code?
What is ReactDOM used for? Write an example?
What are the packages that you need to import for react to work with?
How do you add react to a web application?
What is React.createElement?
What are the three properties that createElement accept?
What is the meaning of render and root?


Answers
What is React?

React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components that efficiently update and render when the underlying data changes.
Who made React?

React was created by Jordan Walke, a software engineer at Facebook. It was later open-sourced by Facebook.
What is Babel?

Babel is a JavaScript compiler that allows developers to write code using the latest ECMAScript features. It can transform modern JavaScript code into an older version that is widely supported by browsers.
How does Babel convert HTML code in React into valid code?

Babel primarily transpiles JavaScript code. For JSX (HTML-like syntax in React), Babel transforms it into regular JavaScript functions, which can then be executed by the browser.
What is ReactDOM used for? Write an example.

ReactDOM is a package in React that provides DOM-specific methods for rendering React elements. An example usage is rendering a React component into a specific HTML element:


jsx

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <h1>Hello, React!</h1>;
};

ReactDOM.render(<App />, document.getElementById('root'));


What are the packages that you need to import for React to work with?

For basic React development, you need to import react and react-dom. Example:
javascript


import React from 'react';
import ReactDOM from 'react-dom';
How do you add React to a web application?

You can add React to a web application by including the required scripts, such as React and ReactDOM, in your HTML file. Additionally, you need a container element (e.g., <div id="root"></div>) where your React components will be rendered.

What is React.createElement?

React.createElement is a function used to create React elements. It takes at least three arguments: the type of the element (e.g., a string for HTML elements or a React component), optional properties or attributes, and the child elements.
What are the three properties that createElement accepts?

The three properties that createElement accepts are:
Type: The type of the React element (string for HTML elements or a React component).
Props: An object representing the properties or attributes of the element.
Children: The child elements, which can be other React elements or strings.
What is the meaning of render and root?

In the context of React, "render" refers to the process of rendering or displaying React components on the DOM. The "root" typically refers to the root DOM element where the React application is mounted. For example, ReactDOM.render(<App />, document.getElementById('root')) renders the App component into the element with the id "root."
