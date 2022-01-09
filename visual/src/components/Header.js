import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg" role="navigation">
                <div className="container">
                    <p href="" className="navbar-brand logo">
                        Helping You
                    </p>
                </div>

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
                        <NavLink to="/create" className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}>
                            Create User
                        </NavLink>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Header
