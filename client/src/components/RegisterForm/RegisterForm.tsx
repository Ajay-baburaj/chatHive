
"use client"

import React from 'react'
import './RegisterForm.css'

const RegisterForm = () => {
    return (
        <>
            <div>
                <section>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="box">
                        <div className="square square-0"></div>
                        <div className="square square-1"></div>
                        <div className="square square-2"></div>
                        <div className="square square-3"></div>
                        <div className="square square-4"></div>
                        <div className="container">
                            <div className="form">
                                <h2>Register</h2>
                                <form>
                                    <div className="inputBox">
                                        <input type="text" placeholder="username" name="username" />
                                    </div>
                                    <div className="inputBox">
                                        <input type="email" placeholder="email" name="email" />
                                    </div>
                                    <div className="inputBox">
                                        <input type="number" placeholder="mobile" name="mobile" />
                                    </div>
                                    <div className="inputBox">
                                        <input type="password" placeholder="password" name="password" />
                                    </div>
                                    <div className="inputBox">
                                        <input type="password" placeholder="confirm password" name="confirmPassword" />
                                    </div>
                                    <div style={{marginTop:'15px'}}>
                                        <button type="submit" style={{borderRadius:'20px',padding:'8px',backgroundColor:'whitesmoke',color:'grey'}}>Register</button>
                                    </div>
    
                                    <p className="forget">
                                       already registered  <a href="#">Login</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default RegisterForm