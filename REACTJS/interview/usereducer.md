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