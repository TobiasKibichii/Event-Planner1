import React, { useState } from "react";
import { Login } from "./login";
//import { Navbar } from "./Navbar";
import { Register } from "./register/register";

export const Home = () => {
  const [showForm, setShowForm] = useState(null);

  const toggleForm = (formType) => {
    setShowForm((prev) => (prev === formType ? null : formType));
  };

  function InfoText() {
    return (
      <div className="bg-green-300 opacity-70 w-[90%] text-sm px-4 py-6 rounded-r-2xl shadow-xl shadow-slate-900 ">
        <p className="text-black font-semibold">
          {" "}
          We responsible for organizing and coordinating various aspects of events,
          such as <i> <b>weddings, conferences, and parties</b></i>. They manage logistics,
          including venue selection, catering, and entertainment, ensuring that
          everything runs smoothly. .{" "}
        </p>
      </div>
    );
  }

  return (
    <div className="container bg-homepage_bg h-screen mx-auto">
      <h1 className="text-white font-extrabold text-xl">
        CANET EVENT ALLOCATORS
      </h1>

      <div className="w-full flex flex-row gap-4 justify-end text-sm text-white py-6">
        <button onClick={() => toggleForm("login")} className="bg-green-500 opacity-80 py-[6px] px-3 rounded-tr-2xl rounded-bl-2xl shadow-white shadow-lg">
          {showForm === "login" ? "Hide Login" : "Login"}
        </button>

        <button onClick={() => toggleForm("register")} className="bg-green-500 opacity-80 py-[6px] px-3 rounded-tr-2xl rounded-bl-2xl shadow-white shadow-lg" >
          {showForm === "register" ? "Hide Register" : "Register"}
        </button>
      </div>

      {showForm === "login" && <Login />}
      {showForm === "register" && <Register />}

    </div>
  );
};
