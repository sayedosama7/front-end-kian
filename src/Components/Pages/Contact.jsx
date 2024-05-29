/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Navbar from '../Navigation/NavBar'
import { IoLocationOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import Footer from '../Navigation/Footer';
import ScrollToTop from 'react-scroll-to-top';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Contact = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        message: '',
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

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //validation
        const newErrors = {};
        if (!formData.full_name) newErrors.full_name = 'Please enter your name.';
        if (!formData.email) newErrors.email = 'Please enter your email.';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email.';
        if (!formData.phone) newErrors.phone = 'Please enter your phone.';
        if (!formData.message) newErrors.message = 'Please enter your message.';
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/create_contact', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const { data } = response;
            navigate('/', { replace: true });
            Toast.fire({
                icon: "success",
                title: "Thank You For Contacting Us"
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }


    return (
        <div>
            <Navbar />
            <div className="container contact-us">
                <div className="row">
                    {/* start title banner  */}
                    <div className='m-auto position-relative col-md-6'>
                        <img className='img-fluid tag' src="/images/instructors/tag-2.png" alt="" />
                        <h2 className='main-title text-primary mb-2 wow fadeInLeft' data-wow-delay=".3s">contact us</h2>
                        <p className='text-muted fw-bold mb-5 wow fadeInUp' data-wow-delay=".4s" data-wow-duration="3s">
                            Write Us Anytime, We Would
                            Love To Hear From You!
                        </p>
                    </div>

                    <div className='col-md-6 text-center'>
                        <img className='img-fluid wow fadeInDown hat mb-5' data-wow-delay=".3s" src="/images/instructors/instructors-banner.png" alt="title-all" />
                    </div>

                    {/* start form */}
                    <div className="col-md-12 col-lg-6 px-2">
                        <form action="" className='pt-4 mt-5' onSubmit={handleSubmit} autoComplete="on">

                            <div className="form-group animate__animated animate__zoomInDown position-relative">
                                <label htmlFor='full_name' className="text-primary fw-bold">Full Name *</label>
                                <input id='full_name' type="text" name='full_name' value={formData.full_name} onChange={handleInputChange} className="form-control" placeholder="Your name" autoComplete="name" />
                                {errors.full_name && <h6 className="error-log">{errors.full_name}</h6>}
                            </div>

                            <div className="form-group wow fadeInUp">
                                <label htmlFor='email' className='text-primary fw-bold'>Email</label>
                                <input id='email' className='form-control' onChange={handleInputChange} value={formData.email} type="email" name="email" autoComplete="email" />
                                {errors.email && <h6 className="error-log">{errors.email}</h6>}
                            </div>

                            <div className="form-group wow fadeInUp">
                                <label htmlFor='phone' className='text-primary fw-bold'>Phone</label>
                                <input id='phone' className='form-control' onChange={handleInputChange} value={formData.phone} type="tel" name="phone" autoComplete="tel" />
                                {errors.phone && <h6 className="error-log">{errors.phone}</h6>}
                            </div>

                            <div className="form-group wow fadeInUp">
                                <label htmlFor='message' className='text-primary fw-bold'>Message</label>
                                <textarea id='message' className='form-control p-5' onChange={handleInputChange} value={formData.message} name="message" autoComplete="off"></textarea>
                                {errors.message && <h6 className="error-log">{errors.message}</h6>}
                            </div>

                            <div className="btn-glow mt-4 wow fadeInUp">
                                <input className="btn-submit" type="submit" value="Send Message" />
                            </div>
                        </form>

                    </div>
                    {/* End form */}

                    <div className="col-md-12 col-lg-6 contact-banner position-relative wow fadeInUp" data-wow-delay='1s'>
                        <img className='img-fluid' src="/images/pexels-cottonbro-studio-6803545.jpg" alt="contact" />
                        <img className='img-fluid position-absolute kian-logo' src="/images/logo.jpeg" alt="logo" />
                    </div>

                    <div className='col-md-12 w-75 m-auto contact-address mt-5 px-3 wow fadeInUp'>
                        <div className='box'>
                            <IoLocationOutline size={60} className='box-icon' />
                            <div className='box-caption px-2 py-2'>
                                <p className='text-primary fw-bold'>Zagazig Agriculture Square</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-12 w-75 m-auto contact-address px-3 wow fadeInUp'>
                        <div className='box'>
                            <CiPhone size={60} className='box-icon' />
                            <div className='box-caption py-2'>
                                <a className='text-primary fw-bold' href="mailto:ke4577216@gmail.com"><p>ke4577216@gmail.com</p></a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-12 w-75 m-auto contact-address px-3 wow fadeInUp'>
                        <div className='box'>
                            <CiMail size={60} className='box-icon' />
                            <div className='box-caption px-2 py-2'>
                                <a className='text-primary fw-bold' href="tel:01062160382"><p>01062160382</p></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <ScrollToTop smooth
                color='#fff'
                style={{ backgroundColor: '#372B73' }}
                className='animate__animated animate__flash animate__infinite	infinite animate__slower'
            />
            <Footer />
        </div>
    )
}

export default Contact