import { Login } from "./login";
import { Register } from "./register/register";
import { useState } from "react";
import { FaShoppingCart, FaUserCircle, FaSearch, FaArrowDown } from "react-icons/fa";
export const Navbar = () => {
  const [showForm, setShowForm] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = (formType) => {
    setShowForm((prev) => (prev === formType ? null : formType));
  };
  return (
    <nav className="navbar">
      <div className="top-bar">
        <h1 className="title">CANET EVENT ALLOCATORS</h1>
        <ul className="links">
          <li>
            <a href="/home">Home</a>
          </li>
          <li
            className="dropd"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <span>items <FaArrowDown /> </span>
            {isOpen && (
              <ul className="dropd-list">
                <li>Speakers</li>
                <li>Tents</li>
                <li>Chairs</li>
              </ul>
            )}
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="cart-profile">
          <span className="cart"><FaShoppingCart /> <p>10</p></span>
          <span> <FaUserCircle /></span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="search">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search item..."
          />
          <FaSearch className="search-icon" size={25} />
        </div>
        <div className="sign-btns">
          <button className="login-btn" onClick={() => toggleForm("login")}>
            login
          </button>
          <button className="sign-up" onClick={() => toggleForm("register")}>
            sign up
          </button>
        </div>
      </div>
      {showForm === "login" && <Login />}
      {showForm === "register" && <Register />}
    </nav>
  );
};
