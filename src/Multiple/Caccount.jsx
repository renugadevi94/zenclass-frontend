import React, { useContext, useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import zen from "../assets/zen.png"
import DataContext from '../context/DataContext';

function Caccount() {
    const { handleSignUp, isLoading } = useContext(DataContext);

    const [formData, setFormData] = useState({
        fname: "",
        lName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [formErrors, setFormErrors] = useState({}); 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
      const errors = {};

      // Add validation rules here
      if (formData.email.trim() === "") {
        errors.email = "email is required";
    }
    if (formData.password.trim() === "") {
      errors.password = "password is required";
  }
  if (formData.confirmPassword.trim() === "") {
    errors.confirmPassword = "confirmpassword is required";
}
const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailPattern.test(formData.email)) {
            errors.email = "Invalid email format";
        }

        // Password and Confirm Password must match
        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }


      setFormErrors(errors);
      return Object.keys(errors).length === 0; // Return true if there are no errors
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = validateForm();

        if (isFormValid) {
        handleSignUp(formData);
    }
  };
    return (
      <div className="signup-container">
             <div className="signup-form">
             <img src={zen} alt="Logo" className="logo" />
               <h2>Signup</h2>
               <form onSubmit={handleSubmit}>
                 <div className="form-group">
                                        <label htmlFor="name">First Name</label>
                                        <input
                                            type="text"
                                            
                                            id="name"
                                            name="fname"
                                            value={formData.fname}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lName">Last Name</label>
                                        <input
                                            type="text"
                                           
                                            id="lName"
                                            name="lName"
                                            value={formData.lName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {formErrors.email && <div className="error">{formErrors.email}</div>}
                                    </div>
                                    
                                   
                                   
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                        {formErrors.password && <div className="error">{formErrors.password}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cPassword">Confirm Password</label>
                                        <input
                                            type="password"
                                            
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                        />
                                        {formErrors.confirmPassword && <div className="error">{formErrors.confirmPassword}</div>}
                                    </div>
                                    <button type="submit" className="col-12 btn btn-lg btn-block login__btn mt-4 mb-4 d-flex justify-content-center">
                                        {
                                            isLoading ? (<span className="spinner-border text-warning"></span>) : "Register"
                                        }
                                    </button>
                                    <Link to="/" className="btn forgot btn-outline-success">Go to Login</Link>
                                </form>
                            </div>
                           
                        </div>
                    
               
    )
}


export default Caccount;