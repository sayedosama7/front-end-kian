/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Navigation/NavBar';
import ScrollToTop from 'react-scroll-to-top';
import Swal from 'sweetalert2';
import bcrypt from 'bcryptjs';
import { UserContext } from '../../UserContext'; // تأكد من مسار الاستيراد

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
    const { auth, setAuth } = useContext(UserContext); // استخدام الـ context بشكل صحيح
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (auth.token) {
            navigate('/', { replace: true });
        }
    }, [auth]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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
            setAuth({
                token,
                username: user.username,
                email: user.email,
                city: user.city,
                phone: user.phone,
                id: user.id,
            });

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
                        <img src="images/login/log-in.svg" className="img-fluid animate__animated animate__rollIn" alt="..." />
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
                                <div className="text-primary-hover">
                                    <Link to="/forget">
                                        <p>Forgot password?</p>
                                    </Link>
                                </div>
                            </div>

                            <input type="submit" value="Login" className="btn-submit" />
                        </form>

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
