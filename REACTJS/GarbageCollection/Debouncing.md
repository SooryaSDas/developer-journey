1. Debouncing

Debouncing means waiting until the user stops doing something before running a function.
for example a search option
User types:

S
So
Soo
Soor
Soory
Soorya

Without debouncing, you might make an API request for every keystroke.
With debouncing:

S
So
Soo
Soor
Soory
Soorya
       ↓
User stops typing
       ↓
Wait 500ms
       ↓
API request

So debouncing helps reduce unnecessary operations.

example of custom hook:

import {useEffect, useState} from "react";

export function useDebounce(value, delay){
    const [debouncevalue, setDebounceValue] = useState(value); // Store the debounced value

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounceValue(value);
        }, delay); // Start a timer
        return ()=>{
            clearTimeout(timer); //cleanup
        }
    }, [value, delay]);
    return debounceValue;
} 

A new timer starts for every value change, but the previous timer is cancelled.
Every time the user types a new letter, the useEffect runs:
User types
   ↓
New value
   ↓
useEffect runs
   ↓
Clear previous timer
   ↓
Start a new 500ms timer
<!-- --------------------------------------- -->
Type "S"
→ Timer 1 starts (500ms)

Type "o"
→ Timer 1 ❌ cleared
→ Timer 2 starts (500ms)

Type "o"
→ Timer 2 ❌ cleared
→ Timer 3 starts (500ms)

Type "r"
→ Timer 3 ❌ cleared
→ Timer 4 starts (500ms)

Type "y"
→ Timer 4 ❌ cleared
→ Timer 5 starts (500ms)

Type "a"
→ Timer 5 ❌ cleared
→ Timer 6 starts (500ms)

STOP typing
→ Timer 6 completes after 500ms
→ Update debounced value

<!----------------------------------------------------------- -->

<!-- debouncing realtime example -->

import React from 'react';
import { useEffect, useState } from "react";

const users = [
  { id: 1, name: "Soorya" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Anu" },
  { id: 4, name: "John" },
  { id: 5, name: "Sarah" },
];

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}


function App() {
    const [search, setSearch] = useState("");
 const debouncedSearch = useDebounce(search, 500);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div>
     <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {filteredUsers.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
      
    </div>
  )
}

export default App


---------------------------------------------------
without debouncing the normal search

import React from 'react';
import { useState , useEffect} from 'react'

const details = [
    {id: 1, name: "soorya"},
    {id: 2, name: "sandra"},
    {id: 3, name: "yamuna"},
    {id: 4, name: "ganga"}
]

function App() {
    const [name, setName] = useState("");
    const filteredvalue = details.filter((value)=>
            value.name.toLowerCase().includes(name.toLowerCase())
        )
    

    return (
       <div> 
            <input 
                type="text"
                placeholder="Enter the name ..."
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />

        {filteredvalue.map((value)=>(
            <div> 
                <p>{value.name} </p>
            </div>
        ))}
       </div>
    )
}

export default App
