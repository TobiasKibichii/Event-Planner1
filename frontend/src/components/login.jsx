import { useState } from "react";
import axios from 'axios';

export const Login =()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/login', {
                email,
                password,
            });
            alert(res.data.message);
            } catch (error) {
                alert(error.message);
                }
        }


    return(
        <form onSubmit={handleSubmit}>
            <h1>login</h1>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            <button type="submit">login</button>
        </form>
    );
}