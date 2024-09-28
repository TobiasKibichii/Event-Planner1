import React, { useState } from "react";
import { Login } from "./login";
import { Register } from "./register/register";

export const Home = () => {
  const [showForm, setShowForm] = useState(null);

  const toggleForm = (formType) => {
    setShowForm((prev) => (prev === formType ? null : formType));
  };

  return (
    <div>
      <h1>Welcome to my home page</h1>

      <button onClick={() => toggleForm("login")}>
        {showForm === "login" ? "Hide Login" : "Login"}
      </button>

      <button onClick={() => toggleForm("register")}>
        {showForm === "register" ? "Hide Register" : "Register"}
      </button>

      {showForm === "login" && <Login />}
      {showForm === "register" && <Register />}
    </div>
  );
};
