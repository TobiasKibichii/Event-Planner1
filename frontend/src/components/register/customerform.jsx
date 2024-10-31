import React, { useState } from "react";
import axios from "axios";
//import '../../components/form.css';

export const CustomerForm = ({ userAccount }) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/registerCustomer", {
        firstname,
        lastname,
        email,
        password,
        contact,
        gender,
        userAccount,
      });
      alert(res.data.message);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      id="app"
      className="container text-sm bg-slate-500 rounded-xl px-2 py-4 opacity-80 shadow-xl "
    >
      <form
        onSubmit={handleSubmit}
        className="container mx-auto flex flex-col gap-2"
      >
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your last name"
        />
        <label htmlFor="email">Email </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <label htmlFor="password">Password </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <label htmlFor="tel">Contact</label>
        <input
          type="tel"
          name="contact"
          id="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Enter Mobile number"
        />
        <label htmlFor="gender">Gender</label>
        <span className="bg-red-400 flex flex-row gap-2 flex-wrap">
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            //checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            //checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />

          <label htmlFor="other">Other</label>
          <input
            type="radio"
            name="gender"
            value="other"
            id="other"
            //checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
        </span>
        <input
          type="text"
          name="userAccount"
          id="userAccount"
          value={userAccount}
          readOnly
        />
        <button type="submit">register</button>
      </form>
    </div>
  );
};
