import React, { useEffect, useState } from 'react';
import './reset.css';


import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

function Reset() {
  
    const {
        handleReset,
        setResetToken,
        isLoading
    } = useContext(DataContext);

    const { id } = useParams();
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setResetToken(id);
    }, [id, setResetToken]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform manual validation
        const newErrors = {};
        if (!formData.password) {
            newErrors.password = "Required";
        
         }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Required";
        } else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "Password Must Match";
        }

        if (Object.keys(newErrors).length === 0) {
            handleReset(formData);
            setFormData({
                password: "",
                confirmPassword: ""
            });
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="reset-container">
            <div className="row m-0">
                <div className="col-md-8">
                    
                    <div className="row">
                        <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                            <div className="col-10 col-md-8 col-lg-6">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="password">New Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            placeholder="Enter New Password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                        />
                                        {errors.password && <div className="text-danger">{errors.password}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cPassword">Confirm Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            placeholder="Confirm New Password"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                        />
                                        {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                                    </div>
                                    <button type="submit" className="col-12 btn btn-lg btn-block login__btn mt-4 mb-4 d-flex justify-content-center">
                                        {isLoading ? <span className="spinner-border text-warning"></span> : "Update Password"}
                                    </button>
                                </form>
                            </div>
                            <Link to="/" className="btn forgot btn-outline-success ">Go to Login</Link>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}
export default Reset;