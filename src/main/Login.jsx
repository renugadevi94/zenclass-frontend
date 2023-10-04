import React, { useState,useContext } from 'react';
import "./login.css";
import zen from '../assets/zen.png';

import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";
//import { toast } from 'react-toastify'; 


const Login = () => {
    const { handleSignIn, isLoading } = useContext(DataContext);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [errorMessage, setErrorMessage] = useState(''); // Add error message state



    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        //try {
           handleSignIn({ email, password });
        //   toast.success('Login successful'); // Show success toast
        // } catch (error) {
        //   toast.error('Login failed. Please check your credentials.'); // Show error toast
        // }
      };

    return (
        <div className="login-container">
          <div className="login-form">
          
          <img src={zen} alt="Logo" className="logo" />
            <h2>Login</h2>
           
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
              </div>
              <button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
                
                </button>
              
            </form>
            <Link to='/forgot'
                className='forgot-password btn forgot btn-outline-danger mb-2'
              >
                Forgot Password?
              </Link>
              <Link to='/signup'
                className='btn forgot btn-outline-success'
              >
                Not Register? Sign up
              </Link>
          </div>
        </div>
  );
};

export default Login;