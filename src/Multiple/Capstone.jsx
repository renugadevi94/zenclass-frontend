import React, { useEffect, useState } from 'react';
import './capstone.css';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
//import { ToastContainer, Zoom } from 'react-toastify';

const Capstone = () => {
    const {
        loggedUser,
        trigger,
        setTrigger,
        capStone,
        handleCapStone,
        fetchCapStone,
        isLoading,
    } = useContext(DataContext);

    const [formValues, setFormValues] = useState({
        feCode: '',
        feUrl: '',
        beCode: '',
        beUrl: '',
    });

    const [validationErrors, setValidationErrors] = useState({
        feCode: '',
        feUrl: '',
        beCode: '',
        beUrl: '',
    });

    useEffect(() => {
        fetchCapStone();
    }, [trigger, setTrigger]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm(formValues);
        setValidationErrors(errors);

        if (Object.keys(errors).length === 0) {
            handleCapStone(formValues);
        }
    };

    const validateForm = (values) => {
        const errors = {};
        // Validate URL format
        const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

        if (!values.feCode.match(urlPattern)) {
            errors.feCode = 'Enter a valid URL';
        }

        if (!values.feUrl.match(urlPattern)) {
            errors.feUrl = 'Enter a valid URL';
        }

        if (!values.beCode.match(urlPattern)) {
            errors.beCode = 'Enter a valid URL';
        }

        if (!values.beUrl.match(urlPattern)) {
            errors.beUrl = 'Enter a valid URL';
        }

        return errors;
    };
     return (
    <section className='task__submission'>
            <div className="task__container mt-5" data-bs-toggle="modal" data-bs-target="#myModal">
                <div className="d-flex justify-content-between flexCont">
                    <div className="flexCont__data">
                        <div className="title weight-500 pb-2">
                            {loggedUser.fname ? loggedUser.fname : loggedUser.student.fname} {" "}
                            {loggedUser.lName ? loggedUser.lName : loggedUser.student.lName}
                        </div>
                        <div className="row d-flex align-items-center justify-content-evenly secondaryGreyTextColor">
                            <div className="mx-1">
                                {loggedUser.batch ? loggedUser.batch : loggedUser.student.batch}
                                - Zen Class Student Dashboard
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mx-1 secondaryGreyTextColor text-center pb-2">
                            {capStone ?
                                `submitted on ${capStone.submittedOn.slice(0, 10)}` : "Not Submitted"
                            }
                        </div>
                        <div className="ml-3 mr-1">
                            <div className="marktag tasktag mx-1 px-3 rounded">
                                {capStone ?
                                    `Capstone score : - ${capStone.score}` : "Pending"
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Capstone- 1</h4>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                        <div className="mt-2">
                            <div className="px-4 d-flex flex-column gap-1">
                                <div className="title ">
                                    {loggedUser.fname ? loggedUser.fname : loggedUser.student.fname} {" "}
                                    {loggedUser.lName ? loggedUser.lName : loggedUser.student.lName}
                                </div>
                                <div className="secondaryGreyTextColor">
                                    ({loggedUser.batch ? loggedUser.batch : loggedUser.student.batch} - First Capstone)
                                </div>
                                <div className="secondaryGreyTextColor">Task Title:- Zendesk clone</div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="marktag tasktag rounded">
                                        {capStone ?
                                            `score : - ${capStone.score}` : "Pending"
                                        }
                                    </div>
                                </div>
                                <div className="secondaryGreyTextColor">
                                    {capStone ?
                                        `submitted on ${capStone.submittedOn.slice(0, 10)}` : "Not Submitted"
                                    }
                                </div>
                            </div>
                            <div className="mx-1 secondaryGreyTextColor">
                                <div className="col-12">
                                    <div className="mx-3 mt-1">
                                        <strong>
                                            Description :
                                        </strong>
                                    </div>
                                    <div className="mx-2 py-1 px-2 ">
                                        <p>To identify and implement the Capstone project
                                            as the title given below by meeting all the necessary requirements.</p>
                                        <p><strong>Any specifications on the design?</strong></p>
                                        <ul>
                                            <li>Front-end: Reactjs</li>
                                            <li>Back-end: Nodejs</li>
                                            <li>Database: MongoDB</li>
                                            <li> <strong>Requirements:</strong> </li>
                                            <li>The project should achieve the CODE QUALITY</li>
                                            <li>Use fonts/icons if it’s required in the design.</li>
                                            <li>The use of various charts is required in the design.</li>
                                            <li>
                                                The use of bootstrap/ material CSS is required in the design
                                            </li>
                                        </ul>
                                        <p><strong>How do I submit my work?</strong></p>
                                        <ul>
                                            <li>Push all your work files to GitHub in two different repositories
                                                as given below</li>
                                            <li>Front-end repo name project-name-frontend.</li>
                                            <li>Back-end repo name project-name-backend.</li>
                                            <li>
                                                Deploy your front-end application on Netlify(https://www.netlify.com)
                                                and back-end application on Render(https://render.com/).
                                            </li>

                                        </ul>
                                        <p><strong>Any basic hints/links/reference sites to solve?</strong></p>
                                        <p>https://www.chartjs.org/</p>
                                        <p>https://jwt.io/introduction/</p>                                
                                        <p>https://expressjs.com/</p>

                                        <p><strong>Terms and Conditions?</strong></p>
                                        <ul>
                                            <ul>
                                                <li>You agree to not share this confidential document with
                                                    anyone.&nbsp;
                                                </li>
                                                <li>You agree to open-source your code (it may even look good on
                                                    your profile!). Do not mention our company’s name anywhere
                                                    in the code.
                                                </li>
                                                <li>We will never use your source code under any circumstances for
                                                    any commercial purposes; this is just a basic assessment task.
                                                </li>
                                                <li>
                                                    For capstone, the use case has to be identified by the developer.
                                                </li>
                                            </ul>
                                        </ul>
                                        <p>NOTE: Any violation of Terms and conditions is strictly prohibited.
                                            You are bound to adhere to it.</p>
                                    </div>
                                </div>
                            </div>

                            {
                                capStone &&
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Code</th>
                                            <th scope="col">Submission</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="codeName">Front-end Source code</td>
                                            <td>
                                                <a href={capStone.feCode} target="_blank" >
                                                    {capStone.feCode}  <FaExternalLinkAlt />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="codeName">Front-end Deployed URL</td>
                                            <td>
                                                <a href={capStone.feUrl} target="_blank">
                                                    {capStone.feUrl}   <FaExternalLinkAlt />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="codeName">Back-end Source code</td>
                                            <td>
                                                <a href={capStone.beCode} target="_blank" >
                                                    {capStone.beCode}  <FaExternalLinkAlt />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="codeName">Back-end Deployed URL</td>
                                            <td>
                                                <a href={capStone.beUrl} target="_blank">
                                                    {capStone.beUrl}   <FaExternalLinkAlt />
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            }
                            {!capStone && (
                                <form onSubmit={handleSubmit}>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Code Submission</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="feCode"
                                                        value={formValues.feCode}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter Front-end Source Code URL"
                                                        className="form-control"
                                                    />
                                                    {validationErrors.feCode && (
                                                        <div className="text-danger">{validationErrors.feCode}</div>
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="feUrl"
                                                        value={formValues.feUrl}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter front-end deployed URL"
                                                        className="form-control"
                                                    />
                                                    {validationErrors.feUrl && (
                                                        <div className="text-danger">{validationErrors.feUrl}</div>
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="beCode"
                                                        value={formValues.beCode}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter back-end Source Code URL"
                                                        className="form-control"
                                                    />
                                                    {validationErrors.beCode && (
                                                        <div className="text-danger">{validationErrors.beCode}</div>
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="beUrl"
                                                        value={formValues.beUrl}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter back-end deployed URL"
                                                        className="form-control"
                                                    />
                                                    {validationErrors.beUrl && (
                                                        <div className="text-danger">{validationErrors.beUrl}</div>
                                                    )}
                                                </td>
                                            </tr>
                                            {/* ... (other input fields) */}
                                        </tbody>
                                    </table>
                                    <div className="text-center">
                                        <button className="submit__capstone" type="submit">
                                            {isLoading ? (
                                                <span className="spinner-border spinner-border-sm text-warning"></span>
                                            ) : (
                                                'Submit'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}

<div className="col-12 marksContainer">
                                <div className="row d-flex align-itmes-center justify-content-between mx-1">
                                    <div className="col-12">
                                        <div className="mx-2 mt-3">Comments:</div>
                                        <div className="mx-2 mt-0 mb-3 py-3 px-2 rounded ">
                                            {capStone ?
                                                `${capStone.comment}` : "Not submitted"
                                            }
                                        </div>
                                        <div className="mx-2 mt-3 text-warning">
                                            <strong>Warning</strong>
                                            :- mark may be deducted automatically from your total score
                                            if your submission is beyond the deadline</div>
                                    </div>
                                </div>
                                <hr className="containerDivider mx-1" />
                            </div>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div> */}
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Capstone;

