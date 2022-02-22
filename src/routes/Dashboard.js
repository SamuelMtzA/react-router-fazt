import React from 'react'
import { useNavigate, Link, Outlet } from 'react-router-dom';

export const Dashboard = () => {
    const navigate = useNavigate();
    //redireccionar de forma programada
    const handleClick = () => {
        navigate('/');
        console.log('The link was clicked.');
    };
    return (

        <div>
            <h1>Dashboard</h1>
            <button onClick={handleClick}>
                Logout
            </button>
            <br/>

            <Link to='/welcome'>
                say hello
            </Link>
            <br/>

            <Link to='/goodbye'>
                say bye
            </Link>
        </div>
    )
}
