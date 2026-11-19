1. First, what is useMemo?
useMemo is a React Hook used to remember the result of a calculation so React doesn't need to calculate it again unnecessarily.
const result = useMemo(() => {
  return calculation;
}, [dependencies]);

2. Why do we need useMemo?
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const calculation = 10 + 20;

  return (
    <>
      <h1>Count: {count}</h1>
      <h2>Calculation: {calculation}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}

export default App;

this time the calcualation will call every time, react know the result but also it will re-render. so it was the basic code the 3 to 4 time consuming calculation code have some issues. 
------------------------------------------------------------
* Understanding dependency array in the shopping cart
import { useState, useMemo } from "react";

function App() {
  const [cart, setCart] = useState([
    { id: 1, item: "laptop", price: 50000 },
    { id: 2, item: "keyboard", price: 1900 },
    { id: 3, item: "mouse", price: 800 },
  ])

  const [count, setCount] = useState(0);

  const totalamount = useMemo(() => {
    console.log("total amount calculating");
    return cart.reduce((total, item) => {
      return total + item.price
    }, 0)
  }, [cart])

  return (
    <>
      <h1>Shopping Cart</h1>


      {cart.map((data) => {
        return (
          <div key={data.id}>
            <p>Product: {data.item} price: {data.price} </p>
          </div>
        )
      })}

      <h3>Total number of product : {cart.length} </h3>
      <h3>Total: {totalamount} </h3>

      <h2>Count: {count} </h2>

      <button onClick={() => setCount(count + 1)}>
        Count +
      </button>


      <button onClick={() => setCount(count - 1)}>
        Count -
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button> <br /> <br />


      <button onClick={() => {
        setCart([
          ...cart,
          {
            id: cart.id + 1,
            item: "monitor",
            price: 5000
          }
        ])
      }}>
        add monitor
      </button>

      <button onClick={() => {
        setCart(cart.filter((data) => data.item !== "mouse"))
      }}>
        remove mouse
      </button>

      <button onClick={() => setCart(cart.filter((data) => data.item !== "laptop"))} >
        remove the laptop
      </button>

      <button onClick={() => setCart([])}>
        Clear cart
      </button>
    </>
  );
}

export default App;
----------------------------------------------------------------
