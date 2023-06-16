'use client'
import React, { useRef } from 'react';
import './loginGlassmorphism.css';

const LoginGlassmorphism: React.FC = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const data = {username,password}
    
    
    if (usernameRef.current) {
      usernameRef.current.value = '';
    }
    if (passwordRef.current) {
      passwordRef.current.value = '';
    }
  };

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
              <h2>Chat Hive</h2>
              <form onSubmit={handleSubmit}>
                <div className="inputBox">
                  <input type="text" placeholder="username" ref={usernameRef} />
                </div>
                <div className="inputBox">
                  <input type="password" placeholder="password" ref={passwordRef} />
                </div>
                <div className="inputBox">
                  <input type="submit" value="Login" />
                </div>
                <p className="forget">
                  Forget Password? <a href="#">Click Here</a>
                </p>
                <p className="forget">
                  Don't have an account? <a href="#">Sign up</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginGlassmorphism;
