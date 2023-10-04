import React, { useContext, useEffect, useState } from 'react';
import "./queries.css";
import { BiPlus } from "react-icons/bi";
import DataContext from '../context/DataContext';
//import { ToastContainer, Zoom } from "react-toastify";

const Queries = () => {
    const { query, trigger, setTrigger, fetchQuery, handleAddQuery, handleQueryCancel, isLoading } = useContext(DataContext);

    useEffect(() => {
        fetchQuery();
    }, [trigger, setTrigger]);

    const [formData, setFormData] = useState({
        queryTitle: "",
        queryDesc: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        handleAddQuery(formData);
        setFormData({
            queryTitle: "",
            queryDesc: "",
        });
    };

    return (
        <section className='queries'>
            <div className="btn__container">
                <button className="btn addBtn" type="button" data-bs-toggle="modal" data-bs-target="#myModal">
                    <BiPlus />Add Query
                </button>
            </div>
            <br />
            {
                query &&
                query.map((data) => {
                    return (
                        <div className="task__container" key={data._id} data-bs-toggle="modal" data-bs-target={`#${data._id}`}>
                            <div className="d-flex flex-column gap-2 align-items-center">
                                <div>
                                    <div className="query__group">
                                        <div className="title weight-500">Query Title:</div>
                                        <div className="secondaryGreyTextColor">
                                            {data.queryTitle}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="query__group">
                                        <div className="title weight-500">Query Description:</div>
                                        <div className="secondaryGreyTextColor">
                                            {data.queryDesc}
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex flex-column align-items-center'>
                                    <div className="secondaryGreyTextColor">Applied on {data.appliedOn.slice(0, 10)}</div>
                                    <div className="ml-3 mr-1">
                                        <div className="marktag mx-1 px-3 rounded">
                                            Status : - {data.status}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add Query</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body d-flex flex-column gap-1">
                        <div className="modal-body d-flex flex-column align-items-center gap-1">
                                <label htmlFor="queryTitle">Query Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="queryTitle"
                                    name="queryTitle"
                                    placeholder="Enter Title/Topic"
                                    value={formData.queryTitle}
                                    onChange={handleChange}
                                />
                                <label htmlFor="queryDesc">Query Description</label>
                                <textarea
                                    className="form-control"
                                    id="queryDesc"
                                    name="queryDesc"
                                    placeholder="Enter Description"
                                    value={formData.queryDesc}
                                    onChange={handleChange}
                                />
                                <div className="modal-footer text-center">
                                    <div className='text-center w-100'>
                                        <button type="button" className="btn submit__btn w-100" onClick={handleSubmit}>
                                            {isLoading ? (
                                                <span className="spinner-border spinner-border-sm text-warning"></span>
                                            ) : (
                                                "Create"
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-danger mx-auto d-block" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {
                query && query.map((data) => {
                    return (
                        <div className="modal" key={data._id} id={data._id}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Delete Query - {data.queryTitle}</h4>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div className="modal-body d-flex flex-column gap-1">
                                        <div className="d-flex gap-3">
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleQueryCancel(data._id)}
                                                data-bs-dismiss="modal">
                                                Confirm Delete
                                            </button>
                                            <button className="btn btn-info" data-bs-dismiss="modal">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {
                !query.length
                &&
                <h3 className='text-center mt-3'>No Queries raised</h3>
            }
            
        </section>
    )
}

export default Queries;