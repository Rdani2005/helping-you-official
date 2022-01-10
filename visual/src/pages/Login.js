import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <main className="vh-100 login-main">
            <div className="container">

                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-6">
                        <form action="" className=" text-white mt-5 shadow-lg p-3 mb-5 rounded login-form">
                            <div className="card-header  text-center ">
                                <h1>Login To Helping You</h1>
                            </div>
                            <div className="card-body ">
                                <div className="mb-3">
                                    <label 
                                        htmlFor="username" 
                                        className="form-label"
                                    >
                                        Username
                                    </label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="username" 
                                        required
                                        placeholder='Your username'
                                    />
                                </div>
                                <div className="mb-3">
                                    <label 
                                        htmlFor="userpass" 
                                        className="form-label"
                                    >
                                        Password
                                    </label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="your password"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="card-footer container">
                                <div className="row">
                                    <button type="submit" className="btn btn-success mb-3">Login</button>
                                    <NavLink to="/create" className="btn btn-danger">Sign Up</NavLink>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Login
