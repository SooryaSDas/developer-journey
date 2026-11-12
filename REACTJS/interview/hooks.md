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

What is cleanup function in useEffect?
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