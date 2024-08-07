import React, { useEffect, useContext } from 'react';
import Navbar from '../Navigation/NavBar';
import { useLocation } from 'react-router';
import Footer from '../Navigation/Footer';
import ScrollToTop from 'react-scroll-to-top';
import axios from 'axios';
import { UserContext } from '../../UserContext'; // استيراد UserContext

const Profile = () => {
    const { auth, setAuth } = useContext(UserContext); // استخدام useContext للوصول إلى البيانات من UserContext
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/allusers');
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (auth.token) {
            setAuth(auth);
        }

        fetchData();
    }, [auth.token]);

    return (
        <div>
            <Navbar />
            <div className="container contact-us ">
                <div className="row">
                    <div className='m-auto position-relative col-md-6'>
                        <img className='img-fluid tag' src="images/tag-2.png" alt="" />
                        <h2 className='main-title text-primary mb-2 wow fadeInLeft' data-wow-delay=".3s">Profile</h2>
                        <p className='text-muted fw-bold mb-5 wow fadeInUp' data-wow-delay=".4s" data-wow-duration="3s">
                            Nice To See You! welcome to your profile
                        </p>
                    </div>
                    <div className='col-md-6 text-center'>
                        <img className='img-fluid wow fadeInDown hat mb-5' data-wow-delay=".3s" src="images/banner.png" alt="title-all" />
                    </div>
                    <div className="col-md-12 col-lg-6 px-3 profile-info-section">
                        {auth.username && auth.email && auth.phone && auth.city ? (
                            <div>
                                <h6 className='text-primary'>username  :</h6>
                                <p className='profile-info p-2'>{auth.username}</p>
                                <h6 className='text-primary'>E-mail  :</h6>
                                <p className='profile-info p-2'>{auth.email}</p>
                                <h6 className='text-primary'>phone  :</h6>
                                <p className='profile-info p-2'>{auth.phone}</p>
                                <h6 className='text-primary'>city  :</h6>
                                <p className='profile-info p-2'>{auth.city}</p>
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                    <div className="col-md-12 col-lg-6 contact-banner position-relative wow fadeInUp" data-wow-delay='1s'>
                        <img className='img-fluid' src="images/contact-us/contact-us.jpg" alt="contact" />
                        <img className='img-fluid position-absolute kian-logo' src="images/logo.jpeg" alt="logo" />
                    </div>
                </div>
            </div>
            <ScrollToTop smooth
                color='var(--background-color)'
                style={{ backgroundColor: 'var(--text-color)' }}
                className='animate__animated animate__flash animate__infinite	infinite animate__slower'
            />
            <Footer />
        </div>
    );
};

export default Profile;
