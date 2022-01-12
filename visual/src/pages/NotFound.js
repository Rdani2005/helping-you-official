import React from 'react'
import {Link} from 'react-router-dom'
const NotFound = () => {
    return (
        <main className="not-found--main d-flex justify-content-center align-items-center">
            <div className="not-found--container flex-column text-white d-flex justify-content-center align-items-center">
                <p className="rotate-scale-up display-1 font-bold">
                    404
                </p>
                <p className='display-4'>
                    Page Not Found. Try Again Later
                </p>
                <Link to="/" className='btn btn-success'>Go to Home</Link>
            </div>       
        </main>
    )
}

export default NotFound
