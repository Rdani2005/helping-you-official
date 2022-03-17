import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <header>
        <ul>
            <li><NavLink to="/blogs">Blogs</NavLink></li>


        </ul>


    </header>
  )
}

export default NavBar