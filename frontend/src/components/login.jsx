import { useState } from "react";
import axios from "axios";
import "./form.css";
import { FaTimes } from 'react-icons/fa';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userAccount, setUserAccount] = useState("");
  const [close, setClose] = useState(false);

  function closeFun(){
    setClose(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
        userAccount,
      });
      alert(res.data.message);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="login-form"
    >
      <span className="bg-black ">
      <FaTimes onClick={() => closeFun} className="h-10 text-white" />
      <h1>Login</h1>
      </span>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <select
        name="userAccount"
        onChange={(e) => setUserAccount(e.target.value)}
      >
        <option value="customer">Customer</option>
        <option value="seller">Seller</option>
      </select>
      <button
        type="submit"
      >
        login
      </button>
    </form>
  );
};
