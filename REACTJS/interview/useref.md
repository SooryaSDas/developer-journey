
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
