import React, { useState } from "react";
import { Login } from "./login"; 
import { Register } from "./register/register"; 

export const Home = () => {
  
  const [showForm, setShowForm] = useState(null);

  return (
    <div>
      <h1>Welcome to my home page</h1>

      
      <button onClick={() => setShowForm("login")}>Login</button>

      <button onClick={() => setShowForm("register")}>Register</button>

      {showForm === "login" && <Login />}
      {showForm === "register" && <Register />}
    </div>
  );
};
