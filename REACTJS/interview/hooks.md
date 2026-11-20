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
