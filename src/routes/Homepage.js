import React from 'react'
import { Link } from 'react-router-dom'


export const Homepage = () => {
    const userId = 'https://api.chucknorris.io/jokes/random';
    return (
        <div>
            <h1>Homepage</h1>
            <Link to={ `/users/${userId}`}>Users</Link>
        </div>
    )
}
 