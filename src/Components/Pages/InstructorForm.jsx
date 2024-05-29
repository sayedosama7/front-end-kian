/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Navbar from '../Navigation/NavBar';
import { useLocation, useNavigate } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import axios from 'axios';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { pathname } = useLocation();
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cv: '',
        job: '',
        phone: '',
    });
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        iconColor: "#342871",
        color: "#342871",
        background: "#fff",
        padding: "10px",
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const selectedFile = files[0];
        setFormData({ ...formData, [name]: selectedFile });
        setErrors({ ...errors, [name]: '' });

        if (selectedFile && selectedFile.type !== 'application/pdf') {
            setErrors({ ...errors, [name]: 'File must be in PDF format' });
        }
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requiredFields = ['name', 'email', 'cv', 'job', 'phone'];
        const emptyFields = requiredFields.filter(field => !formData[field]);

        if (emptyFields.length > 0) {
            const errorObj = {};
            emptyFields.forEach(field => {
                errorObj[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
            });
            setErrors(errorObj);
            return;
        }

        const formDataForUpload = new FormData();
        formDataForUpload.append('name', formData.name);
        formDataForUpload.append('email', formData.email);
        formDataForUpload.append('cv', formData.cv);
        formDataForUpload.append('job', formData.job);
        formDataForUpload.append('phone', formData.phone);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/create_request', formDataForUpload, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const { data } = response;
            navigate('/', { replace: true });
            Toast.fire({
                icon: "success",
                title: "Your Request Has Been Sent Successfully"
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div>
            <Navbar />
            <div className="container sign-up-page">
                <div className="row">
                    <div className="col-md-6 sign-up text-center">
                        <div>
                            <h2 className="fw-bold text-primary animate__animated animate__rollIn">Welcome to our largest community</h2>
                            <h6 className="fw-bold animate__animated animate__rollIn">Let's learn something new today!</h6>
                        </div>
                        <img src="./images/login/log-in.svg" className="img-fluid animate__animated animate__rollIn" alt="..." />
                    </div>

                    <div className="col-md-6 m-auto animate__animated animate__zoomInDown signup-inputs p-5">
                        <h2 className="text-primary fw-bold">join our  <br />team</h2>
                        <h6 className='fw-bold'>Nice to see you! please fill out these fields.</h6>

                        <form className='mt-4 signup-form' onSubmit={handleSubmit} autoComplete='on' encType="multipart/form-data">
                            <div className="form-group animate__animated animate__zoomInDown position-relative">
                                <label htmlFor='name' className="text-primary">name *</label>
                                <input id='name' type="text" name='name' value={formData.name} onChange={handleInputChange} className="form-control" placeholder="Your name" autoComplete="name" />
                                <i className="fa-solid fa-user input-icon text-muted"></i>
                                {errors.name && <h6 className="error-log">{errors.name}</h6>}
                            </div>

                            <div className="form-group animate__animated animate__zoomInDown position-relative">
                                <label htmlFor='email' className="text-primary">E-mail *</label>
                                <input id='email' type="email" name='email' value={formData.email} onChange={handleInputChange} className="form-control" placeholder="E-mail" autoComplete="email" />
                                <i className="fa-solid fa-envelope input-icon text-muted"></i>
                                {errors.email && <h6 className="error-log">{errors.email}</h6>}
                            </div>

                            <div className="form-group animate__animated animate__zoomInDown position-relative">
                                <label htmlFor='phone' className="text-primary">Phone *</label>
                                <input id='phone' type="tel" name='phone' value={formData.phone} onChange={handleInputChange} className="form-control" placeholder="Phone" autoComplete="tel" />
                                <i className="fa-solid fa-phone input-icon text-muted"></i>
                                {errors.phone && <h6 className="error-log">{errors.phone}</h6>}
                            </div>

                            <div className="form-group animate__animated animate__zoomInDown position-relative">
                                <label htmlFor='job' className="text-primary">job *</label>
                                <input id='job' type="text" name='job' value={formData.job} onChange={handleInputChange} className="form-control" placeholder="job" autoComplete="address-level2" />
                                <i className="fas fa-briefcase input-icon text-muted"></i>
                                {errors.job && <h6 className="error-log">{errors.job}</h6>}
                            </div>

                            <div className="form-group animate__animated animate__zoomInDown position-relative">
                                <label htmlFor='cv' className="text-primary">cv *</label>
                                <input id='cv' type="file" name='cv' onChange={handleFileChange} className="" autoComplete="new-cv" />
                                {errors.cv && <h6 className="error-log">{errors.cv}</h6>}
                            </div>

                            <input className="btn-submit" type="submit" value="send" />
                        </form>
                    </div>
                </div>
            </div>
            <ScrollToTop smooth color='#fff' style={{ backgroundColor: '#372B73' }} className='animate__animated animate__flash animate__infinite infinite animate__slower' />
        </div>
    );
};

export default SignUp;
