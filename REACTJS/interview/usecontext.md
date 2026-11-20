
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

