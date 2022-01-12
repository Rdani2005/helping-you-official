import React from 'react'
import { NavLink } from 'react-router-dom'
import LoginButton from './buttons/LoginButton'

const Logout = () => {
    return (
        <ul className="navbar-nav ms-auto me-5">
            <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}>
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}>
                    About Us
                </NavLink>
            </li>
            
            <li className="nav-item">
                <LoginButton />
            </li>
        </ul>
    )
}

export default Logout
