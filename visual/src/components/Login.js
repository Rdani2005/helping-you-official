import React from 'react'

import { NavLink } from 'react-router-dom'

import LogoutButton from './buttons/LogoutButton'

const Login = () => {
    return (
        <ul className="navbar-nav ms-auto me-5">
            <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}>
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/user" className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}>
                    user
                </NavLink>
            </li>
            
            <li className="nav-item">
                <LogoutButton />
            </li>
        </ul>
    )
}

export default Login
