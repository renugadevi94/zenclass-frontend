import React, { useEffect, useState } from 'react';
import './portfolio.css';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
function Cportfolio() {
    const {
        portfolio,
        fetchPortfolio,
        handlePortfolio,
        isLoading,
        trigger,
        setTrigger,
    } = useContext(DataContext);

    useEffect(() => {
        fetchPortfolio();
    }, [trigger, setTrigger]);

    const [formData, setFormData] = useState({
        githubURL: '',
        portfolioURL: '',
        resumeURL: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        handlePortfolio(formData);
        setFormData({
            githubURL: '',
            portfolioURL: '',
            resumeURL: '',
        });
    };

    return (
        <section className="portfolio">
            <div className="row mx-0">
                <div className="col-sm-12 col-md-6 portfolio__area">
                    <div>
                        <div className="widthfit mx-3 px-2">
                            <label htmlFor="githubURL">Github URL</label>
                            <input
                                type="url"
                                className="form-control"
                                id="githubURL"
                                name="githubURL"
                                placeholder="Enter Github URL"
                                value={formData.githubURL}
                                onChange={handleChange}
                            />

                            <label htmlFor="portfolioURL">Portfolio URL</label>
                            <input
                                type="url"
                                className="form-control"
                                id="portfolioURL"
                                name="portfolioURL"
                                placeholder="Enter Portfolio URL"
                                value={formData.portfolioURL}
                                onChange={handleChange}
                            />

                            <label htmlFor="resumeURL">Resume URL</label>
                            <input
                                type="url"
                                className="form-control"
                                id="resumeURL"
                                name="resumeURL"
                                placeholder="Enter Resume URL"
                                value={formData.resumeURL}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <button className="btn button" onClick={handleSubmit} type="button" disabled={isLoading}>
                                {isLoading ? (
                                    <span className="spinner-border spinner-border-sm text-warning"></span>
                                ) : (
                                    'Submit'
                                )}
                            </button>
                        </div>
                    </div>
                    <p className="note">
                        <span> Note </span>: You won't be able to submit when the Portfolio is under
                        <b> Review</b> or <b> Reviewed</b>.
                    </p>
                </div>
                <div className="col-sm-12 col-md-6 review__area text-center">
                    <div className="border-bottom text-center">
                        <h3 className="review__header">Portfolio Review</h3>
                    </div>
                    <div className="row secondaryGreyTextColor">
                        <div className="col-12 col-sm-6">
                            <div className="port_item my-4 d-flex flex-column">
                                <span className="port_grey">Status:</span>
                                <span>{portfolio ? `${portfolio.status}` : 'Not Submitted'}</span>
                            </div>
                            <div className="port_item my-4 d-flex flex-column">
                                <span className="port_grey">Comment:</span>
                                <span>{portfolio ? `${portfolio.comment}` : 'Not Submitted'}</span>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="port_item my-4 d-flex flex-column">
                                <span className="port_grey">Date:</span>
                                <span>{portfolio ? `${portfolio.submittedOn.slice(0, 10)}` : 'Not Submitted'}</span>
                            </div>
                            <div className="port_item my-4 d-flex flex-column ">
                                <span className="port_grey">Reviewed By:</span>
                                <span>{portfolio ? `${portfolio.reveiwedBy}` : 'Not Submitted'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cportfolio