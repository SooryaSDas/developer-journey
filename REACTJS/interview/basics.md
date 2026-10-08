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
<!-- ---------------------------------------------------- -->
4. 