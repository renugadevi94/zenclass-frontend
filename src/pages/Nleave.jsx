import React, { useContext, useEffect, useState } from 'react';
import "./leave.css";
import { BiPlus } from "react-icons/bi";
import DataContext from '../context/DataContext';

function Nleave() {
    const { leave, trigger, setTrigger, fetchLeave, handleAddLeave, handleLeaveCancel, isLoading } = useContext(DataContext);
    const [formData, setFormData] = useState({
        reason: "",
        appliedOn: "",
    });

    useEffect(() => {
        fetchLeave();
    }, [trigger, setTrigger]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        handleAddLeave(formData);
        setFormData({
            reason: "",
            appliedOn: "",
        });
    };

    return (
        <section className='leave'>
            <div className="btn__container">
                <button className="btn addBtn" type="button" data-bs-toggle="modal" data-bs-target="#myModal">
                    <BiPlus />Add Leave
                </button>
            </div>
            <br />
            {leave &&
                leave.map((data) => {
                    return (
                        <div
                            className="task__container"
                            key={data._id}
                            data-bs-toggle="modal"
                            data-bs-target={`#leaveModal${data._id}`}
                        >
                            <div className="flexCont">
                                <div className='text-center'>
                                    <div className="title weight-500">Reason</div>
                                    <div className="row d-flex align-items-center justify-content-evenly secondaryGreyTextColor">
                                        <div className="mx-1">{data.reason}</div>
                                    </div>
                                </div>
                                <div className='d-flex flex-column align-items-center'>
                                    <div className="mx-1 secondaryGreyTextColor">Applied on {data.appliedOn}</div>
                                    <div className="ml-3 mr-1">
                                        <div className="marktag mx-1 px-3 rounded">
                                            Status : - {data.status}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add Leave</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body d-flex flex-column gap-1">
                            <div className='d-flex justify-content-center w-75 flex-column mt-2'>
                                <label htmlFor="appliedOn" className="form-label">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="appliedOn"
                                    name="appliedOn"
                                    value={formData.appliedOn}
                                    onChange={handleChange}
                                />
                                <label htmlFor="reason" className="form-label">
                                    Reason
                                </label>
                                <textarea
                                    className="form-control"
                                    id="reason"
                                    name="reason"
                                    placeholder="Enter Reason"
                                    value={formData.reason}
                                    onChange={handleChange}
                                />
                                <div className="modal-footer text-center">
                                    <div className='text-center w-100'>
                                        <button
                                            type="button"
                                            className="btn submit__btn w-100"
                                            onClick={handleSubmit}
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <span className="spinner-border spinner-border-sm text-warning"></span>
                                            ) : (
                                                "Create"
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {leave &&
                leave.map((data) => {
                    return (
                        <div className="modal" id={`leaveModal${data._id}`} key={data._id}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Confirm Leave Cancellation</h4>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div className="modal-body">
                                        <button
                                            type="button"
                                            className="btn submit__btn"
                                            data-bs-dismiss="modal"
                                            onClick={() => handleLeaveCancel(data._id)}
                                        >
                                            Confirm
                                        </button>
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            {!leave.length && (
                <h3 className='text-center mt-3'>No Leave Request raised</h3>
            )}
            
        </section>
    );
}
export default Nleave