1. What are Hooks?
Hooks are special React functions that allow function components to use React features.
Common Hooks include:
1) useState
2) useEffect
3) useContext
4) useRef
5) useReducer
6) useMemo
7) useCallback

2. What is useState()?
useState() adds a state variable to a component. It used to store and manage data (state) inside a functional component.
const [count, setCount] = useState(0);
count: current state value
setCount: function to request a state update
0: initial state

<!-- increase count  -->
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={handleIncrement}>
        Increase
      </button>
    </div>
  );
}

export default App;

<!-- Show and Hide Password -->
import { useState } from "react";

function App() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
      />

      <button
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? "Hide" : "Show"}
      </button>

    </div>
  );
}

export default App;

<!-- Updating an Object using useState -->

import { useState } from "react";

function App() {

  const [user, setUser] = useState({
    name: "Soorya",
    age: 25
  });

  function updateName() {

    setUser({
      ...user,
      name: "John"
    });

  }

  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>

      <button onClick={updateName}>
        Update Name
      </button>
    </div>
  );
}

export default App;



2) useEffect Hook in React.js
it's a react hook, used to perform a side effect to a functional component
For example:
- Fetch data from an API.
- Start a timer.
- Update the document title.
- Add event listeners.
- Subscribe to external services.
- Connect to a WebSocket.
- Set up and clean up resources.
These tasks are called side effects.

import { useEffect } from "react";

useEffect(() => {
  // Side effect code

  return () => {
    // Cleanup code (optional)
  };
}, [dependencies]);

Three types of useEffect
Type 1: Without dependency array
----------------------------
import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect executed");
  });

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;
The effect runs after every committed render.

Type 2: Empty dependency array []
----------------------------
useEffect(()=>{
  console.log("useeffect executed");
},[])

The effect runs after the component's initial mount.

Type 3: With dependency array
----------------------------
import { useEffect, useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;
Whenever count changes, React runs the effect again after the updated render commits.

* What is cleanup function in useEffect?
Sometimes, when a component starts an operation, we need to stop that operation when the component is removed or before the effect runs again.
Example: setInterval with cleanup
import { useEffect, useState } from "react";

function Timer() {

  const [count, setCount] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };

  }, []);

  return <h1>Timer: {count}</h1>;
}

export default Timer;

Component mounts.
useEffect executes.
setInterval starts.
Every second, count increases.
If the component unmounts, cleanup executes.
clearInterval stops the timer.
Without cleanup, timers or subscriptions can continue running after the component is removed, causing unwanted work and potentially memory leaks.

3) useRef in React.js
useref is a react hook that allow us to store the value that persist between renders without causing the component to re-render when that the value change.
useState → Stores data and updates the UI when the data changes.
useRef → Stores data without triggering a re-render when the data changes.

syntax:
import {useRef} from "react";
const myRef = useRef(initialvalue);

const countRef = useRef(0);
To change the value:
countRef.current = 10;
To access the value:
console.log(countRef.current);

import { useRef } from "react";

function Counter() {

  const countRef = useRef(0);

  const increase = () => {
    countRef.current = countRef.current + 1;

    console.log(countRef.current);
  };

  return (
    <div>
      <h1>Count: {countRef.current}</h1>

      <button onClick={increase}>
        Increase
      </button>
    </div>
  );
}

export default Counter;
output
Console: 1
UI: 0

Because updating countRef.current does not trigger a re-render.
The ref value is changing, but React is not updating the UI.

* Main difference between useState and useRef
useState
store the component state
updating it triggers a re-render when the value change
used for update ui
return an array
state updates are managed by react
used for counters, forms, toggles

useRef
store the mutalble values
updating is does not trigger a rerender
used to store values without updating the ui
ref value change through .current
returns an object
Used for DOM access, timers, previous values

useState → React knows the state has changed and schedules a render.
useRef → React stores the changed value, but does not schedule a render.

useref Let's explore 8 real-world scenarios.
* Automatically focus an input field
* Scroll to a particular section ->  contactRef.current.scrollIntoView({
      behavior: "smooth"
    });
* Video play and pause controls -> videoRef.current.play();, videoRef.current.pause();
* Store timer IDs – Stop and start a timer
import React from 'react';
import { useState, useRef } from 'react'

function App() {
  const [timer, setTimer] = useState(0)
  const timerref = useRef(null);
  const startTimer = ()=>{
    if(timerref.current !== null) return;
    timerref.current = setInterval(()=>{
      setTimer((prev)=> prev+1)
    },1000)
  }

  const stopTimer = ()=>{
    clearInterval(timerref.current)
    timerref.current = null;
  }
  
  const resetTimer = ()=>{
    stopTimer()
    setTimer(0)
  }
  return (
    <div>
      <h2>Timer: {timer} </h2>
      <button onClick={startTimer}>Start </button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>

    </div>
  )
}

export default App

* Prevent multiple API requests from a button

import { useRef, useState } from "react";

function Payment() {

  const isSubmitting = useRef(false);

  const [message, setMessage] = useState("");

  const handlePayment = async () => {

    if (isSubmitting.current) {
      return;
    }

    isSubmitting.current = true;

    setMessage("Processing payment...");

    try {

      const response = await fetch("/api/payment", {
        method: "POST"
      });

      if (!response.ok) {
        throw new Error("Payment failed");
      }

      setMessage("Payment successful!");

    } catch (error) {

      setMessage(error.message);

    } finally {

      isSubmitting.current = false;

    }
  };

  return (
    <div>
      <button onClick={handlePayment}>
        Pay Now
      </button>

      <p>{message}</p>
    </div>
  );
}

export default Payment;

* Store the previous value
import React from 'react';
import { useState, useEffect, useRef } from 'react'

function App() {
  const [search, setSearch] = useState("")
  const searchRef = useRef(false);
  useEffect(()=>{
    if(searchRef.current === null) return;
    searchRef.current = search;
  },[search])

  return (
    <div>
     <input 
      type="text"
      placeholder="enter the full address"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
     />

     <h2>Current value : {search} </h2>
     <h2>Previous value : {searchRef.current} </h2>
    </div>
  )
}

export default App

* Click outside to close a dropdown or modal
import { useEffect, useRef, useState } from "react";

function ProfileMenu() {

  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {

    function handleClickOutside(event) {

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }

    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  return (
    <div ref={menuRef}>

      <button onClick={() => setOpen(!open)}>
        Profile
      </button>

      {open && (
        <div>
          <p>My Account</p>
          <p>Settings</p>
          <p>Logout</p>
        </div>
      )}

    </div>
  );
}

export default ProfileMenu;

* Click outside to close a dropdown or modal

import { useEffect, useRef, useState } from "react";

function ProfileMenu() {

  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {

    function handleClickOutside(event) {

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }

    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  return (
    <div ref={menuRef}>

      <button onClick={() => setOpen(!open)}>
        Profile
      </button>

      {open && (
        <div>
          <p>My Account</p>
          <p>Settings</p>
          <p>Logout</p>
        </div>
      )}

    </div>
  );
}

export default ProfileMenu;


4) useContext
useContext is a React Hook that allows us to share data between multiple components without passing props manually through every intermediate component.
How to use useContext – Step by step
There are three important things you need to understand:
1. createContext() – Creates a Context.
2. Provider – Makes data available to components.
3. useContext() – Reads the shared data.
Let's build a complete example.

Step 1: Create a Context
Create a file called UserContext.jsx.

import { createContext } from "react";
export const UserContext = createContext();
----------------------------------------------
Step 2: Create a Provider
Create a file called UserProvider.jsx.

import { useState } from "react";
import { UserContext } from "./UserContext";

function UserProvider({ children }) {

  const [username, setUsername] = useState("Soorya");

  return (
    <UserContext.Provider
      value={{ username, setUsername }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
----------------------------------------------
Step 3: Wrap your application with Provider
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import UserProvider from "./UserProvider";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <UserProvider>
    <App />
  </UserProvider>
);
----------------------------------------------
Step 4: Access Context using useContext
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {

  const { username } = useContext(UserContext);

  return (
    <div>
      <h1>Welcome {username}</h1>
    </div>
  );
}

export default Profile;
---------------------------------------------
Step 5: Use the Profile component
import Profile from "./Profile";

function App() {

  return (
    <div>
      <h1>My Application</h1>

      <Profile />

    </div>
  );
}

export default App;


5) useReducer()
useReducer is a React Hook used for managing complex state logic. It accepts a reducer function and an initial state, and returns the current state and a dispatch function.

import { useReducer } from "react";

function reducer(state, action) {

  if (action.type === "INCREMENT") {
    return state + 1;
  }

  if (action.type === "DECREMENT") {
    return state - 1;
  }

  return state;
}

function Counter() {

  const [count, dispatch] = useReducer(
    reducer,
    0
  );

  return (
    <div>
      <h1>Count: {count}</h1>

      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +
      </button>

      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        -
      </button>
    </div>
  );
}

export default Counter;

Also, reducer functions should be pure:
- Don't make API calls inside reducers.
- Don't use setTimeout or setInterval inside reducers.
- Don't modify external variables.
- Don't directly modify the existing state.

with switch case
import React from 'react';
import { useReducer } from 'react'

const intialstate = 0

const reduce = (state, action)=>{
  switch(action){
    case "Increment":
      return state + 1;
    
    case "Decrement":
     return state - 1;

    case "RESET":
      return intialstate;

    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(
    reduce, intialstate
  )

  return (
    <div>
      <h2>Count: {count} </h2>
      <button onClick={()=>dispatch("Increment")}>Increment </button>
       <button onClick={()=>dispatch("Decrement")}>Decrement </button>
        <button onClick={()=>dispatch("RESET")}>reset </button>
    </div>
  )
}

export default App


Imagine you have these operations:
1. Add product
2. Delete product
3. Increase quantity
4. Decrease quantity
5. Clear cart
* With useState
You can create separate functions for each operation:
const [cart, setCart] = useState([]);

const addProduct = () => {};
const deleteProduct = () => {};
const increaseQuantity = () => {};
const decreaseQuantity = () => {};
const clearCart = () => {};

* With useReducer
You create one reducer function containing all the operations:
function cartReducer(state, action) {

  switch (action.type) {

    case "ADD":
      return [...state, action.product];

    case "DELETE":
      return state.filter(
        item => item.id !== action.id
      );

    case "INCREASE":
      return state.map(item =>
        item.id === action.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREASE":
      return state.map(item =>
        item.id === action.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    case "CLEAR":
      return [];

    default:
      return state;
  }
}

dispatch({ type: "ADD", product });
dispatch({ type: "DELETE", id: 1 });
dispatch({ type: "INCREASE", id: 1 });
dispatch({ type: "DECREASE", id: 1 });
dispatch({ type: "CLEAR" });