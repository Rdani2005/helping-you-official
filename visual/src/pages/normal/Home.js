import React from 'react'

import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {

    const { loginWithRedirect } = useAuth0()
    
    return (
        <main className="d-flex justify-content-center align-items-center home-page-main">
            <div className="welcome--container flex-column text-white d-flex justify-content-center align-items-center">
                <h1 className="display-1">Helping You!</h1>
                <p className="sublogo">Your personal companion!</p>
                <button className="main-button mb-3" onClick={() => loginWithRedirect()}>
                    Let's Start
                </button>
                <p className="creator">Created by Danny Sequeira</p>
            </div>
        </main>
    )
}

export default Home
