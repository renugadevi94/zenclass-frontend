import React, { useContext, useState } from 'react';
import zen from "../assets/zen.png";
import "./forgot.css";
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';


function Forgot() {
    const { handleForgot, isLoading } = useContext(DataContext);
    const [formData, setFormData] = useState({
        email: "",
        error: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
            error: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email } = formData;
        
        // Basic email validation
        if (!email) {
            setFormData({
                ...formData,
                error: "Email is required.",
            });
            return;
        }

        handleForgot({ email });
    };


    return (

<div className="forgot-container">
            <div className='forgot-page'>
                <div className="img__container">
                    <img src={zen} alt=".." className='logo' />
                </div>
                <div className="form-container"> 
                    <form onSubmit={handleSubmit} className="custom-form">
                        <div className="form-group">
                            <label htmlFor="email">Registered Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Register Email Id"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                        {formData.error && (
                            <div className="text-danger">{formData.error}</div>
                        )}

                        <button
                            type="submit"
                            className="col-12 btn btn-lg btn-block login__btn mt-4 mb-4 d-flex justify-content-center"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span className="spinner-border text-warning"></span>
                            ) : (
                                "Send Reset Link"
                            )}
                        </button>
                    </form>
                </div>
                <div className="centered-link">
                    <Link to="/" className="btn forgot btn-outline-success">
                        Go to Login
                    </Link>
                </div>
            </div>
        </div>
    );
}


        export default Forgot
        
