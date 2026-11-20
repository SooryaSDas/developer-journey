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
