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
