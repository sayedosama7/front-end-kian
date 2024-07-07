/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from '../Navigation/NavBar';
import { UserContext } from '../../UserContext';  // Import UserContext

const SignUp = () => {
    const { auth, setAuth } = useContext(UserContext);  // Destructure setAuth and auth from UserContext
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        city: '',
        phone: '',
    });

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.username) newErrors.username = 'Please enter your username.';
        if (!formData.email) newErrors.email = 'Please enter your email.';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email.';
        if (!formData.phone) newErrors.phone = 'Please enter your phone.';
        if (!formData.city) newErrors.city = 'Please enter your city.';
        if (!formData.password) newErrors.password = 'Please enter your password.';
        else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters long.';
        if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password.';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/create', {
                ...formData,
                password: formData.password // Send plain text password (not secure)
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const { token, data: { username, email, city, phone, id } } = response.data;

            setAuth({ token, username, email, city, phone, id, userId: id });  // Set userId in context

            navigate('/', { replace: true });
            Toast.fire({
                icon: "success",
                title: "Registered successfully"
            });
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setErrors({ email: 'This email is already taken' });
            } else {
                console.error('Error:', error);
            }
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container sign-up-page">
                <div className="row">
                    <div className="col-md-6 sign-up text-center">
                        <div>
                            <h2 className="fw-bold text-primary animate__animated animate__rollIn">
                                Welcome to our largest community
                            </h2>
                            <h6 className="fw-bold animate__animated animate__rollIn">
                                Let's learn something new today!
                            </h6>
                        </div>
                        <img src="images/login/log-in.svg" className="img-fluid animate__animated animate__rollIn" alt="..." />
                    </div>

                    <div className="col-md-6 m-auto animate__animated animate__zoomInDown signup-inputs p-5">
                        <h2 className="text-primary fw-bold">Sign up for your <br />account!</h2>
                        <h6 className="fw-bold">Nice to see you! Please sign up with your account.</h6>

                        <form className="mt-4 signup-form" onSubmit={handleSubmit} autoComplete="on">
                            {['username', 'email', 'phone', 'city', 'password', 'confirmPassword'].map((field, index) => (
                                <div key={index} className="form-group animate__animated animate__zoomInDown position-relative">
                                    <label htmlFor={field} className="text-primary">
                                        {field.charAt(0).toUpperCase() + field.slice(1).replace('confirmPassword', 'Confirm Password')} *
                                    </label>
                                    <input
                                        id={field}
                                        type={field === 'password' || field === 'confirmPassword' ? 'password' : field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleInputChange}
                                        className="form-control"
                                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                        autoComplete={field === 'confirmPassword' ? 'new-password' : field}
                                    />
                                    <i className={`fa-solid fa-${field === 'username' ? 'user' : field === 'email' ? 'envelope' : field === 'phone' ? 'phone' : field === 'city' ? 'city' : 'lock'} input-icon text-muted`}></i>
                                    {errors[field] && <h6 className="error-log">{errors[field]}</h6>}
                                </div>
                            ))}
                            {/* <div className="form-check my-4">
                                <input className="form-check-input mt-1" type="checkbox" id="flexCheckDefault" />
                                <label htmlFor="flexCheckDefault" className="form-check-label">
                                    By signing up, you agree to the terms of service
                                </label>
                            </div> */}

                            <input className="btn-submit" type="submit" value="Sign up" />

                            {/* <div className="row">
                                <div className="position-relative my-4">
                                    <hr />
                                    <p className="small position-absolute top-50 start-50 translate-middle bg-primary px-5">Or</p>
                                </div>
                                <div className="col-xxl-6 d-grid">
                                    <a href="#" className="btn btn-primary btn-block mb-2 signup-with">
                                        <i className="fab fa-fw fa-google me-2"></i>Signup with Google
                                    </a>
                                </div>
                                <div className="col-xxl-6 d-grid">
                                    <a href="#" className="btn btn-primary btn-block signup-with-facebook">
                                        <i className="fab fa-fw fa-facebook-f me-2"></i>Signup with Facebook
                                    </a>
                                </div>
                            </div> */}
                            <div className="mt-4 text-center">
                                <span className="text-muted">
                                    Already have an account?
                                    <Link to="/login"> Sign in here</Link>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ScrollToTop smooth
                color='var(--background-color)'
                style={{ backgroundColor: 'var(--text-color)' }}
                className='animate__animated animate__flash animate__infinite infinite animate__slower'
            />
        </div>
    );
};

export default SignUp;
