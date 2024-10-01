import React, { useState } from "react";
import axios from "axios";
//import '../../components/form.css';

export const CustomerForm = ({ userAccount }) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [contact, setContact] = useState("")
  const [gender, setGender] = useState("male");


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
        userAccount
      });
      alert(res.data.message);
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <div id="app" className="container text-sm border-2 border-red-500">
      <form onSubmit={handleSubmit} className="container mx-auto flex flex-col">
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter First Name"
          required
        />
        <label htmlFor="lastname">Last Name*</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter Last Name"
          required
        />
        <label htmlFor="email">Enter Email* </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
        <label htmlFor="email">Password* </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter email"
          required
        />
        <label htmlFor="tel">Contact*</label>
        <input
          type="tel"
          name="contact"
          id="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Enter Mobile number"
          required
        />
        <label htmlFor="gender">Gender*</label>
        <input
          type="radio"
          name="gender"
          value="male"
          id="male"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          id="female"
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="other"
          id="other"
          checked={gender === "other"}
          onChange={(e) => setGender(e.target.value)}
        />
        Other
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
