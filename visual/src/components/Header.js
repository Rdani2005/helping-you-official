// ------------------------ Libraries --------------------------
import React from 'react'


import { useAuth0 } from "@auth0/auth0-react";
// ------------------------ Data from other files --------------------------
import Login from './Login';
import Logout from './Logout'
// Header export
const Header = () => {

    const { isAuthenticated } = useAuth0()

    return (


        <header>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg" role="navigation">
                <div className="container">
                    <p href="" className="navbar-brand logo">
                        Helping You
                    </p>
                </div>

                {isAuthenticated ? <Login /> : <Logout />}

            </nav>
        </header>
    )
}

export default Header
