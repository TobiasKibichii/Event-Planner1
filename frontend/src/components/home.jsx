import React from 'react'
import { Link } from 'react-router-dom'

export const Home =()=> {
    return (
        <div>
            <h1>Welcome to my home page</h1>
            <Link to={'/login'}>login
            </Link>
            <Link to={'/register'}>register
            </Link>
        </div>
        )
}