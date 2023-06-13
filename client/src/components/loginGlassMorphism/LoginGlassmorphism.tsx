import React from 'react'
import './loginGlassmorphism.css'

const LoginGlassmorphism: React.FC = () => {
    return (
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
                            <h2>Login Form</h2>
                            <form>
                                <div className="inputBox">
                                    <input type="text" placeholder="username" name="username"/>
                                </div>
                                <div className="inputBox">
                                    <input type="password" placeholder="password"  name="password"/>
                                </div>
                                <div className="inputBox">
                                    <input type="submit" value="Login" />
                                </div>
                                <p className="forget">
                                    Forget Password ? <a href="#">Click Here</a>
                                </p>
                                <p className="forget">
                                    Don't have an account ? <a href="#">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LoginGlassmorphism