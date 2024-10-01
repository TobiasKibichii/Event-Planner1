import { useState } from "react";
import axios from 'axios';
import "./form.css";

export const Login =()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userAccount, setUserAccount] =useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/login', {
                email,
                password,
                userAccount
            });
            alert(res.data.message);
            } catch (error) {
                alert(error.message);
                }
        }


    return(
        <form onSubmit={handleSubmit} className="py-7 px-3 mx-auto rounded-2xl shadow-green-500 shadow-lg text-sm flex flex-col gap-3 bg-slate-500 opacity-80">
            <h1 className="text-white font-bold text-xl">Login</h1>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" className="px-2 py-2 text-sm rounded-xl shadow-2xl outline-1 outline-green-500" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" className="px-2 py-2 text-sm rounded-xl shadow-2xl outline-1 outline-green-500" />
            <select
                name="userAccount"
                onChange={(e) =>  setUserAccount(e.target.value)}
                className="rounded-xl px-1 py-2 outline-1 outline-green-500"

            >
                <option value="customer">Customer</option>
                <option value="seller">Seller</option>
            </select>
            <button type="submit" className="bg-orange-500 rounded-xl py-2 text-slate-950 font-bold hover:bg-orange-700" >login</button>
        </form>
    );
}