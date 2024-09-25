import React, { useState } from 'react'

export const SellerForm =({userAccount})=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("http://localhost:5000/register", {
          email,
          password,
        });
        alert(res.data.message);
      } catch (error) {
        alert(error.message);
      }
    };
    return (
      <form onSubmit={handleSubmit}>
        <input
          defaultValue={userAccount}
        />
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
        <button type="submit">register</button>
      </form>
    );
}