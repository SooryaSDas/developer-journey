1. Reactjs
React.js (usually called React) is a JavaScript library for building user interfaces
It was originally developed at Facebook (now Meta)
React lets you build a website from small, reusable pieces called components.

2. Why is React called a library rather than a framework?
React mainly focuses on one specific part of an application: building the user interface (UI).
React = tools for building the UI
Framework = complete construction system
With React, you decide which additional tools you want for things like routing, data fetching, forms, authentication, etc.
React gives you
React provides the core tools for:
Creating components
Managing state
Handling events
Updating the UI efficiently
Using JSX
Sharing data through props/context

React gives you the building blocks for UI. A framework gives you a complete structure for building an application.
React is considered a library because it primarily focuses on building the UI layer of an application. It doesn't enforce a complete application architecture or provide built-in solutions for things like routing, data fetching, and application structure. Developers can choose additional libraries or frameworks based on their requirements.

3. What are the main features of React?

1. Component-Based Architecture - React applications are built using small, reusable components.
2. JSX - React uses JSX, which allows you to write HTML-like syntax inside JavaScript.
3. Virtual DOM - React uses a Virtual DOM to efficiently update the actual DOM.
For example, if you have:

1000 elements
and only one element changes, React can determine what needs to be updated instead of unnecessarily rebuilding everything.
State changes
     ↓
Virtual DOM
     ↓
Compare changes
     ↓
Update required DOM

This process is commonly referred to as "reconciliation".

4. Declarative UI
In React, you describe what the UI should look like, rather than manually telling the browser how to update it.
Instead of:
element.innerHTML = "Hello";

you write:
function App() {
  return <h1>Hello</h1>;
}

React handles the UI updates when the underlying data changes.

5. props
Props allow data to be passed from a parent component to a child component.
function User({ name }) {
  return <h2>Hello {name}</h2>;
}

function App() {
  return <User name="Soorya" />;
}

6. State
State allows a component to store and manage changing data.

7. One-Way Data Flow
React generally follows one-way data flow.

Parent
   ↓
Child
   ↓
Grandchild

Data is typically passed from parent to child through props.

8. Hooks
Hooks allow functional components to use React features such as state and lifecycle-related behavior.
Common hooks:

useState
useEffect
useContext
useRef
useMemo
useCallback

9. Reusability
React encourages you to create reusable components.

10. Strong Ecosystem
React has a large ecosystem of libraries and tools.
For example:

Next.js → React framework
React Router → Routing
TanStack Query → Server-state/data fetching
React Hook Form → Forms
Redux Toolkit → State management

React = Components + JSX + Virtual DOM + Props + State + Hooks + One-way Data Flow + Reusabilit
<!-- ---------------------------------------------------- -->

4. What is JSX?
JSX stands for JavaScript XML.
JSX  is a syntax extension for js that allows us to write the html like code inside of the javascript when building the react components.
function App() {
  return <h1>Hello, Soorya!</h1>;
}

JSX is not HTML
JSX looks like HTML, but it is not HTML.
The browser doesn't directly understand JSX. JSX is transformed into regular JavaScript during the build process.
JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows us to write HTML-like syntax inside JavaScript while building React components. JSX makes React code more readable and expressive. It is not directly understood by the browser; it is transformed into JavaScript during the build process.

Modern React projects may use the newer automatic JSX runtime, so you won't necessarily see React.createElement in the generated code. The important idea is that JSX is transformed into JavaScript function calls that React can use.

In a React project, tools such as Vite, Babel, or other compiler/tooling transform your source code.

5. Why do we use JSX?
We use JSX because it allows us to write HTML-like UI syntax directly inside JavaScript. It makes React components easier to read and maintain, and allows us to easily combine UI markup with JavaScript expressions, conditions, and data. JSX is not required by React, but it provides a more convenient and readable way to describe the UI.

6. Can browsers directly understand JSX?
No. Browsers cannot directly understand JSX.
Browsers understand JavaScript, HTML, CSS, but JSX is not a standard browser language.
No, browsers cannot directly understand JSX. JSX is a syntax extension for JavaScript, so it needs to be transformed into regular JavaScript by the React build tooling before the browser can execute it.

7. What is a component?  
A component is a reusable, independent piece of UI in a React application.
Think of a component as a building block of your website.
Reusability - Create once and use multiple times.
Maintainability - A large application can be divided into smaller pieces.
Separation of concerns - Each component can handle a particular part of the UI.
Easier testing - Small components are easier to test and debug.

A component is a reusable and independent piece of UI in React. It is typically a JavaScript function that returns JSX. Components help us break a large application into smaller, manageable pieces, and they can receive data through props and manage their own state.

8. What is the difference between functional and class components?
The main difference is that functional components are JavaScript functions, while class components are JavaScript classes.
Today, functional components are the standard approach in modern React. Class components are mostly found in older React codebases.
Functional components are JavaScript functions that return JSX and use Hooks such as useState and useEffect to manage state and side effects. Class components are JavaScript classes that extend React.Component and use this.state, this.setState(), and lifecycle methods. Functional components are preferred in modern React because they are simpler, have less boilerplate, and support Hooks.

| Functional Component      | Class Component                              |
| ------------------------- | -------------------------------------------- |
| JavaScript function       | JavaScript class                             |
| Uses Hooks                | Uses lifecycle methods/state APIs            |
| No `this`                 | Uses `this`                                  |
| Less code                 | More boilerplate                             |
| Easier to learn           | More complex                                 |
| Standard for modern React | Mostly legacy/older code                     |
| `useState()` for state    | `this.state` / `this.setState()`             |
| `useEffect()` for effects | Lifecycle methods like `componentDidMount()` |

9. What are props?
Props is short for properties.
Props are used to pass data from a parent component to a child component.
Think of props like arguments passed to a JavaScript function.
