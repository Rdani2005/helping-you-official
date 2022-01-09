import React from 'react'

const Home = () => {
    return (
        <main className="d-flex justify-content-center align-items-center home-page-main">
            <div className="welcome--container flex-column text-white d-flex justify-content-center align-items-center">
                <h1 className="display-1">Helping You!</h1>
                <p className="sublogo">We're here when you need us!</p>
                <a href="#" className="main-button">
                    Let's Start
                </a>
                <p className="creator">Created by Danny Sequeira</p>
            </div>
        </main>
    )
}

export default Home
