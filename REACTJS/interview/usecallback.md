* usecallback
useCallback() is used to remember a function between component renders.
Normally, whenever a component re-renders, JavaScript creates the function again.
useCallback() helps React reuse the same function instead.

import { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const sayHello = useCallback(() => {
    console.log("Hello");
  }, []);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}
Now:
1. First render creates the function.
2. You click Increase.
3. Count changes.
4. App renders again.
5. React reuses the previous sayHello function.

"useCallback is a React Hook that remembers a function between renders and creates a new function when its dependencies change."

difference between the usememo and usecallback

useMemo() → Remembers a calculated value.
useCallback() → Remembers a function.

// Remembers the calculated value
const total = useMemo(() => {
  return 100 + 200;
}, []);

// Remembers the function
const greet = useCallback(() => {
  console.log("Hello");
}, []);

useMemo memoizes a value, whereas useCallback memoizes a function reference.