/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Navigation/NavBar';
import ScrollToTop from 'react-scroll-to-top';
import Swal from 'sweetalert2';
import bcrypt from 'bcryptjs'; // استيراد bcryptjs

const LogIn = () => {
    const { pathname } = useLocation();
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

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/', { replace: true });
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate form data
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Please Enter Your Email.';
        if (!formData.password) newErrors.password = 'Please Enter Your Password.';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/allusers', { params: formData });
            const userData = response.data.data;

            if (!formData.email) {
                setErrors({ email: 'Please enter your email' });
                return;
            }
            const user = userData.find(user => user.email === formData.email);
            if (!user) {
                setErrors({ email: 'The email address you entered is not connected to an account.' });
                return;
            }

            const isPasswordCorrect = await bcrypt.compare(formData.password, user.password);
            if (!isPasswordCorrect) {
                setErrors({ password: 'Incorrect password.' });
                return;
            }

            const token = response.data.token;
            localStorage.setItem('token', token);
            localStorage.setItem('role', user.role);
            localStorage.setItem('username', user.username);
            localStorage.setItem('userEmail', user.email);
            localStorage.setItem('userCity', user.city);
            localStorage.setItem('userPhone', user.phone);

            navigate('/', { replace: true });
            Toast.fire({
                icon: "success",
                title: "Signed in successfully"
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div>
            <Navbar />
            <div className="container login">
                <div className="row">
                    <div className="col-md-6 sign-up text-center">
                        <div>
                            <h2 className="fw-bold text-primary animate__animated animate__rollIn">Welcome to our largest community</h2>
                            <h6 className="fw-bold animate__animated animate__rollIn">let's learn something new today!</h6>
                        </div>
                        <img src="./images/login/log-in.svg" className="img-fluid animate__animated animate__rollIn" alt="..." />
                    </div>

                    <div className="col-md-6 m-auto animate__animated animate__zoomInDown signup-inputs p-5">
                        <h2 className="text-primary fw-bold">Login to kian academy</h2>
                        <h6 className='fw-bold'>Nice to see you! Please log in with your account.</h6>

                        <form onSubmit={handleSubmit} className='mt-4 signup-form'>
                            <div className="form-group animate__animated animate__zoomInDown position-relative">
                                <label htmlFor='email' className="text-primary">E-mail *</label>
                                <input id='email' type="email" name='email' onChange={handleChange} value={formData.email} className="form-control" placeholder="E-mail" autoComplete="email" />
                                <i className="fa-solid fa-envelope input-icon text-muted"></i>
                                {errors.email && <h6 className="error-log">{errors.email}</h6>}
                            </div>

                            <div className="form-group animate__animated animate__zoomInDown position-relative">
                                <label htmlFor='password' className="text-primary">Password *</label>
                                <input id='password' type="password" name='password' onChange={handleChange} value={formData.password} className="form-control" placeholder="**********" autoComplete="current-password" />
                                <i className="fa-solid fa-lock input-icon text-muted"></i>
                                {errors.password && <h6 className="error-log">{errors.password}</h6>}
                            </div>

                            <div className="mb-4 d-flex justify-content-between mb-4">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label htmlFor='exampleCheck1' className="form-check-label">Remember me</label>
                                </div>
                                <div className="text-primary-hover">
                                    <Link to="/forget">
                                        <p>Forgot password?</p>
                                    </Link>
                                </div>
                            </div>

                            <input type="submit" value="Login" className="btn-submit" />

                        </form>

                        <div className="row">
                            <div className="position-relative my-4">
                                <hr />
                                <p className="small position-absolute top-50 start-50 translate-middle bg-primary px-5">Or</p>
                            </div>
                            <div className="col-xxl-6 d-grid">
                                <a href="#" className="btn btn-primary btn-block mb-2 signup-with"><i className="fab fa-fw fa-google me-2"></i>Login with Google</a>
                            </div>
                            <div className="col-xxl-6 d-grid">
                                <a href="#" className="btn btn-primary btn-block signup-with-facebook"><i className="fab fa-fw fa-facebook-f me-2"></i>Login with Facebook</a>
                            </div>
                        </div>

                        <div className="mt-4 text-center">
                            <span className='text-muted'>Don't have an account? <Link to="/signup">Sign up here</Link></span>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTop smooth
                color='var(--background-color)'
                style={{ backgroundColor: 'var(--text-color)' }}
                className='animate__animated animate__flash animate__infinite	infinite animate__slower'
            />
        </div>
    );
};

export default LogIn;